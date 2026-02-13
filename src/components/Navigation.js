"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, TreePine } from "lucide-react";
import { navItems, TOTAL_SLIDES } from "./data";

export default function Navigation({ activeIndex, goTo }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* ═══ FIXED NAVIGATION BAR ═══ */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-[100] flex items-center px-6 py-4
          bg-[rgba(10,26,29,0.6)] backdrop-blur-xl
          border-b border-white/5 pointer-events-none"
      >
        {/* Logo */}
        <motion.a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            goTo(0);
          }}
          whileHover={{ scale: 1.05 }}
          className="shrink-0 pointer-events-auto flex items-center gap-2"
        >
          <Image
            src="/img/logo.svg"
            alt="Grow"
            width={176}
            height={44}
            className="w-36 md:w-44 h-auto"
            priority
          />
        </motion.a>

        {/* Desktop nav links */}
        <ul className="flex-1 hidden md:flex justify-center gap-1 pointer-events-auto">
          {navItems.map((item) => (
            <li key={item.index}>
              <motion.button
                whileHover={{ color: "#fff" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => goTo(item.index)}
                className={`
                  text-[0.78em] uppercase font-bold tracking-[0.18em] px-4 py-2
                  relative cursor-pointer transition-colors duration-300 rounded-lg
                  ${
                    activeIndex === item.index
                      ? "text-white bg-white/5"
                      : "text-white/50 hover:text-white hover:bg-white/[0.03]"
                  }
                `}
              >
                {item.label}
                <motion.div
                  className="absolute bottom-0 left-1/2 h-[2px] bg-eco-green rounded-full
                    shadow-[0_0_8px_rgba(148,222,29,0.5)]"
                  initial={false}
                  animate={{
                    width: activeIndex === item.index ? "60%" : "0%",
                    x: "-50%",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <motion.button
          whileHover={{
            scale: 1.05,
            backgroundColor: "#94de1d",
            color: "#1a2f32",
            boxShadow: "0 0 30px rgba(148,222,29,0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => goTo(10)}
          className="hidden md:flex items-center gap-2 shrink-0 px-6 py-2.5 border-[1.5px] border-eco-green text-white
            rounded-[10em_0_10em_10em] text-[0.78em] font-bold uppercase tracking-[0.18em]
            cursor-pointer transition-all duration-300 pointer-events-auto"
        >
          <TreePine className="w-4 h-4" />
          Plant Now
        </motion.button>

        {/* Mobile hamburger */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden pointer-events-auto ml-auto w-10 h-10 flex items-center justify-center
            rounded-xl bg-white/5 border border-white/10 text-white cursor-pointer"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </motion.button>
      </motion.nav>

      {/* ═══ MOBILE MENU OVERLAY ═══ */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99] pt-20 px-6 pb-8
              bg-[rgba(10,26,29,0.95)] backdrop-blur-2xl
              flex flex-col md:hidden"
          >
            <nav className="flex-1 flex flex-col justify-center gap-1">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  onClick={() => {
                    goTo(item.index);
                    setMenuOpen(false);
                  }}
                  className={`
                    text-left text-lg font-bold uppercase tracking-[0.15em] py-3 px-4 rounded-xl
                    transition-all duration-300 cursor-pointer
                    ${
                      activeIndex === item.index
                        ? "text-eco-green bg-eco-green/10 border border-eco-green/20"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }
                  `}
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onClick={() => {
                goTo(10);
                setMenuOpen(false);
              }}
              className="w-full py-4 bg-gradient-to-r from-eco-green to-[#7bc919] text-eco-dark
                font-bold text-sm uppercase tracking-[0.2em] rounded-2xl cursor-pointer
                shadow-[0_4px_20px_rgba(148,222,29,0.3)]"
            >
              🌱 Plant Now
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ SLIDE COUNTER (RIGHT) — enhanced ═══ */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-[100]
          hidden md:flex flex-col items-center gap-3"
      >
        <motion.span
          key={activeIndex}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-[0.75em] font-black tracking-wider text-eco-green"
        >
          {String(activeIndex + 1).padStart(2, "0")}
        </motion.span>

        <div
          className="w-1.5 h-32 bg-white/5 rounded-full overflow-hidden relative
          shadow-[inset_0_0_10px_rgba(0,0,0,0.3)]"
        >
          <motion.div
            className="w-full bg-gradient-to-b from-eco-green to-[#54c955] rounded-full
              shadow-[0_0_12px_rgba(148,222,29,0.4)]"
            animate={{ height: `${((activeIndex + 1) / TOTAL_SLIDES) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>

        <span className="text-[0.65em] font-black tracking-wider text-white/20">
          {String(TOTAL_SLIDES).padStart(2, "0")}
        </span>
      </motion.div>

      {/* ═══ SCROLL INDICATOR (BOTTOM) ═══ */}
      <AnimatePresence>
        {activeIndex < TOTAL_SLIDES - 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-6 left-1/2 z-[100] flex flex-col items-center gap-1.5
              cursor-pointer animate-scroll-bounce"
            onClick={() => goTo(activeIndex + 1)}
          >
            <div
              className="w-5 h-8 border-2 border-white/20 rounded-[11px] relative
              shadow-[0_0_10px_rgba(148,222,29,0.1)]"
            >
              <div
                className="w-[3px] h-[7px] bg-eco-green rounded-full absolute left-1/2 -translate-x-1/2
                animate-scroll-dot shadow-[0_0_6px_rgba(148,222,29,0.6)]"
              />
            </div>
            <span className="text-[0.5em] uppercase tracking-[0.3em] text-white/30 font-bold">
              Scroll
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
