"use client";

import { motion } from "framer-motion";
import { fadeUp } from "../animations";

export default function Subtitle({ children }) {
  return (
    <motion.p
      variants={fadeUp}
      custom={2}
      className="text-eco-gray text-[1.05em] max-w-[640px] mx-auto leading-relaxed mb-10 font-medium tracking-wide"
    >
      {children}
    </motion.p>
  );
}
