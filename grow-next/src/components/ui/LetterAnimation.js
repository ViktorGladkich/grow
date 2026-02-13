"use client";

import { motion } from "framer-motion";

export default function LetterAnimation({ word, isActive }) {
  // Stagger animation for letters
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const child = {
    hidden: { y: "100%", opacity: 0, rotate: 5 },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      className="text-[calc((1vw+1vh)*9)] md:text-[calc((1vw+1vh)*11)] font-black uppercase leading-[0.9] tracking-tighter
        text-white
        drop-shadow-lg flex justify-center overflow-visible py-4 text-shadow-md select-none"
    >
      {word.split("").map((char, i) => (
        <motion.span key={i} variants={child} className="inline-block relative">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}
