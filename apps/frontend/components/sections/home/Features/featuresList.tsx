import { ReactNode } from "react";

type FeatureItem = {
  title: string;
  description: string;
  icon: ReactNode;
  badge?: string;
};

export const features: FeatureItem[] = [
  {
    title: "Decentralized Infrastructure",
    description: "Built on DPIN's Web3 infrastructure, ensuring resilience against single points of failure and censorship resistance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pingal-lavender">
        <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6z"></path>
        <path d="M2 4v.01"></path>
        <path d="M6 2v.01"></path>
        <path d="M10 2v.01"></path>
        <path d="M14 2v.01"></path>
        <path d="M18 2v.01"></path>
        <path d="M22 4v.01"></path>
        <path d="M22 8v.01"></path>
        <path d="M22 12v.01"></path>
        <path d="M22 16v.01"></path>
        <path d="M22 20v.01"></path>
        <path d="M18 22v.01"></path>
        <path d="M14 22v.01"></path>
        <path d="M10 22v.01"></path>
        <path d="M6 22v.01"></path>
        <path d="M2 20v.01"></path>
        <path d="M2 16v.01"></path>
        <path d="M2 12v.01"></path>
        <path d="M2 8v.01"></path>
      </svg>
    ),
    badge: "Core",
  },
  {
    title: "Real-Time Alerts",
    description: "Receive instant notifications via your preferred channels when your services experience downtime or performance issues.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pingal-mint">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      </svg>
    ),
    badge: "Popular",
  },
  {
    title: "Node-Backed Uptime",
    description: "Multiple independent nodes verify your service's availability, ensuring accurate and tamper-resistant monitoring.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pingal-pink">
        <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
        <path d="M9 22v-4h6v4"></path>
        <path d="M8 6h.01"></path>
        <path d="M16 6h.01"></path>
        <path d="M12 6h.01"></path>
        <path d="M12 10h.01"></path>
        <path d="M8 10h.01"></path>
        <path d="M16 10h.01"></path>
        <path d="M8 14h.01"></path>
        <path d="M16 14h.01"></path>
        <path d="M12 14h.01"></path>
      </svg>
    ),
  },
  {
    title: "Detailed Analytics",
    description: "Track uptime percentage, response times, and historical data with interactive dashboards and visualizations.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pingal-lavender">
        <line x1="18" x2="18" y1="20" y2="10"></line>
        <line x1="12" x2="12" y1="20" y2="4"></line>
        <line x1="6" x2="6" y1="20" y2="14"></line>
      </svg>
    ),
  },
  {
    title: "Custom Check Intervals",
    description: "Set personalized monitoring intervals based on your specific requirements and service criticality.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pingal-neon">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
  },
  {
    title: "Multi-Region Monitoring",
    description: "Check your services' availability from multiple geographic regions to ensure global accessibility.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pingal-mint">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M2 12h20"></path>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    ),
    badge: "New",
  },
];
