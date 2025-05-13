
import LoginForm from "@/components/sections/login/LoginForm";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen flex bg-pingal-background">
      {/* Left side - Illustration */}
      <div className="hidden lg:flex w-1/2 bg-card relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pingal-lavender/20 rounded-full filter blur-3xl animate-pulse-soft"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pingal-neon/10 rounded-full filter blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }}></div>
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

          <div className="glass-card rounded-2xl p-6 mb-8 max-w-md">
            <div className="aspect-square relative rounded-lg overflow-hidden border border-white/10">
              <div className="absolute inset-0 bg-pingal-background/80">
                <div className="h-full flex flex-col">
                  <div className="h-8 bg-card/50 border-b border-white/10 flex items-center px-3 gap-1">
                    <div className="w-2 h-2 rounded-full bg-pingal-pink"></div>
                    <div className="w-2 h-2 rounded-full bg-pingal-mint"></div>
                    <div className="w-2 h-2 rounded-full bg-pingal-lavender"></div>
                  </div>
                  <div className="flex-1 p-4 flex items-center justify-center">
                    <div className="space-y-4 w-full">
                      <div className="h-2 w-3/4 mx-auto bg-white/10 rounded-full"></div>
                      <div className="h-8 w-full bg-white/5 rounded-md border border-white/10"></div>
                      <div className="h-8 w-full bg-white/5 rounded-md border border-white/10"></div>
                      <div className="h-8 w-full bg-gradient-to-r from-pingal-lavender to-pingal-neon rounded-md"></div>
                      <div className="h-2 w-1/2 mx-auto bg-white/10 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-lg text-center text-muted-foreground max-w-md">
            Monitor your application&#39;s uptime with a decentralized network powered by DPIN&#39;s Web3 infrastructure
          </p>
        </div>
      </div>

      {/* Right side - Login form */}
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
            <h1 className="text-3xl font-bold">Welcome back</h1>
            <p className="text-muted-foreground mt-2">Enter your credentials to access your account</p>
          </div>

          <LoginForm />

          <p className="text-center text-muted-foreground mt-8">
            Don&#39;t have an account?
            <Link href="/register" className="text-pingal-lavender hover:text-pingal-neon transition-colors">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
