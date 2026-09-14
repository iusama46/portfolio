export type ProjectLink = {
  label: "Website" | "App Store" | "Google Play";
  href?: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  contribution: string;
  stack: string[];
  features: string[];
  image: string;
  imagePosition?: string;
  accent: "lime" | "blue" | "coral" | "sand" | "violet";
  visual: "map" | "analytics" | "delivery" | "food" | "fleet" | "queue";
  links: ProjectLink[];
  access?: "Private / unreleased" | "Release status to be confirmed";
  featured?: boolean;
};

// This is the only file you need to update when projects change.
// URLs, specific contributions, features, and project-specific stacks are deliberately
// placeholders until the portfolio owner provides confirmed information.
export const projects: Project[] = [
  {
    slug: "makyee",
    name: "Makyee",
    category: "Real estate platform",
    description: "A real estate platform spanning mobile and web product experiences.",
    contribution: "Contribution details to be added.",
    stack: ["Stack details", "to be added"],
    features: ["Feature details", "to be added"],
    image: "/images/projects/product-devices.png",
    imagePosition: "left center",
    accent: "lime",
    visual: "map",
    links: [
      { label: "Website" },
      { label: "App Store" },
      { label: "Google Play" },
    ],
    access: "Release status to be confirmed",
    featured: true,
  },
  {
    slug: "makyee-business",
    name: "Makyee Business",
    category: "Business operations",
    description: "A business-facing product surface within the Makyee ecosystem.",
    contribution: "Contribution details to be added.",
    stack: ["Stack details", "to be added"],
    features: ["Feature details", "to be added"],
    image: "/images/projects/product-devices.png",
    imagePosition: "center center",
    accent: "blue",
    visual: "analytics",
    links: [{ label: "Website" }],
    access: "Release status to be confirmed",
    featured: true,
  },
  {
    slug: "makyee-tokenization",
    name: "Makyee Tokenization",
    category: "Tokenization",
    description: "A tokenization-focused product within the Makyee product family.",
    contribution: "Contribution details to be added.",
    stack: ["Stack details", "to be added"],
    features: ["Feature details", "to be added"],
    image: "/images/projects/product-devices.png",
    imagePosition: "right center",
    accent: "violet",
    visual: "analytics",
    links: [{ label: "Website" }],
    access: "Private / unreleased",
  },
  {
    slug: "delivery-platform",
    name: "Delivery Platform",
    category: "Logistics",
    description: "A delivery-focused product experience for operational workflows.",
    contribution: "Contribution details to be added.",
    stack: ["Stack details", "to be added"],
    features: ["Feature details", "to be added"],
    image: "/images/projects/product-devices.png",
    imagePosition: "right center",
    accent: "coral",
    visual: "delivery",
    links: [
      { label: "App Store" },
      { label: "Google Play" },
    ],
    access: "Release status to be confirmed",
  },
  {
    slug: "mumbai-spices",
    name: "Mumbai Spices",
    category: "Food & beverage",
    description: "A digital product for a food and beverage business.",
    contribution: "Contribution details to be added.",
    stack: ["Stack details", "to be added"],
    features: ["Feature details", "to be added"],
    image: "/images/projects/product-devices.png",
    imagePosition: "left center",
    accent: "sand",
    visual: "food",
    links: [
      { label: "Website" },
      { label: "App Store" },
    ],
    access: "Release status to be confirmed",
  },
  {
    slug: "fleet-master",
    name: "Fleet Master",
    category: "Fleet management",
    description: "A fleet-management product for coordinating operational work.",
    contribution: "Contribution details to be added.",
    stack: ["Stack details", "to be added"],
    features: ["Feature details", "to be added"],
    image: "/images/projects/product-devices.png",
    imagePosition: "center center",
    accent: "blue",
    visual: "fleet",
    links: [{ label: "Google Play" }],
    access: "Private / unreleased",
  },
  {
    slug: "queue",
    name: "Queue",
    category: "Queue management",
    description: "A product concept for clearer queue and service coordination.",
    contribution: "Contribution details to be added.",
    stack: ["Stack details", "to be added"],
    features: ["Feature details", "to be added"],
    image: "/images/projects/product-devices.png",
    imagePosition: "center center",
    accent: "lime",
    visual: "queue",
    links: [
      { label: "App Store" },
      { label: "Google Play" },
    ],
    access: "Release status to be confirmed",
  },
];
