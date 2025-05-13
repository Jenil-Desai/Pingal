import { testimonials } from "./testimonialsList";

export default function Testimonials() {
  return (
    <section className="py-24 bg-pingal-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by <span className="gradient-text">Developers</span> Worldwide
          </h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            See what our users have to say about Pingal's decentralized uptime monitoring platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className={`w-10 h-10 rounded-full bg-${testimonial.color}/30 flex items-center justify-center`}>
                  <span className="font-semibold">{testimonial.initial}</span>
                </div>
                <div className="ml-3">
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "{testimonial.quote}"
              </p>
              <div className="mt-4 flex">
                <div className={`flex text-${testimonial.color}`}>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill={i < testimonial.rating ? "currentColor" : "none"}
                      stroke={i < testimonial.rating ? "none" : "currentColor"}
                      strokeWidth={i < testimonial.rating ? "0" : "2"}
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
