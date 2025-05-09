import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Clock,
  Globe,
  Shield,
  Zap,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="mesh-bg absolute inset-0 z-0"></div>
        <div className="absolute inset-0 z-10 bg-gradient-radial from-transparent to-background"></div>
        <div className="container relative z-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="flex flex-col gap-6">
              <div className="w-fit inline-flex items-center gap-2 rounded-full border border-border/40 bg-muted px-4 py-1.5 text-sm font-medium">
                <span className="flex h-2 w-2 rounded-full bg-pingal-neon animate-pulse"></span>
                Decentralized Web3 Infrastructure
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-pingal-blue via-pingal-purple to-pingal-pink bg-clip-text text-transparent">
                Decentralized Uptime Monitoring with Pingal
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Monitor your services with a decentralized network of nodes. Get
                real-time alerts and ensure your applications are always
                available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-pingal-blue to-pingal-purple hover:opacity-90 transition-opacity"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-pingal-purple/30 bg-background hover:bg-accent hover:text-accent-foreground"
                  >
                    View Dashboard
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[500px] animate-float">
              <div className="aspect-square rounded-full bg-pingal-purple/20 p-1 animate-pulse-glow">
                <div className="h-full w-full rounded-full bg-background p-6">
                  <div className="relative h-full w-full">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-40 w-40 rounded-full bg-pingal-blue/20 flex items-center justify-center">
                        <Activity className="h-20 w-20 text-pingal-blue" />
                      </div>
                    </div>

                    {/* Orbiting nodes */}
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                      <div className="h-12 w-12 rounded-full bg-pingal-green/30 p-1">
                        <div className="h-full w-full rounded-full bg-background flex items-center justify-center">
                          <Globe className="h-6 w-6 text-pingal-green" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
                      <div className="h-12 w-12 rounded-full bg-pingal-purple/30 p-1">
                        <div className="h-full w-full rounded-full bg-background flex items-center justify-center">
                          <Shield className="h-6 w-6 text-pingal-purple" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                      <div className="h-12 w-12 rounded-full bg-pingal-pink/30 p-1">
                        <div className="h-full w-full rounded-full bg-background flex items-center justify-center">
                          <AlertTriangle className="h-6 w-6 text-pingal-pink" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="h-12 w-12 rounded-full bg-pingal-neon/30 p-1">
                        <div className="h-full w-full rounded-full bg-background flex items-center justify-center">
                          <Clock className="h-6 w-6 text-pingal-neon" />
                        </div>
                      </div>
                    </div>

                    {/* Connecting lines */}
                    <svg
                      className="absolute inset-0 h-full w-full"
                      viewBox="0 0 200 200"
                    >
                      <path
                        d="M100,0 L100,100"
                        stroke="rgba(165, 196, 253, 0.3)"
                        strokeWidth="1"
                      />
                      <path
                        d="M200,100 L100,100"
                        stroke="rgba(216, 180, 254, 0.3)"
                        strokeWidth="1"
                      />
                      <path
                        d="M100,200 L100,100"
                        stroke="rgba(251, 207, 232, 0.3)"
                        strokeWidth="1"
                      />
                      <path
                        d="M0,100 L100,100"
                        stroke="rgba(34, 211, 238, 0.3)"
                        strokeWidth="1"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-16 max-w-[800px] text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Powerful Features for Reliable Monitoring
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Pingal provides a comprehensive set of tools to ensure your
              services are always up and running.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-card/50 backdrop-blur border-border/40 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-pingal-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-pingal-blue/20">
                  <Globe className="h-6 w-6 text-pingal-blue" />
                </div>
                <CardTitle>Decentralized Network</CardTitle>
                <CardDescription>
                  Leverage a global network of nodes to monitor your services
                  from multiple locations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-pingal-blue"></div>
                    <span>Global coverage across continents</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-pingal-blue"></div>
                    <span>Redundant monitoring for reliability</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-pingal-blue"></div>
                    <span>Web3-powered infrastructure</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/40 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-pingal-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-pingal-purple/20">
                  <Zap className="h-6 w-6 text-pingal-purple" />
                </div>
                <CardTitle>Real-Time Alerts</CardTitle>
                <CardDescription>
                  Get instant notifications when your services experience
                  downtime or performance issues.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-pingal-purple"></div>
                    <span>Multi-channel notifications</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-pingal-purple"></div>
                    <span>Customizable alert thresholds</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-pingal-purple"></div>
                    <span>Incident management workflow</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/40 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-pingal-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-pingal-green/20">
                  <Activity className="h-6 w-6 text-pingal-green" />
                </div>
                <CardTitle>Comprehensive Analytics</CardTitle>
                <CardDescription>
                  Gain insights into your service performance with detailed
                  metrics and reports.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-pingal-green"></div>
                    <span>Historical uptime tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-pingal-green"></div>
                    <span>Performance trend analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-pingal-green"></div>
                    <span>Exportable reports</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/20">
        <div className="container">
          <div className="mx-auto mb-16 max-w-[800px] text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
              Trusted by Developers Worldwide
            </h2>
            <p className="text-muted-foreground md:text-xl">
              See what our users have to say about Pingal's decentralized
              monitoring platform.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-card/50 backdrop-blur border-border/40">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback className="bg-pingal-blue/20 text-pingal-blue">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">Jane Doe</CardTitle>
                    <CardDescription>DevOps Engineer</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "Pingal has transformed how we monitor our microservices. The
                  decentralized approach gives us confidence that our monitoring
                  is as resilient as our infrastructure."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/40">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback className="bg-pingal-purple/20 text-pingal-purple">
                      JS
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">John Smith</CardTitle>
                    <CardDescription>CTO, TechStart</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "The real-time alerts have saved us countless hours of
                  downtime. We can respond to issues before our customers even
                  notice them."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border/40">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback className="bg-pingal-green/20 text-pingal-green">
                      AK
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">Alex Kim</CardTitle>
                    <CardDescription>Full Stack Developer</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  "As someone who values decentralization, I appreciate that
                  Pingal brings these principles to monitoring. It's a perfect
                  fit for our Web3 applications."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl border border-border/40 bg-card/50 backdrop-blur p-8 md:p-12 lg:p-16">
            <div className="mesh-bg absolute inset-0 z-0"></div>
            <div className="absolute inset-0 z-10 bg-gradient-radial from-transparent to-card/90"></div>

            <div className="relative z-20 mx-auto max-w-[800px] text-center">
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl bg-gradient-to-r from-pingal-blue via-pingal-purple to-pingal-pink bg-clip-text text-transparent">
                Ready to Experience Decentralized Monitoring?
              </h2>
              <p className="mb-8 text-muted-foreground md:text-xl">
                Join thousands of developers who trust Pingal for their uptime
                monitoring needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/register">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-pingal-blue to-pingal-purple hover:opacity-90 transition-opacity"
                  >
                    Get Started for Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/docs">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-pingal-purple/30 bg-background hover:bg-accent hover:text-accent-foreground"
                  >
                    Read the Docs
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
