import Hero from "@/components/sections/home/Hero";
import Features from "@/components/sections/home/Features/Features";
import Cta from "@/components/sections/home/Cta/Cta";
import Testimonials from "@/components/sections/home/Testimonials/Testimonials";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <Hero />
        <Features />
        <Testimonials />
        <Cta />
      </main>
    </div>
  );
};
