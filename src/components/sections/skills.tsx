"use client";

import { motion } from "framer-motion";
import { Code2, Server, Cloud, Users, Heart } from "lucide-react";
import { Section, SectionTitle, SectionContent, SkillBadge, Card, AnimatedSection, staggerContainer, staggerItem } from "@/components/ui";
import { skills } from "@/data";
import { useI18n } from "@/i18n";
import type { SkillCategory } from "@/types";

const iconMap = {
  backend: Server,
  frontend: Code2,
  devops: Cloud,
  quality: Users,
  soft: Heart,
};

const colorMap: Record<SkillCategory["icon"], { icon: string; bg: string; border: string; glow: string }> = {
  backend: { icon: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20", glow: "group-hover:shadow-blue-500/10" },
  frontend: { icon: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20", glow: "group-hover:shadow-cyan-500/10" },
  devops: { icon: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20", glow: "group-hover:shadow-emerald-500/10" },
  quality: { icon: "text-purple-400", bg: "bg-purple-500/10", border: "border-purple-500/20", glow: "group-hover:shadow-purple-500/10" },
  soft: { icon: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20", glow: "group-hover:shadow-rose-500/10" },
};

function Skills() {
  const { t } = useI18n();

  return (
    <Section id="skills">
      <SectionContent>
        <AnimatedSection>
          <SectionTitle>{t.skills.title}</SectionTitle>
        </AnimatedSection>
        <motion.div
          className="grid md:grid-cols-2 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {skills.map((category) => {
            const Icon = iconMap[category.icon];
            const colors = colorMap[category.icon];
            const categoryName = t.skills.categories[category.icon];
            return (
              <motion.div key={category.icon} variants={staggerItem}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className={`p-5 group ${colors.glow} hover:shadow-xl`}>
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        className={`p-2 rounded-lg ${colors.bg} border ${colors.border}`}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <Icon size={20} className={colors.icon} />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-slate-200">
                        {categoryName}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {category.skills.map((skill, i) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.03, duration: 0.3 }}
                        >
                          <motion.div whileHover={{ scale: 1.08, y: -2 }} transition={{ type: "spring", stiffness: 400 }}>
                            <SkillBadge>{skill}</SkillBadge>
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </SectionContent>
    </Section>
  );
}

export { Skills };
