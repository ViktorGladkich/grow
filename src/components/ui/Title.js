"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../animations";

export default function Title({ children, shimmer = false }) {
  return (
    <motion.h2
      variants={fadeUp}
      custom={1}
      className={`
        text-[clamp(1.4em,4vw,3.2em)] font-black uppercase leading-[1.1] tracking-tight mb-4 md:mb-6
        bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/70
        drop-shadow-lg max-w-4xl mx-auto break-words
        ${shimmer ? "animate-shimmer bg-[length:200%_100%]" : ""}
      `}
    >
      {children}
    </motion.h2>
  );
}
