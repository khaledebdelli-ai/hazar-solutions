"use client";

import { motion } from "framer-motion";

function HeroIllustration() {
  return (
    <div className="relative w-full h-full min-h-[400px]">
      <svg viewBox="0 0 500 500" fill="none" className="w-full h-full">
        {/* Monitor / Screen */}
        <motion.rect
          x="100" y="80" width="300" height="200" rx="12"
          fill="#1e293b"
          stroke="#3b82f6"
          strokeWidth="2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        {/* Screen inner */}
        <motion.rect
          x="115" y="95" width="270" height="170" rx="6"
          fill="#0f172a"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        />
        {/* Code lines */}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <motion.rect
            key={`line-${i}`}
            x={130 + (i % 3) * 8}
            y={115 + i * 20}
            width={80 + ((i * 37) % 60)}
            height="6"
            rx="3"
            fill={i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#06b6d4" : "#64748b"}
            opacity={0.7}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 80 + ((i * 37) % 60), opacity: 0.7 }}
            transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
          />
        ))}
        {/* Monitor stand */}
        <motion.path
          d="M220 280 L280 280 L290 320 L210 320 Z"
          fill="#1e293b"
          stroke="#334155"
          strokeWidth="1.5"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        />
        <motion.rect
          x="190" y="320" width="120" height="8" rx="4"
          fill="#334155"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        />

        {/* Floating elements around monitor */}
        {/* React-like orbit */}
        <motion.ellipse
          cx="250" cy="180" rx="180" ry="40"
          stroke="#3b82f6"
          strokeWidth="1"
          fill="none"
          opacity="0.2"
          initial={{ opacity: 0, rotate: -20 }}
          animate={{ opacity: 0.2, rotate: -20 }}
          transition={{ delay: 1 }}
          style={{ transformOrigin: "250px 180px" }}
        />

        {/* Floating gear icon */}
        <motion.g
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.circle
            cx="420" cy="120" r="24"
            fill="#1e293b"
            stroke="#06b6d4"
            strokeWidth="1.5"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, type: "tween", ease: "easeInOut" }}
          />
          <motion.text
            x="420" y="126" textAnchor="middle" fill="#06b6d4" fontSize="20" fontFamily="monospace"
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 3, type: "tween", ease: "easeInOut" }}
          >
            {"{ }"}
          </motion.text>
        </motion.g>

        {/* Floating database icon */}
        <motion.g
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <motion.circle
            cx="70" cy="160" r="22"
            fill="#1e293b"
            stroke="#8b5cf6"
            strokeWidth="1.5"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4, type: "tween", ease: "easeInOut" }}
          />
          <motion.text
            x="70" y="166" textAnchor="middle" fill="#8b5cf6" fontSize="16" fontFamily="monospace"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 4, type: "tween", ease: "easeInOut" }}
          >
            DB
          </motion.text>
        </motion.g>

        {/* Floating cloud icon */}
        <motion.g
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
        >
          <motion.path
            d="M400 260 Q400 245 415 245 Q420 230 440 235 Q455 225 465 240 Q480 240 480 255 Q480 270 465 270 L415 270 Q400 270 400 260 Z"
            fill="#1e293b"
            stroke="#10b981"
            strokeWidth="1.5"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, type: "tween", ease: "easeInOut", delay: 0.5 }}
          />
        </motion.g>

        {/* Terminal bracket */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        >
          <motion.circle
            cx="80" cy="300" r="20"
            fill="#1e293b"
            stroke="#f59e0b"
            strokeWidth="1.5"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 2.8, type: "tween", ease: "easeInOut", delay: 1 }}
          />
          <motion.text
            x="80" y="306" textAnchor="middle" fill="#f59e0b" fontSize="18" fontFamily="monospace"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 2.8, type: "tween", ease: "easeInOut", delay: 1 }}
          >
            $&gt;
          </motion.text>
        </motion.g>

        {/* Decorative dots */}
        {[
          { cx: 350, cy: 60, r: 3, color: "#3b82f6", delay: 2 },
          { cx: 420, cy: 310, r: 4, color: "#06b6d4", delay: 2.1 },
          { cx: 60, cy: 100, r: 3, color: "#8b5cf6", delay: 2.2 },
          { cx: 450, cy: 180, r: 2, color: "#10b981", delay: 2.3 },
          { cx: 130, cy: 350, r: 3, color: "#3b82f6", delay: 2.4 },
        ].map((dot, i) => (
          <motion.circle
            key={`dot-${i}`}
            cx={dot.cx}
            cy={dot.cy}
            r={dot.r}
            fill={dot.color}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.6, 0.3, 0.6], scale: 1 }}
            transition={{
              opacity: { repeat: Infinity, duration: 3, type: "tween", ease: "easeInOut", delay: dot.delay },
              scale: { delay: dot.delay, duration: 0.3, type: "tween" },
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export { HeroIllustration };
