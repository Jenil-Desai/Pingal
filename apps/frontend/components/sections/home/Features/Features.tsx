import { Badge } from "@/components/ui/badge";
import { features } from "@/components/sections/home/Features/featuresList";

export default function Features() {
  return (
    <div className="py-24 bg-gradient-to-b from-pingal-background to-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful <span className="gradient-text">Features</span> for Reliable Monitoring
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            Everything you need to keep your applications running smoothly with the power of decentralized infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-xl hover:shadow-lg hover:shadow-pingal-lavender/5 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pingal-lavender/5 to-pingal-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 bg-card rounded-lg">
                    {feature.icon}
                  </div>

                  {feature.badge && (
                    <Badge className="bg-pingal-lavender/20 text-pingal-lavender hover:bg-pingal-lavender/30">
                      {feature.badge}
                    </Badge>
                  )}
                </div>

                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
