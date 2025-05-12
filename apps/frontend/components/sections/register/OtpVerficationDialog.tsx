import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { OtpSchema, otpSchema } from "@/schemas/otpVerficationSchema"
import { SetActive, SignUpResource } from "@clerk/types"
import { zodResolver } from "@hookform/resolvers/zod"
import { logger } from "@repo/logger"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

type OtpVerificationDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  setVerify: (value: boolean) => void
  isLoaded: boolean;
  signUp: SignUpResource;
  setActive: SetActive;
}

export function OtpVerificationDialog({ open, onOpenChange, setVerify, isLoaded, signUp, setActive }: OtpVerificationDialogProps) {
  const router = useRouter();
  const form = useForm({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      otp: "",
    },
  })

  async function onSubmit(data: OtpSchema) {
    if (!isLoaded || !signUp || !setActive) {
      toast.error("Clerk is not loaded yet. Please try again.");
      return;
    }

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code: data.otp,
      });

      if (signUpAttempt.status === "complete") {
        await setActive({ session: signUpAttempt.createdSessionId });
        setVerify(true)
        onOpenChange(false)
        router.push("/");
        return;
      } else {
        setVerify(false);
        onOpenChange(false);
        toast.error("Error", {
          description: "Invalid verification code",
          dismissible: true,
        });
      }
    } catch (error) {
      logger.error("Error verifying user email", error);
      const errorMessage = error instanceof Error ? error.message : "Something went wrong";
      setVerify(false);
      onOpenChange(false);
      toast.error("Error", {
        description: errorMessage,
        dismissible: true,
      });
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Verify your account</DialogTitle>
          <DialogDescription>
            Enter the 6-digit code sent to your email or phone number.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="otp"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>One-time password</FormLabel>
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button type="submit">Verify</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
