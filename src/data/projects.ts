export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  contribution?: string[];
  stack: string[];
  features: string[];
  image: string;
  imagePosition?: string;
  accent: "lime" | "blue" | "coral" | "sand" | "violet";
  visual: "map" | "analytics" | "delivery" | "food" | "fleet" | "queue";
  links: ProjectLink[];
  status?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "makyee",
    name: "Makyee",
    category: "PropTech / Real Estate",
    description:
      "A consumer and agent real estate marketplace for property discovery and exploration.",
    contribution: [
      "Worked on the production V1 application and its ongoing feature development.",
      "Worked on V2 with improved architecture, redesigned UI/UX, and improved user flows.",
      "Implemented mobile interfaces, reusable components, backend API integration, and application flows.",
      "Worked on property search, filters, maps, property discovery, and related mobile functionality.",
    ],
    stack: ["React Native", "TypeScript"],
    features: [
      "Advanced property search and filters",
      "Map-based property discovery",
      "Nearby locations and points of interest",
      "Property details",
      "Messaging",
      "Consumer and agent-focused flows",
    ],
    image: "/images/projects/product-devices.png",
    imagePosition: "left center",
    accent: "lime",
    visual: "map",
    links: [
      { label: "Website", href: "https://www.makyee.com/" },
      { label: "App Store", href: "https://apps.apple.com/ae/app/makyee/id6504030415" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.redspider.makyee" },
    ],
    featured: true,
  },
  {
    slug: "makyee-business",
    name: "Makyee Business",
    category: "PropTech / Real Estate Business",
    description:
      "A business-side application within the Makyee real estate ecosystem, designed around property-related operations.",
    contribution: [
      "Maintained and enhanced V1.",
      "Built V2 from scratch using React Native and TypeScript.",
      "Established a cleaner, more maintainable application architecture and redesigned UI/UX.",
      "Developed business-focused flows, backend API integration, and reusable application components.",
    ],
    stack: ["React Native", "TypeScript"],
    features: [
      "Business-focused real estate workflows",
      "Property-related operations",
      "API-driven mobile flows",
      "Reusable UI architecture",
      "Redesigned V2 user experience",
    ],
    image: "/images/projects/product-devices.png",
    imagePosition: "center center",
    accent: "blue",
    visual: "analytics",
    links: [],
    status: "Private / not publicly released",
    featured: true,
  },
  {
    slug: "makyee-tokenization",
    name: "Makyee Tokenization",
    category: "PropTech / Real Estate Investment",
    description:
      "A mobile application for discovering and exploring tokenized real estate investment opportunities.",
    stack: ["Flutter", "Dart"],
    features: [
      "Tokenized real estate discovery",
      "Property investment exploration",
      "Investment-focused mobile experience",
      "Property information and investment flows",
    ],
    image: "/images/projects/product-devices.png",
    imagePosition: "right center",
    accent: "violet",
    visual: "analytics",
    links: [],
  },
  {
    slug: "delivery-platform",
    name: "Delivery Platform",
    category: "Logistics / Food Delivery / Grocery",
    description:
      "A multi-service delivery ecosystem for on-demand logistics, food delivery, grocery ordering, and rider operations.",
    contribution: [
      "Built the customer mobile application from scratch.",
      "Built the dedicated rider application from scratch.",
      "Developed reusable mobile architecture and application flows.",
      "Implemented ordering, delivery, tracking, scheduling, rider workflows, backend APIs, and real-time functionality.",
    ],
    stack: ["React Native", "TypeScript"],
    features: [
      "Food and grocery ordering",
      "On-demand logistics and multiple delivery or vehicle types",
      "Live delivery tracking, ETA, and location-based flows",
      "Scheduled deliveries, cloud cart, address management, and tips",
      "Cash on delivery, wallet and payout-related flows",
      "Order history and push notifications",
      "Dedicated rider workflows and delivery or task management",
    ],
    image: "/images/projects/product-devices.png",
    imagePosition: "right center",
    accent: "coral",
    visual: "delivery",
    links: [
      { label: "Customer app demo", href: "https://drive.google.com/drive/folders/1XQm9uRG0i1iaDaaUkCpulkdVjy50Ot5J" },
      { label: "Rider app demo", href: "https://drive.google.com/drive/folders/1ki6F52POZKNqQISp0CA6EcgUivVRWV2C" },
    ],
  },
  {
    slug: "mumbai-spices",
    name: "Mumbai Spices",
    category: "Food & Restaurant / E-commerce",
    description:
      "A mobile ordering application for Mumbai Spices Bahrain, for browsing and ordering food on iOS and Android.",
    stack: ["Flutter", "Dart"],
    features: [],
    image: "/images/projects/product-devices.png",
    imagePosition: "left center",
    accent: "sand",
    visual: "food",
    links: [
      { label: "App Store", href: "https://apps.apple.com/bh/app/mumbai-spices/id1474529325" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.bh.mumbaispices" },
    ],
  },
  {
    slug: "fleet-master",
    name: "Fleet Master",
    category: "Fleet Management / Enterprise SaaS",
    description:
      "An enterprise fleet and rider management platform for operations, compliance, assets, and multi-branch work.",
    contribution: [
      "Led frontend development from requirements gathering through architecture and implementation.",
      "Built operational interfaces and workflows.",
      "Worked on deployment and production support.",
    ],
    stack: [],
    features: [
      "Rider onboarding and compliance workflows",
      "Visa, license, document, and file handling",
      "Penalties, asset, and rider status management",
      "Multi-branch operations and operational dashboards",
    ],
    image: "/images/projects/product-devices.png",
    imagePosition: "center center",
    accent: "blue",
    visual: "fleet",
    links: [{ label: "Website", href: "https://fleetmaster.ae/" }],
  },
  {
    slug: "queue",
    name: "Queue",
    category: "SaaS / Queue & Booking Management",
    description:
      "A multi-tenant SaaS platform for centralized bookings, queues, services, kiosks, displays, and customer token lifecycles.",
    stack: [],
    features: [
      "Multi-tenant architecture, companies, and departments",
      "Services, counters, booking, and queue management",
      "Kiosk interface, display screens, and text-to-speech announcements",
      "Reports, activity logs, packages, and trials",
      "Token lifecycle management, transfers, no-shows, and cancellations",
    ],
    image: "/images/projects/product-devices.png",
    imagePosition: "center center",
    accent: "lime",
    visual: "queue",
    links: [{ label: "Website", href: "https://queue.ae/" }],
  },
];
