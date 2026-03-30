export interface Project {
  title: string;
  description: string;
  tags: string[];
  period: string;
  link?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
  icon: "backend" | "frontend" | "devops" | "quality" | "soft";
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  link?: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface Language {
  name: string;
  proficiency: string;
}

export interface Profile {
  name: string;
  title: string;
  company: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  website: string;
  github: string;
}
