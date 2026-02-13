"use client";

import { motion } from "framer-motion";

export default function CircleRing({ fill, active, delay = 0 }) {
  const r = 42;
  const circumference = 2 * Math.PI * r;

  return (
    <svg className="w-28 h-28 -rotate-90 mx-auto mb-3" viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r={r}
        fill="none"
        stroke="rgba(255,255,255,0.05)"
        strokeWidth="5"
      />
      <motion.circle
        cx="50"
        cy="50"
        r={r}
        fill="none"
        stroke="url(#impactGrad)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={
          active ? { strokeDashoffset: circumference * (1 - fill / 100) } : {}
        }
        transition={{ duration: 2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ filter: "drop-shadow(0 0 6px rgba(148,222,29,0.4))" }}
      />
      <defs>
        <linearGradient id="impactGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#94de1d" />
          <stop offset="50%" stopColor="#b8f03e" />
          <stop offset="100%" stopColor="#54c955" />
        </linearGradient>
      </defs>
    </svg>
  );
}
