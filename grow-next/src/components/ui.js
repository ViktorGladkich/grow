"use client";

import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeDown, fadeUp, staggerContainer } from "./animations";

/* ═══ LETTER ANIMATION (Hero titles) ═══ */

export function LetterAnimation({ word, isActive }) {
  return (
    <h1 className="text-[calc((1vw+1vh)*11)] font-black uppercase leading-none tracking-tight">
      {word.split("").map((char, i) => (
        <span
          key={i}
          className={`
            inline-block relative transition-all ease-in-out
            ml-[calc((1vw+1vh)*-2.65)] right-[calc((1vw+1vh)*-2.65)]
            ${isActive ? "opacity-100 top-0" : "opacity-0 -top-[5em]"}
          `}
          style={{
            zIndex: -i,
            transitionDuration: `${i / 5 + 1}s`,
            textShadow: "25px 0 35px rgba(0,0,0,0.4)",
          }}
        >
          {char}
        </span>
      ))}
    </h1>
  );
}

/* ═══ ANIMATED COUNTER ═══ */

function formatNum(n) {
  if (n >= 1e6) return (n / 1e6).toFixed(1) + "M";
  if (n >= 1e3) return (n / 1e3).toFixed(0) + "K";
  return n.toLocaleString();
}

export function Counter({ count, active }) {
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    if (active && !done.current && ref.current) {
      done.current = true;
      const el = ref.current;
      const dur = 2000;
      const t0 = performance.now();
      (function tick(now) {
        const p = Math.min((now - t0) / dur, 1);
        el.textContent = formatNum(
          Math.round((1 - Math.pow(1 - p, 3)) * count),
        );
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    }
  }, [active, count]);

  return (
    <div
      ref={ref}
      className="text-[clamp(2em,3.5vw,3em)] font-black text-eco-green leading-none mb-1 tabular-nums"
    >
      0
    </div>
  );
}

/* ═══ SECTION BACKGROUND WRAPPER ═══ */

export function SlideSection({ bg, overlay = 0.7, children }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] hover:scale-[1.03]"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,26,29,0.92) 0%, rgba(26,47,50,0.85) 50%, rgba(10,26,29,0.95) 100%)",
          opacity: overlay,
        }}
      />
      <div className="relative z-10 w-full max-h-screen overflow-y-auto flex items-center justify-center px-4 py-20 md:py-24">
        {children}
      </div>
    </div>
  );
}

/* ═══ ANIMATED CONTENT WRAPPER ═══ */

export function AnimatedContent({ isActive, children }) {
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

/* ═══ TAG ═══ */

export function Tag({ children }) {
  return (
    <motion.div
      variants={fadeDown}
      className="inline-block text-[0.7em] font-bold uppercase tracking-[0.3em] text-eco-green bg-eco-green-dim border border-eco-green-border px-5 py-1.5 rounded-full mb-4"
    >
      {children}
    </motion.div>
  );
}

/* ═══ TITLE ═══ */

export function Title({ children }) {
  return (
    <motion.h2
      variants={fadeUp}
      custom={1}
      className="text-[clamp(1.8em,4.5vw,3.2em)] font-black uppercase leading-[1.1] tracking-tight mb-2"
    >
      {children}
    </motion.h2>
  );
}

/* ═══ HIGHLIGHT ═══ */

export function Highlight({ children }) {
  return <span className="text-eco-green">{children}</span>;
}

/* ═══ SUBTITLE ═══ */

export function Subtitle({ children }) {
  return (
    <motion.p
      variants={fadeUp}
      custom={2}
      className="text-eco-gray text-base max-w-[600px] leading-relaxed mb-8"
    >
      {children}
    </motion.p>
  );
}

/* ═══ ECO BUTTON ═══ */

export function EcoBtn({ onClick, children, className = "" }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        scale: 1.05,
        y: -2,
        boxShadow: "0 8px 30px rgba(148,222,29,0.4)",
      }}
      whileTap={{ scale: 0.97 }}
      className={`
        px-8 py-3.5 bg-eco-green text-white font-bold text-[0.65em] uppercase tracking-[0.2em]
        rounded-[10em_0_10em_10em] transition-colors duration-300 hover:bg-eco-green-hover
        cursor-pointer font-[Montserrat] ${className}
      `}
    >
      {children}
    </motion.button>
  );
}
