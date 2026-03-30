"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, ExternalLink, Phone } from "lucide-react";
import { Section, SectionTitle, SectionContent, Card, AnimatedSection } from "@/components/ui";
import { profile } from "@/data";
import { useI18n } from "@/i18n";

const contactItems = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: ExternalLink, label: "Website", value: profile.website.replace("https://", ""), href: profile.website },
  { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: Linkedin, label: "LinkedIn", value: profile.linkedin.replace("https://", ""), href: profile.linkedin },
];

function About() {
  const { t } = useI18n();

  return (
    <Section id="about">
      <SectionContent>
        <AnimatedSection>
          <SectionTitle>{t.about.title}</SectionTitle>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6">
          <AnimatedSection className="md:col-span-2 space-y-4 text-slate-400" delay={0.1}>
            <p className="text-lg leading-relaxed">{t.about.p1}</p>
            <p className="leading-relaxed">{t.about.p2}</p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="p-5">
                <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">{t.about.contact}</h3>
                <div className="space-y-3">
                  {contactItems.map((item, i) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors group"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      whileHover={{ x: 4 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 10 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <item.icon size={18} className="text-blue-400 shrink-0" />
                      </motion.div>
                      <span className="text-sm truncate">{item.value}</span>
                    </motion.a>
                  ))}
                </div>
              </Card>
            </motion.div>
          </AnimatedSection>
        </div>
      </SectionContent>
    </Section>
  );
}

export { About };
