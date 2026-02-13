"use client";

import { motion } from "framer-motion";
import { fadeDown } from "../animations";

export default function Tag({ children }) {
  return (
    <motion.div
      variants={fadeDown}
      className="inline-flex items-center gap-1.5 text-[0.75em] font-extrabold uppercase tracking-[0.25em] text-eco-green
        mb-6 px-4 py-2 rounded-lg bg-eco-green/10 border border-eco-green/20 backdrop-blur-sm
        shadow-[0_0_15px_rgba(148,222,29,0.15)]"
    >
      {/* Decorative dot */}
      <span className="w-1.5 h-1.5 rounded-full bg-eco-green animate-pulse" />
      {children}
    </motion.div>
  );
}
