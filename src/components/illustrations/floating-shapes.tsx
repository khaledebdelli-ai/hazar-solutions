"use client";

import { motion } from "framer-motion";

function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Large rotating hexagon */}
      <motion.div
        className="absolute -top-20 -right-20 w-64 h-64 opacity-[0.03]"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" fill="none">
          <polygon
            points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
            stroke="#3b82f6"
            strokeWidth="1"
          />
        </svg>
      </motion.div>

      {/* Floating circles */}
      <motion.div
        className="absolute top-1/4 left-[5%] w-3 h-3 rounded-full bg-blue-500/20"
        animate={{
          y: [0, -30, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ repeat: Infinity, duration: 5, type: "tween", ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 right-[10%] w-2 h-2 rounded-full bg-cyan-500/20"
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ repeat: Infinity, duration: 4, type: "tween", ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-2/3 left-[15%] w-4 h-4 rounded-full bg-purple-500/10"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{ repeat: Infinity, duration: 6, type: "tween", ease: "easeInOut", delay: 2 }}
      />

      {/* Floating lines */}
      <motion.div
        className="absolute top-[20%] right-[20%] w-16 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
        animate={{ x: [0, 30, 0], opacity: [0, 0.5, 0] }}
        transition={{ repeat: Infinity, duration: 4, type: "tween", ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[60%] left-[8%] w-12 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
        animate={{ x: [0, -20, 0], opacity: [0, 0.4, 0] }}
        transition={{ repeat: Infinity, duration: 5, type: "tween", ease: "easeInOut", delay: 1.5 }}
      />

      {/* Rotating triangle */}
      <motion.div
        className="absolute bottom-[20%] right-[8%] w-20 h-20 opacity-[0.04]"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 45, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" fill="none">
          <polygon
            points="50,10 90,90 10,90"
            stroke="#06b6d4"
            strokeWidth="1.5"
          />
        </svg>
      </motion.div>

      {/* Cross/Plus shape */}
      <motion.div
        className="absolute top-[45%] right-[5%] opacity-[0.06]"
        animate={{ rotate: 90 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <line x1="12" y1="2" x2="12" y2="22" stroke="#3b82f6" strokeWidth="1.5" />
          <line x1="2" y1="12" x2="22" y2="12" stroke="#3b82f6" strokeWidth="1.5" />
        </svg>
      </motion.div>

      {/* Diamond shape */}
      <motion.div
        className="absolute bottom-[35%] left-[3%] w-8 h-8 opacity-[0.05]"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 30, type: "tween", ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" fill="none">
          <rect
            x="15" y="15" width="70" height="70"
            stroke="#8b5cf6"
            strokeWidth="2"
            transform="rotate(45 50 50)"
          />
        </svg>
      </motion.div>
    </div>
  );
}

export { FloatingShapes };
