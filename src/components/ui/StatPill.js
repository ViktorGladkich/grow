"use client";

import { motion } from "framer-motion";

export default function StatPill({ icon: Icon, value, label, delay, active }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex items-center gap-2.5 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
    >
      <div className="w-8 h-8 rounded-full bg-eco-green/15 flex items-center justify-center">
        <Icon className="w-4 h-4 text-eco-green" />
      </div>
      <div className="text-left">
        <div className="text-sm font-black text-eco-green leading-none">
          {value}
        </div>
        <div className="text-[0.55em] uppercase tracking-[0.15em] text-eco-gray font-semibold">
          {label}
        </div>
      </div>
    </motion.div>
  );
}
