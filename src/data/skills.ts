import type { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
  {
    name: "Back-end",
    skills: [
      "Node.js",
      "NestJS",
      "Express.js",
      "Spring Boot",
      "REST API",
      "GraphQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "TypeORM",
    ],
    icon: "backend",
  },
  {
    name: "Front-end",
    skills: [
      "React.js",
      "Next.js",
      "React Native",
      "TypeScript",
      "ReactQuery",
      "HTML5/CSS3",
    ],
    icon: "frontend",
  },
  {
    name: "DevOps & Cloud",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Terraform",
      "Ansible",
      "Jenkins",
      "GitLab CI/CD",
      "Linux",
    ],
    icon: "devops",
  },
  {
    name: "Quality & Architecture",
    skills: [
      "Jest",
      "TDD",
      "Clean Architecture",
      "Microservices",
      "Design Patterns",
      "Swagger/OpenAPI",
    ],
    icon: "quality",
  },
];
