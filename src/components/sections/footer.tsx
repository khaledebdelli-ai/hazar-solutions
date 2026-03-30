"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";
import { AnimatedSection } from "@/components/ui";
import { profile } from "@/data";
import { useI18n } from "@/i18n";

const socialLinks = [
  { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
  { icon: Linkedin, href: profile.linkedin, label: "LinkedIn", external: true },
  { icon: Github, href: profile.github, label: "GitHub", external: true },
];

function Footer() {
  const { t } = useI18n();

  return (
    <footer id="contact" className="container mx-auto px-6 py-12 border-t border-slate-800/50 relative overflow-hidden">
      {/* Decorative gradient */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-500/5 rounded-full blur-3xl"
        aria-hidden="true"
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ repeat: Infinity, duration: 6, type: "tween", ease: "easeInOut" }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <AnimatedSection>
          <h2 className="text-2xl font-bold mb-4">
            {t.footer.heading} <span className="text-gradient">{t.footer.headingHighlight}</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            {t.footer.description}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <motion.a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors mb-8"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -10px rgba(59, 130, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={18} />
            {t.footer.cta}
          </motion.a>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex justify-center gap-4 mb-8">
            {socialLinks.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 rounded-lg transition-colors hover:border-blue-500/30"
                aria-label={item.label}
                whileHover={{ y: -4, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <item.icon size={20} className="text-slate-400 hover:text-blue-400 transition-colors" />
              </motion.a>
            ))}
          </div>
        </AnimatedSection>

        <motion.p
          className="text-slate-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          &copy; {new Date().getFullYear()} {profile.name}. {t.footer.rights}
        </motion.p>
      </div>
    </footer>
  );
}

export { Footer };
