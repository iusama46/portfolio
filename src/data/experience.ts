export type ExperienceEntry = {
  id: string;
  role: string;
  company: string;
  location?: string;
  dates?: string;
  description?: string;
  responsibilities: string[];
  technologies: string[];
};

// Add employment entries only when the role and employer have been verified.
export const experience: ExperienceEntry[] = [];
export const experienceSummary = "7+ years building mobile and web products, including 5+ years specializing in React Native.";
export const experienceAreas = [
  { title: "Build & evolve", description: "Greenfield product development and production application maintenance." },
  { title: "Architecture & integration", description: "Frontend and mobile architecture, API integrations, and native functionality." },
  { title: "Ship & sustain", description: "Performance optimization, build and release workflows, and cross-functional development." },
];
