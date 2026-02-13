"use client";

import { motion } from "framer-motion";
import { heroSlides } from "../data";
import { LetterAnimation, EcoBtn } from "../ui";

export default function HeroSlideContent({ slide, isActive, goTo, idx }) {
  return (
    <>
      {/* Parallax layers */}
      <div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        data-swiper-parallax="35%"
        style={{ backgroundImage: `url(${slide.layers.back})` }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        data-swiper-parallax="25%"
        style={{ backgroundImage: `url(${slide.layers.middle})` }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        data-swiper-parallax="14%"
        style={{ backgroundImage: `url(${slide.layers.front})` }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10">
        <LetterAnimation word={slide.word} isActive={isActive} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: isActive ? 1 : 0,
            y: isActive ? 0 : 30,
          }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6"
        >
          <p className="max-w-[520px] font-semibold leading-snug text-[0.95em] mb-5 px-4">
            {slide.text}
          </p>
          <EcoBtn onClick={() => goTo(idx + 3)}>{slide.cta}</EcoBtn>
        </motion.div>
      </div>
    </>
  );
}

// Re-export data for convenience
export { heroSlides };
