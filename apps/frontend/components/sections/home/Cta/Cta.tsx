import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Cta() {
  return (
    <section className="py-24 bg-gradient-to-b from-card/50 to-pingal-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-12 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-64 h-64 bg-pingal-lavender/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pingal-neon/10 rounded-full filter blur-3xl"></div>
          </div>

          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="gradient-text">Monitor</span> Your Services?
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto mb-8">
              Join the community of developers trusting Pingal for reliable, decentralized uptime monitoring.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/register">
                <Button className="text-lg px-8 py-6 bg-gradient-to-r from-pingal-lavender to-pingal-neon text-white hover:opacity-90 btn-glow">
                  Get Started for Free
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="text-lg px-8 py-6 border-pingal-lavender text-pingal-lavender hover:bg-pingal-lavender/10">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
