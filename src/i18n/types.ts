export type Locale = "fr" | "en";

export interface Translation {
  nav: {
    about: string;
    skills: string;
    experience: string;
    projects: string;
    education: string;
    contact: string;
  };
  hero: {
    available: string;
    tagline: string;
    greeting: string;
    description: string;
    contactMe: string;
    viewProjects: string;
    downloadCV: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    contact: string;
  };
  skills: {
    title: string;
    categories: {
      backend: string;
      frontend: string;
      devops: string;
      quality: string;
      soft: string;
    };
  };
  experience: {
    title: string;
    present: string;
    roles: Record<string, string>;
  };
  projects: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  education: {
    title: string;
    degree: string;
  };
  languages: {
    title: string;
    items: {
      name: string;
      proficiency: string;
    }[];
  };
  footer: {
    heading: string;
    headingHighlight: string;
    description: string;
    cta: string;
    rights: string;
  };
}
