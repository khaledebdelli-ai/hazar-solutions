"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Section, SectionTitle, SectionContent, Card, AnimatedSection, staggerContainer, staggerItem } from "@/components/ui";
import { experience } from "@/data";
import { useI18n } from "@/i18n";

function Experience() {
  const { t } = useI18n();

  return (
    <Section id="experience">
      <SectionContent>
        <AnimatedSection>
          <SectionTitle>{t.experience.title}</SectionTitle>
        </AnimatedSection>
        <motion.div
          className="relative space-y-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {/* Timeline line */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-cyan-500/30 to-transparent hidden md:block ml-2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
          />

          {experience.map((exp, index) => {
            const role = t.experience.roles[exp.company] || exp.role;
            const period = exp.period.replace("Present", t.experience.present);

            return (
              <motion.div key={index} variants={staggerItem} className="md:pl-8 relative">
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-0 top-6 w-[18px] h-[18px] rounded-full border-2 border-blue-500 bg-slate-950 hidden md:block"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, type: "spring", stiffness: 300 }}
                  style={{ left: "-6px" }}
                >
                  <motion.div
                    className="absolute inset-1 rounded-full bg-blue-500"
                    animate={{ scale: [1, 0.6, 1], opacity: [1, 0.5, 1] }}
                    transition={{ repeat: Infinity, duration: 3, type: "tween", ease: "easeInOut", delay: index * 0.5 }}
                  />
                </motion.div>

                <motion.div
                  whileHover={{ y: -3, x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="group p-5">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-2">
                      <div className="flex-1">
                        {exp.link ? (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-lg font-semibold text-slate-200 group-hover:text-blue-400 transition-colors"
                          >
                            {exp.company}
                            <motion.span
                              initial={{ opacity: 0, x: -5 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                            >
                              <ExternalLink size={14} className="text-slate-500 group-hover:text-blue-400" />
                            </motion.span>
                          </a>
                        ) : (
                          <h3 className="text-lg font-semibold text-slate-200 group-hover:text-blue-400 transition-colors">
                            {exp.company}
                          </h3>
                        )}
                        <p className="text-blue-400 font-medium mt-0.5">{role}</p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-sm text-slate-400 bg-slate-800/50 px-3 py-1 rounded-lg shrink-0">
                        <Calendar size={14} className="text-slate-500" />
                        {period}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 flex items-center gap-1.5">
                      <MapPin size={14} className="text-slate-500" />
                      {exp.location}
                    </p>
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

export { Experience };
