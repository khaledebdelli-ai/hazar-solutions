import type { Translation } from "./types";

export const en: Translation = {
  nav: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    education: "Education",
    contact: "Contact",
  },
  hero: {
    available: "Available for projects",
    tagline: "Lead Developer · Full Stack JavaScript",
    greeting: "Hi, I'm",
    description:
      "Full Stack JavaScript Engineer with 10+ years of experience designing, developing, and architecting high-impact web and mobile solutions. Specialized in the Node.js / NestJS / React.js / TypeScript ecosystem.",
    contactMe: "Contact Me",
    viewProjects: "View Projects",
    downloadCV: "Download CV",
  },
  about: {
    title: "About Me",
    p1: "Across missions in healthcare, finance, banking, and public administration, I have consolidated a Lead Developer role: technical leadership, team mentoring, scalable architecture definition, and code quality assurance.",
    p2: "I place performance, security, and delivery at the heart of every project. My focus is on building robust backends, modern frontends, and automated DevOps pipelines.",
    contact: "Contact",
  },
  skills: {
    title: "Skills & Expertise",
    categories: {
      backend: "Back-end Development",
      frontend: "Front-end Development",
      devops: "DevOps & Cloud",
      quality: "Quality & Architecture",
      soft: "Soft Skills",
    },
  },
  experience: {
    title: "Experience",
    present: "Present",
    roles: {
      "GE HealthCare": "Full Stack Engineer",
      "SLIB": "NestJS Back-end Developer",
      "Société Générale": "Full Stack Engineer",
      "Datatys": "Lead Full Stack & DevOps Developer",
    },
  },
  projects: {
    title: "Featured Projects",
    items: [
      {
        title: "GE HealthCare - Critical Healthcare Applications",
        description:
          "Led development of mission-critical web applications for digital healthcare sector using JavaScript/TypeScript. Implemented advanced debugging techniques and ensured code robustness in regulated medical environments. Collaborated with cross-functional teams to deliver HIPAA-compliant solutions with 99.9% uptime.",
      },
      {
        title: "Datatys - Real-Time SaaS Monitoring Platform",
        description:
          "Technical lead for a comprehensive monitoring platform processing real-time data streams. Architected microservices infrastructure, developed interactive React.js dashboards, and implemented complete CI/CD pipelines. Reduced deployment time by 60% and improved system reliability to 99.95% uptime.",
      },
      {
        title: "Société Générale - Secure Banking Applications",
        description:
          "Developed secure mobile and desktop applications for banking operations. Built Spring Boot backends, React.js/TypeScript frontends, and React Native mobile apps for iOS/Android. Implemented enterprise-grade security measures and maintained PCI DSS compliance across all applications.",
      },
      {
        title: "SLIB - Post-Trade Financial Services",
        description:
          "Engineered critical backend services for financial transaction processing. Developed REST APIs using NestJS, implemented automated cron jobs for batch processing, and integrated Euroclear financial data formats. Ensured 100% data accuracy and real-time processing capabilities.",
      },
      {
        title: "CISIRH - Strike Management System",
        description:
          "Built comprehensive web application for government strike management operations. Developed REST APIs with NestJS, created responsive React.js frontend, and achieved 80%+ test coverage. Implemented role-based access control and real-time notification systems for critical government workflows.",
      },
      {
        title: "Fintech Dashboards - Payment Solutions",
        description:
          "Developed financial dashboards for multiple fintech companies (Digicash, TayraPay, Accelex). Built real-time data visualization interfaces, integrated payment processing APIs, and implemented secure authentication systems. Supported transaction volumes exceeding 1M daily with sub-second response times.",
      },
    ],
  },
  education: {
    title: "Education",
    degree: "National Engineering Degree in Computer Science",
  },
  languages: {
    title: "Languages",
    items: [
      { name: "French", proficiency: "Fluent / Professional" },
      { name: "English", proficiency: "Professional (reading, writing, technical discussions)" },
    ],
  },
  footer: {
    heading: "Let's work",
    headingHighlight: "together",
    description: "Interested in working together? Feel free to reach out for collaborations or just a friendly hello.",
    cta: "Get in touch",
    rights: "All rights reserved.",
  },
};
