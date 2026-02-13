"use client";

import { motion } from "framer-motion";
import { navItems, TOTAL_SLIDES } from "./data";

export default function Navigation({ activeIndex, goTo }) {
  return (
    <>
      {/* ═══ FIXED NAVIGATION BAR ═══ */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-[100] flex items-center px-6 py-4
          bg-gradient-to-b from-[rgba(10,26,29,0.7)] to-transparent pointer-events-none"
      >
        <motion.a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            goTo(0);
          }}
          whileHover={{ scale: 1.05 }}
          className="shrink-0 pointer-events-auto"
        >
          <img src="/img/logo.svg" alt="Grow" className="w-28 md:w-36" />
        </motion.a>

        <ul className="flex-1 hidden md:flex justify-center gap-1 pointer-events-auto">
          {navItems.map((item) => (
            <li key={item.index}>
              <motion.button
                whileHover={{ color: "#fff" }}
                whileTap={{ scale: 0.95 }}
                onClick={() => goTo(item.index)}
                className={`
                  text-[0.62em] uppercase font-bold tracking-[0.2em] px-3 py-1
                  relative cursor-pointer transition-colors duration-300
                  ${activeIndex === item.index ? "text-white" : "text-white/50 hover:text-white"}
                `}
              >
                {item.label}
                <motion.div
                  className="absolute -bottom-0.5 left-1/2 h-0.5 bg-eco-green rounded-full"
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

        <motion.button
          whileHover={{
            scale: 1.05,
            backgroundColor: "#94de1d",
            color: "#1a2f32",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => goTo(10)}
          className="hidden md:block shrink-0 px-5 py-2 border-[1.5px] border-eco-green text-white
            rounded-[10em_0_10em_10em] text-[0.62em] font-bold uppercase tracking-[0.2em]
            cursor-pointer transition-all duration-300 pointer-events-auto"
        >
          Plant Now
        </motion.button>
      </motion.nav>

      {/* ═══ SLIDE COUNTER (RIGHT) ═══ */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-[100]
          flex flex-col items-center gap-2"
      >
        <span className="text-[0.6em] font-black tracking-wider text-white">
          {String(activeIndex + 1).padStart(2, "0")}
        </span>
        <div className="w-0.5 h-20 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="w-full bg-eco-green rounded-full"
            animate={{ height: `${((activeIndex + 1) / TOTAL_SLIDES) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <span className="text-[0.6em] font-black tracking-wider text-white/30">
          {String(TOTAL_SLIDES).padStart(2, "0")}
        </span>
      </motion.div>

      {/* ═══ SCROLL INDICATOR (BOTTOM) ═══ */}
      {activeIndex < TOTAL_SLIDES - 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed bottom-6 left-1/2 z-[100] flex flex-col items-center gap-1.5
            cursor-pointer animate-scroll-bounce"
          onClick={() => goTo(activeIndex + 1)}
        >
          <div className="w-5 h-8 border-2 border-white/30 rounded-[11px] relative">
            <div className="w-[3px] h-[7px] bg-eco-green rounded-full absolute left-1/2 -translate-x-1/2 animate-scroll-dot" />
          </div>
          <span className="text-[0.5em] uppercase tracking-[0.3em] text-white/40 font-bold">
            Scroll
          </span>
        </motion.div>
      )}
    </>
  );
}
