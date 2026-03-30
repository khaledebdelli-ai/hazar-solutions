import type { Translation } from "./types";

export const fr: Translation = {
  nav: {
    about: "À propos",
    skills: "Compétences",
    experience: "Expérience",
    projects: "Projets",
    education: "Formation",
    contact: "Contact",
  },
  hero: {
    available: "Disponible pour des projets",
    tagline: "Lead Developer · Full Stack JavaScript",
    greeting: "Bonjour, je suis",
    description:
      "Ingénieur Full Stack JavaScript avec plus de 10 ans d'expérience dans la conception, le développement et l'architecture de solutions web et mobiles à fort impact. Spécialisé dans l'écosystème Node.js / NestJS / React.js / TypeScript.",
    contactMe: "Me contacter",
    viewProjects: "Voir les projets",
    downloadCV: "Télécharger CV",
  },
  about: {
    title: "À propos",
    p1: "Au fil de missions dans la santé, la finance, la banque et l'administration publique, j'ai consolidé un rôle de Lead Developer : leadership technique, mentorat d'équipe, définition d'architectures scalables et assurance qualité du code.",
    p2: "Je place la performance, la sécurité et la livraison au cœur de chaque projet. Mon focus : construire des backends robustes, des frontends modernes et des pipelines DevOps automatisés.",
    contact: "Contact",
  },
  skills: {
    title: "Compétences & Expertise",
    categories: {
      backend: "Développement Back-end",
      frontend: "Développement Front-end",
      devops: "DevOps & Cloud",
      quality: "Qualité & Architecture",
      soft: "Savoir-être",
    },
  },
  experience: {
    title: "Expérience",
    present: "Présent",
    roles: {
      "GE HealthCare": "Ingénieur Full Stack",
      "SLIB": "Développeur Back-end NestJS",
      "Société Générale": "Ingénieur Full Stack",
      "Datatys": "Lead Développeur Full Stack & DevOps",
    },
  },
  projects: {
    title: "Projets phares",
    items: [
      {
        title: "GE HealthCare - Applications critiques de santé",
        description:
          "Direction du développement d'applications web critiques pour le secteur de la santé numérique en JavaScript/TypeScript. Mise en œuvre de techniques avancées de débogage et garantie de la robustesse du code en environnement médical réglementé. Collaboration avec des équipes pluridisciplinaires pour livrer des solutions conformes HIPAA avec 99.9% de disponibilité.",
      },
      {
        title: "Datatys - Plateforme SaaS de monitoring temps réel",
        description:
          "Lead technique d'une plateforme de monitoring complète traitant des flux de données en temps réel. Architecture microservices, développement de dashboards interactifs React.js et mise en place de pipelines CI/CD complets. Réduction du temps de déploiement de 60% et amélioration de la fiabilité à 99.95%.",
      },
      {
        title: "Société Générale - Applications bancaires sécurisées",
        description:
          "Développement d'applications mobiles et desktop sécurisées pour les opérations bancaires. Construction de backends Spring Boot, frontends React.js/TypeScript et applications mobiles React Native iOS/Android. Mise en place de mesures de sécurité enterprise et conformité PCI DSS.",
      },
      {
        title: "SLIB - Services financiers post-marché",
        description:
          "Ingénierie de services backend critiques pour le traitement de transactions financières. Développement d'APIs REST avec NestJS, implémentation de jobs cron automatisés pour le traitement par lots et intégration des formats de données financières Euroclear. Précision des données à 100%.",
      },
      {
        title: "CISIRH - Système de gestion des grèves",
        description:
          "Construction d'une application web complète pour la gestion des opérations de grève gouvernementales. Développement d'APIs REST avec NestJS, création d'un frontend React.js responsive et atteinte de 80%+ de couverture de tests. Contrôle d'accès par rôles et systèmes de notification en temps réel.",
      },
      {
        title: "Tableaux de bord Fintech - Solutions de paiement",
        description:
          "Développement de tableaux de bord financiers pour plusieurs entreprises fintech (Digicash, TayraPay, Accelex). Interfaces de visualisation de données en temps réel, intégration d'APIs de traitement de paiements et systèmes d'authentification sécurisés. Support de plus d'1M de transactions quotidiennes.",
      },
    ],
  },
  education: {
    title: "Formation",
    degree: "Diplôme National d'Ingénieur en Informatique",
  },
  languages: {
    title: "Langues",
    items: [
      { name: "Français", proficiency: "Courant / Professionnel" },
      { name: "Anglais", proficiency: "Professionnel (lecture, rédaction, échanges techniques)" },
    ],
  },
  footer: {
    heading: "Travaillons",
    headingHighlight: "ensemble",
    description: "Intéressé par une collaboration ? N'hésitez pas à me contacter pour des projets ou simplement pour échanger.",
    cta: "Me contacter",
    rights: "Tous droits réservés.",
  },
};
