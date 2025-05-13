type TestimonialType = {
  initial: string;
  name: string;
  position: string;
  quote: string;
  rating: number;
  color: string;
}

export const testimonials: TestimonialType[] = [
  {
    initial: "A",
    name: "Alex Smith",
    position: "Lead Developer @ TechCloud",
    quote: "Pingal's decentralized approach gives us confidence that our monitoring is reliable and resistant to centralized failures.",
    rating: 5,
    color: "pingal-lavender"
  },
  {
    initial: "J",
    name: "Jessica Chen",
    position: "CTO @ BlockFlow",
    quote: "The multi-region monitoring and instant alerts have saved us countless hours of downtime. Worth every penny!",
    rating: 5,
    color: "pingal-mint"
  },
  {
    initial: "M",
    name: "Michael Johnson",
    position: "DevOps Engineer @ DataStream",
    quote: "The analytics and dashboards provide incredible insights into our service performance across different regions.",
    rating: 4,
    color: "pingal-neon"
  }
];
