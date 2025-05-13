"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { RegisterSchema, registerSchema } from "@/schemas/registerSchema";
import { useSignUp } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { logger } from "@repo/logger";
import { ArrowRight, Check, Eye, EyeOff, X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { OtpVerificationDialog } from "./OtpVerficationDialog";

export default function RegisterForm() {
  const [showVerification, setShowVerification] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const { isLoaded, signUp, setActive } = useSignUp();
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const calculateStrength = (password: string) => {
    let strength = 0;

    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;

    return strength;
  };

  const passwordStrength = calculateStrength(password);

  const getStrengthText = () => {
    if (passwordStrength <= 25) return "Weak";
    if (passwordStrength <= 50) return "Fair";
    if (passwordStrength <= 75) return "Good";
    return "Strong";
  };

  const getStrengthColor = () => {
    if (passwordStrength <= 25) return "bg-red-500";
    if (passwordStrength <= 50) return "bg-yellow-500";
    if (passwordStrength <= 75) return "bg-green-400";
    return "bg-green-500";
  };

  async function signInWithGoogle() {
    if (!isLoaded) {
      toast.error("Error", {
        description: "Clerk is not loaded",
        dismissible: true,
      });
      return;
    }

    try {
      await signUp.authenticateWithRedirect({
        strategy: "oauth_google",
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/dashboard",
        continueSignUp: true,
      });
    } catch (error) {
      logger.error("Google authentication error : ", error);
      const errorMessage =
        error instanceof Error ? error.message : "Something went wrong";
      toast.error("Error", {
        description: errorMessage,
        dismissible: true,
      });
    }
  }

  async function onSubmit(data: RegisterSchema) {
    if (!isLoaded) {
      toast.error("Clerk is not loaded yet. Please try again.");
      return;
    }

    try {
      await signUp.create({
        emailAddress: data.email,
        password: data.password,
        firstName: data.name.slice(0, data.name.indexOf(" ")),
        lastName: data.name.slice(data.name.indexOf(" ") + 1),
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });
      setShowVerification(true);
    } catch (error) {
      logger.error("[CLIENT]: Error creating account: ", error);
      toast.error("An error occurred while creating your account.");
    }
  }

  if (!isLoaded) {
    toast.error("Clerk is not loaded yet. Please try again.");
    return;
  }

  return (
    <>
      <Form {...form}>
        <form className="grid gap-6" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="grid gap-2">
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    className="border-border/40 bg-muted/20"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="grid gap-2">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="name@example.com"
                    className="border-border/40 bg-muted/20"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="grid gap-2">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="border-border/40 bg-muted/20 pr-10"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        setPassword(e.target.value);
                      }}
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 py-2 text-muted-foreground"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                      <span className="sr-only">
                        {showPassword ? "Hide password" : "Show password"}
                      </span>
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
                {password && (
                  <div className="mt-2">
                    <div className="mb-1 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        Password strength: {getStrengthText()}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {passwordStrength}%
                      </span>
                    </div>
                    <Progress
                      value={passwordStrength}
                      className={getStrengthColor()}
                    />

                    <div className="mt-3 grid grid-cols-2 gap-2">
                      <div className="flex items-center gap-1 text-xs">
                        {password.length >= 8 ? (
                          <Check className="h-3 w-3 text-pingal-green" />
                        ) : (
                          <X className="h-3 w-3 text-red-500" />
                        )}
                        <span>At least 8 characters</span>
                      </div>

                      <div className="flex items-center gap-1 text-xs">
                        {/[A-Z]/.test(password) ? (
                          <Check className="h-3 w-3 text-pingal-green" />
                        ) : (
                          <X className="h-3 w-3 text-red-500" />
                        )}
                        <span>Uppercase letter</span>
                      </div>

                      <div className="flex items-center gap-1 text-xs">
                        {/[0-9]/.test(password) ? (
                          <Check className="h-3 w-3 text-pingal-green" />
                        ) : (
                          <X className="h-3 w-3 text-red-500" />
                        )}
                        <span>Number</span>
                      </div>

                      <div className="flex items-center gap-1 text-xs">
                        {/[^A-Za-z0-9]/.test(password) ? (
                          <Check className="h-3 w-3 text-pingal-green" />
                        ) : (
                          <X className="h-3 w-3 text-red-500" />
                        )}
                        <span>Special character</span>
                      </div>
                    </div>
                  </div>
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="border-border/40 bg-muted/20"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="bg-gradient-to-r from-pingal-blue to-pingal-purple hover:opacity-90 transition-opacity">
            Create Account
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </Form>

      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-pingal-background text-muted-foreground">
              Or sign up with
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4">
          <Button variant="outline" className="border-white/10 hover:bg-card/50" onClick={signInWithGoogle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
            Google
          </Button>
        </div>
      </div>

      <OtpVerificationDialog
        setActive={setActive}
        isLoaded={isLoaded}
        signUp={signUp}
        open={showVerification}
        onOpenChange={setShowVerification}
        setVerify={setIsVerified}
      />

      {/* Show success message when verified */}
      {isVerified && (
        <div className="mt-4 p-4 bg-green-100 text-green-800 rounded">
          Your account has been successfully verified! You can now log in.
        </div>
      )}
    </>
  );
}
