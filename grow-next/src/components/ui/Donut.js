"use client";

import { motion } from "framer-motion";

export default function Donut({ progress, active, delay }) {
  const r = 28;
  const circ = 2 * Math.PI * r;

  return (
    <div className="relative w-18 h-18">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 72 72">
        <circle
          cx="36"
          cy="36"
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="4"
        />
        <motion.circle
          cx="36"
          cy="36"
          r={r}
          fill="none"
          stroke="url(#projGrad)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circ}
          initial={{ strokeDashoffset: circ }}
          animate={
            active ? { strokeDashoffset: circ * (1 - progress / 100) } : {}
          }
          transition={{ duration: 1.8, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ filter: "drop-shadow(0 0 4px rgba(148,222,29,0.4))" }}
        />
        <defs>
          <linearGradient id="projGrad">
            <stop offset="0%" stopColor="#94de1d" />
            <stop offset="100%" stopColor="#54c955" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[0.75em] font-black text-eco-green">
          {progress}%
        </span>
      </div>
    </div>
  );
}
