import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pingal-lavender/20 rounded-full filter blur-3xl animate-pulse-soft"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pingal-neon/10 rounded-full filter blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pingal-lavender/20 to-pingal-neon/20 rounded-full filter blur-3xl"></div>

        {/* Main content */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="gradient-text">Decentralized</span> Uptime <br className="hidden sm:block" />
          Monitoring with <span className="gradient-text">Pingal</span>
        </h1>

        <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
          Monitor your application's uptime with a decentralized network powered by DPIN's Web3 infrastructure. Get real-time alerts and never miss a beat.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/register">
            <Button className="text-lg px-8 py-6 bg-gradient-to-r from-pingal-lavender to-pingal-neon text-white hover:opacity-90 btn-glow">
              Get Started
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="outline" className="text-lg px-8 py-6 border-pingal-lavender text-pingal-lavender hover:bg-pingal-lavender/10">
              View Dashboard
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="glass-card p-6 rounded-xl">
            <div className="text-3xl font-bold text-pingal-lavender">99.9%</div>
            <div className="text-muted-foreground mt-2">Uptime Guarantee</div>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <div className="text-3xl font-bold text-pingal-mint">1,000+</div>
            <div className="text-muted-foreground mt-2">Active Monitors</div>
          </div>
          <div className="glass-card p-6 rounded-xl">
            <div className="text-3xl font-bold text-pingal-neon">100ms</div>
            <div className="text-muted-foreground mt-2">Average Response Time</div>
          </div>
        </div>

        {/* Illustration */}
        <div className="mt-16 relative">
          <div className="glass-card rounded-2xl p-6 overflow-hidden">
            <div className="bg-pingal-background relative z-10 rounded-xl p-4 md:p-8 shadow-2xl border border-white/10">
              <div className="relative aspect-video overflow-hidden rounded-lg border border-white/10">
                <div className="absolute inset-0 flex flex-col">
                  <div className="h-10 bg-pingal-background border-b border-white/10 flex items-center px-4 gap-2">
                    <div className="w-3 h-3 rounded-full bg-pingal-pink"></div>
                    <div className="w-3 h-3 rounded-full bg-pingal-mint"></div>
                    <div className="w-3 h-3 rounded-full bg-pingal-lavender"></div>
                    <div className="text-xs text-muted-foreground ml-2">Pingal Dashboard</div>
                  </div>
                  <div className="flex-1 grid grid-cols-3 gap-4 p-4">
                    <div className="col-span-2 flex flex-col gap-4">
                      <div className="h-20 bg-card/50 rounded-lg border border-white/5 p-4">
                        <div className="h-3 w-1/3 bg-pingal-lavender/30 rounded-full"></div>
                        <div className="flex items-center mt-4 gap-2">
                          <div className="h-4 w-4 rounded-full bg-green-500"></div>
                          <div className="h-2 w-1/4 bg-white/20 rounded-full"></div>
                        </div>
                      </div>
                      <div className="h-40 bg-card/50 rounded-lg border border-white/5 p-4">
                        <div className="h-3 w-1/4 bg-pingal-lavender/30 rounded-full"></div>
                        <div className="mt-4 h-24 flex items-end gap-2">
                          <div className="h-full w-8 bg-pingal-lavender/20 rounded-t-md"></div>
                          <div className="h-3/4 w-8 bg-pingal-lavender/30 rounded-t-md"></div>
                          <div className="h-1/2 w-8 bg-pingal-lavender/40 rounded-t-md"></div>
                          <div className="h-2/3 w-8 bg-pingal-lavender/50 rounded-t-md"></div>
                          <div className="h-3/4 w-8 bg-pingal-lavender/60 rounded-t-md"></div>
                          <div className="h-full w-8 bg-pingal-lavender/70 rounded-t-md"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="h-full bg-card/50 rounded-lg border border-white/5 p-4">
                        <div className="h-3 w-1/2 bg-pingal-lavender/30 rounded-full"></div>
                        <div className="mt-6 space-y-3">
                          <div className="h-3 w-full bg-white/10 rounded-full"></div>
                          <div className="h-3 w-full bg-white/10 rounded-full"></div>
                          <div className="h-3 w-3/4 bg-white/10 rounded-full"></div>
                          <div className="h-3 w-full bg-white/10 rounded-full"></div>
                          <div className="h-3 w-1/2 bg-white/10 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-hero-gradient"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
