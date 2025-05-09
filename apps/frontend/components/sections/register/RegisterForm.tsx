"use client";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { LoginSchema } from "@/schemas/loginSchema";
import { registerSchema } from "@/schemas/registerSchema";
import { useSignUp } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { logger } from "@repo/logger";
import { ArrowRight, Check, Eye, EyeOff, X } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const { isLoaded, signUp, setActive } = useSignUp();
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword:""
    }
  })

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
        continueSignUp: true
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

  async function onSubmit(data: LoginSchema) {
    console.log(data);
  }

  return (
    <>
      <Form {...form}>
        <form className="grid gap-6" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
          control={form.control}
          name="name"
          render={({field}) => (
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
          render={({field}) => (
            <FormItem className="grid gap-2">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="name@example.com"
                  className="border-border/40 bg-muted/20"
                  {...field}
                />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
          />

          <FormField
          control={form.control}
          name="password"
          render={({field}) => (
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
          render={({field}) => (
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

      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <Button
        type="button"
        variant="outline"
        className="w-full flex items-center justify-center gap-2"
        onClick={signInWithGoogle}
      >
        Sign in with Google
      </Button>
    </>
  )
}
