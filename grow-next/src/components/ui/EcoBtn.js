"use client";

import { motion } from "framer-motion";

export default function EcoBtn({ onClick, children, className = "" }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.05,
        y: -2,
        boxShadow:
          "0 8px 40px rgba(148,222,29,0.45), 0 0 80px rgba(148,222,29,0.15)",
      }}
      whileTap={{ scale: 0.97 }}
      className={`
        px-8 py-3.5 bg-gradient-to-r from-eco-green to-[#7bc919] text-white font-bold text-[0.65em] uppercase tracking-[0.2em]
        rounded-[10em_0_10em_10em] transition-all duration-300
        shadow-[0_4px_20px_rgba(148,222,29,0.3)]
        cursor-pointer font-[Montserrat] ${className}
      `}
    >
      {children}
    </motion.button>
  );
}
