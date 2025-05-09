import Link from "next/link";
import { Activity,Check } from "lucide-react";
import RegisterForm from "@/components/sections/register/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center py-12">
      <div className="grid w-full max-w-[1200px] grid-cols-1 lg:grid-cols-2 lg:gap-8">
        {/* Left column - Illustration */}
        <div className="hidden lg:flex flex-col items-center justify-center p-8 relative overflow-hidden rounded-3xl">
          <div className="mesh-bg absolute inset-0 z-0"></div>
          <div className="absolute inset-0 z-10 bg-gradient-radial from-transparent to-background/90"></div>

          <div className="relative z-20 flex flex-col items-center text-center">
            <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-pingal-blue to-pingal-purple p-[2px]">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-background">
                <Activity className="h-10 w-10 text-pingal-neon" />
              </div>
            </div>

            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-pingal-blue via-pingal-purple to-pingal-pink bg-clip-text text-transparent">
              Join Pingal Today
            </h1>

            <p className="mb-8 max-w-[400px] text-muted-foreground">
              Create your account and start monitoring your services with our
              decentralized network.
            </p>

            <div className="grid gap-4 w-full max-w-[400px]">
              <div className="flex items-center gap-3 rounded-xl border border-border/40 bg-card/50 backdrop-blur p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pingal-green/20">
                  <Check className="h-4 w-4 text-pingal-green" />
                </div>
                <p className="text-sm">
                  Global monitoring from multiple locations
                </p>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-border/40 bg-card/50 backdrop-blur p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pingal-green/20">
                  <Check className="h-4 w-4 text-pingal-green" />
                </div>
                <p className="text-sm">
                  Real-time alerts via multiple channels
                </p>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-border/40 bg-card/50 backdrop-blur p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pingal-green/20">
                  <Check className="h-4 w-4 text-pingal-green" />
                </div>
                <p className="text-sm">
                  Powered by decentralized Web3 infrastructure
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column - Register form */}
        <div className="flex flex-col items-center justify-center p-4 sm:p-8">
          <div className="mx-auto w-full max-w-[400px]">
            <div className="mb-8 text-center lg:text-left">
              <h1 className="text-3xl font-bold">Create Account</h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Enter your details to create your Pingal account
              </p>
            </div>

            <RegisterForm />

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-foreground underline-offset-4 hover:underline"
                >
                  Sign in
                </Link>
              </p>
              <p className="mt-4 text-xs text-muted-foreground">
                Your account is powered by decentralized infrastructure
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
