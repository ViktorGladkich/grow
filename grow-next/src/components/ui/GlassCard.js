"use client";

import { motion } from "framer-motion";

export default function GlassCard({ children, className = "", hover = true }) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              scale: 1.02,
              y: -5,
              transition: { duration: 0.3, ease: "easeOut" },
            }
          : undefined
      }
      className={`
        bg-[rgba(255,255,255,0.07)] border border-white/10 rounded-2xl p-6
        backdrop-blur-xl shadow-lg
        cursor-pointer transition-all duration-400
        hover:bg-[rgba(30,50,40,0.4)] hover:border-eco-green/30 hover:shadow-eco-green/10
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
