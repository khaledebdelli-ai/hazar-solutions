"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { Section, SectionTitle, SectionContent, Card, AnimatedSection } from "@/components/ui";
import { education } from "@/data";
import { useI18n } from "@/i18n";

function Education() {
  const { t } = useI18n();

  return (
    <Section id="education">
      <SectionContent>
        <AnimatedSection>
          <SectionTitle>{t.education.title}</SectionTitle>
        </AnimatedSection>
        <AnimatedSection delay={0.15}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Card className="p-5">
              <div className="flex items-start gap-4">
                <motion.div
                  className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <GraduationCap size={24} className="text-blue-400" />
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-200">{t.education.degree}</h3>
                  <p className="text-blue-400 font-medium mt-1">{education.institution}</p>
                  <p className="text-slate-400 text-sm flex items-center gap-1.5 mt-2">
                    <MapPin size={14} className="text-slate-500" />
                    {education.location} · {education.period}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatedSection>
      </SectionContent>
    </Section>
  );
}

export { Education };
