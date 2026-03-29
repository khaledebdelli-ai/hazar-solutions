import { Code2, Server, Cloud, Users, Heart } from "lucide-react";
import { Section, SectionTitle, SectionContent, SkillBadge, Card } from "@/components/ui";
import { skills } from "@/data";
import type { SkillCategory } from "@/types";

const iconMap = {
  backend: Server,
  frontend: Code2,
  devops: Cloud,
  quality: Users,
  soft: Heart,
};

const colorMap: Record<SkillCategory["icon"], { icon: string; bg: string; border: string }> = {
  backend: { icon: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  frontend: { icon: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
  devops: { icon: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
  quality: { icon: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20" },
  soft: { icon: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
};

function Skills() {
  return (
    <Section id="skills">
      <SectionContent>
        <SectionTitle>Skills & Expertise</SectionTitle>
        <div className="grid md:grid-cols-2 gap-5">
          {skills.map((category) => {
            const Icon = iconMap[category.icon];
            const colors = colorMap[category.icon];
            return (
              <Card key={category.name} className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${colors.bg} border ${colors.border}`}>
                    <Icon size={20} className={colors.icon} />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-200">
                    {category.name}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill}>{skill}</SkillBadge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </SectionContent>
    </Section>
  );
}

export { Skills };
