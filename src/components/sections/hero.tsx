"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui";
import { profile } from "@/data";
import { HeroIllustration } from "@/components/illustrations";
import { useI18n } from "@/i18n";

function Hero() {
  const { t } = useI18n();

  return (
    <header className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-slate-950"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Animated glow orbs */}
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        aria-hidden="true"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ repeat: Infinity, duration: 8, type: "tween", ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"
        aria-hidden="true"
        animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.18, 0.1] }}
        transition={{ repeat: Infinity, duration: 6, type: "tween", ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"
        aria-hidden="true"
        animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ repeat: Infinity, duration: 10, type: "tween", ease: "easeInOut", delay: 4 }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        aria-hidden="true"
        style={{
          backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Text content */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="relative px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-sm text-blue-400">
                <motion.span
                  className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                  transition={{ repeat: Infinity, duration: 2, type: "tween", ease: "easeInOut" }}
                />
                <span className="ml-2">{t.hero.available}</span>
              </span>
              <span className="flex items-center gap-1.5 text-sm text-slate-400">
                <MapPin size={14} className="text-blue-400" />
                {profile.location}
              </span>
            </motion.div>

            <motion.p
              className="text-blue-400 font-medium mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {t.hero.tagline}
            </motion.p>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {t.hero.greeting}{" "}
              <span className="text-gradient relative">
                {profile.name}
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                />
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a href={`mailto:${profile.email}`}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button>
                    <Mail size={18} />
                    {t.hero.contactMe}
                  </Button>
                </motion.div>
              </a>
              <motion.button
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
                className="rounded-lg px-4 py-2 text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.hero.viewProjects}
              </motion.button>
              <a href="/khaled_ebdelli_cv_2026.pdf" download>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="secondary">
                    <Download size={18} />
                    {t.hero.downloadCV}
                  </Button>
                </motion.div>
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="ghost">
                    <Linkedin size={18} />
                    LinkedIn
                  </Button>
                </motion.div>
              </a>
            </motion.div>
          </div>

          {/* Right: Illustration */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.8, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center cursor-pointer"
          whileHover={{ borderColor: "#3b82f6" }}
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <motion.div
            className="w-1 h-2 bg-blue-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.8, type: "tween", ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </header>
  );
}

export { Hero };
