"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Section, SectionTitle, SectionContent, TagBadge, AnimatedSection, staggerContainer, staggerItem } from "@/components/ui";
import { projects } from "@/data";
import { useI18n } from "@/i18n";

function Projects() {
  const { t } = useI18n();

  return (
    <Section id="projects">
      <SectionContent>
        <AnimatedSection>
          <SectionTitle>{t.projects.title}</SectionTitle>
        </AnimatedSection>
        <motion.div
          className="grid md:grid-cols-2 gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {projects.map((project, index) => {
            const translated = t.projects.items[index];
            return (
              <motion.div key={index} variants={staggerItem}>
                <motion.div
                  className="group relative p-6 bg-slate-800/40 rounded-xl border border-slate-700/50 backdrop-blur-sm
                    hover:border-blue-500/30 hover:bg-slate-800/60
                    transition-colors duration-300 h-full"
                  whileHover={{
                    y: -6,
                    boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.08)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Top gradient bar */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-t-xl"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6, ease: "easeOut" }}
                    style={{ transformOrigin: "left" }}
                  />

                  <div className="flex items-center justify-between mb-3">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-semibold text-slate-200 hover:text-blue-400 transition-colors flex items-center gap-2"
                      >
                        {translated?.title || project.title}
                        <motion.span
                          className="inline-block"
                          whileHover={{ rotate: -45, scale: 1.2 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <ExternalLink
                            size={14}
                            className="text-slate-500 group-hover:text-blue-400 transition-colors"
                          />
                        </motion.span>
                      </a>
                    ) : (
                      <span className="text-lg font-semibold text-slate-200">
                        {translated?.title || project.title}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                    {translated?.description || project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag, i) => (
                      <motion.div
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.03 }}
                      >
                        <motion.div whileHover={{ scale: 1.1, y: -1 }}>
                          <TagBadge>{tag}</TagBadge>
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-500 font-medium">{project.period}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </SectionContent>
    </Section>
  );
}

export { Projects };
