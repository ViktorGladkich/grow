"use client";

import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer } from "../animations";

export default function AnimatedContent({ isActive, children }) {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={staggerContainer}
          className="w-full max-w-[1140px] mx-auto"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
