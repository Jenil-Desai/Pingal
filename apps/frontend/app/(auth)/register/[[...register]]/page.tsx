
import RegisterForm from "@/components/sections/register/RegisterForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

export default function Page() {

  return (
    <div className="min-h-screen flex bg-pingal-background">
      {/* Left side - Register form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-8 flex justify-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-10 w-10 bg-gradient-to-br from-pingal-lavender to-pingal-neon rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-white font-bold text-2xl">Pingal</span>
            </Link>
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">Create your account</h1>
            <p className="text-muted-foreground mt-2">Join Pingal's decentralized uptime monitoring platform</p>
          </div>

          <RegisterForm />

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <Link href="/login" className="text-pingal-lavender hover:text-pingal-neon transition-colors">
                Sign in
              </Link>
            </p>

            <p className="text-xs text-muted-foreground mt-4">
              By signing up, you agree to our <Link href="/terms" className="underline">Terms of Service</Link> and <Link href="/privacy" className="underline">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Illustration */}
      <div className="hidden lg:flex w-1/2 bg-card relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-pingal-lavender/20 rounded-full filter blur-3xl animate-pulse-soft"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-pingal-mint/10 rounded-full filter blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-12">
          <div className="mb-8">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-12 w-12 bg-gradient-to-br from-pingal-lavender to-pingal-neon rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl">P</span>
              </div>
              <span className="text-white font-bold text-3xl">Pingal</span>
            </Link>
          </div>

          <div className="bg-gradient-to-br from-pingal-lavender/20 to-pingal-neon/20 p-[1px] rounded-2xl mb-8">
            <div className="glass-card rounded-2xl p-8 max-w-md">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold gradient-text">Powered by Web3 Infrastructure</h2>
                <p className="mt-2 text-muted-foreground">Your monitoring data secured on DPIN</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-pingal-lavender/20 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pingal-lavender">
                      <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                      <line x1="2" x2="22" y1="10" y2="10"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Decentralized Storage</h3>
                    <p className="text-sm text-muted-foreground">Your data is distributed across multiple nodes</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-pingal-mint/20 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pingal-mint">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">Enhanced Security</h3>
                    <p className="text-sm text-muted-foreground">Cryptographic verification of all monitoring data</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-pingal-neon/20 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pingal-neon">
                      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium">No Central Control</h3>
                    <p className="text-sm text-muted-foreground">Resilient against censorship and outages</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-muted-foreground max-w-md">
            "Pingal has transformed how we approach uptime monitoring, making it truly resilient and trustworthy."
          </p>
          <div className="flex items-center mt-4">
            <div className="w-8 h-8 rounded-full bg-pingal-lavender/30 flex items-center justify-center">
              <span className="font-semibold text-sm">E</span>
            </div>
            <div className="ml-2">
              <p className="text-sm font-medium">Elena Vega</p>
              <p className="text-xs text-muted-foreground">CTO @ DappConnect</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
