import { Code2, Server, Cloud, Users } from "lucide-react";
import { Section, SectionTitle, SectionContent, SkillBadge } from "@/components/ui";
import { skills } from "@/data";
import type { SkillCategory } from "@/types";

const iconMap = {
  backend: Server,
  frontend: Code2,
  devops: Cloud,
  quality: Users,
};

const colorMap: Record<SkillCategory["icon"], string> = {
  backend: "text-blue-400",
  frontend: "text-cyan-400",
  devops: "text-emerald-400",
  quality: "text-purple-400",
};

function Skills() {
  return (
    <Section id="skills">
      <SectionContent>
        <SectionTitle>Skills & Expertise</SectionTitle>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <div key={category.name}>
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Icon size={20} className={colorMap[category.icon]} />
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill}>{skill}</SkillBadge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </SectionContent>
    </Section>
  );
}

export { Skills };
