"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { Section, SectionTitle, SectionContent, Card, AnimatedSection, staggerContainer, staggerItem } from "@/components/ui";
import { useI18n } from "@/i18n";

function Languages() {
  const { t } = useI18n();

  return (
    <Section id="languages">
      <SectionContent>
        <AnimatedSection>
          <SectionTitle>{t.languages.title}</SectionTitle>
        </AnimatedSection>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {t.languages.items.map((lang, index) => (
            <motion.div key={index} variants={staggerItem}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="p-4 text-center group">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Globe size={24} className="text-blue-400 mx-auto mb-2 group-hover:text-cyan-400 transition-colors" />
                  </motion.div>
                  <h3 className="font-semibold text-slate-200">{lang.name}</h3>
                  <p className="text-slate-400 text-sm mt-1">{lang.proficiency}</p>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </SectionContent>
    </Section>
  );
}

export { Languages };
