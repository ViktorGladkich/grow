"use client";

import { motion } from "framer-motion";
import { heroSlides } from "../data";
import { LetterAnimation, EcoBtn } from "../ui";

export default function HeroSlideContent({ slide, isActive, goTo, idx }) {
  return (
    <>
      {/* Parallax layers */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-eco-dark"
        data-swiper-parallax="35%"
        style={{ backgroundImage: `url(${slide.layers.back})` }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-swiper-parallax="25%"
        style={{ backgroundImage: `url(${slide.layers.middle})` }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center"
        data-swiper-parallax="14%"
        style={{ backgroundImage: `url(${slide.layers.front})` }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-10 px-6">
        <div className="relative">
          <LetterAnimation word={slide.word} isActive={isActive} />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: isActive ? 1 : 0,
              y: isActive ? 0 : 30,
            }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12"
          >
            {/* Clean text without background container */}
            <p className="max-w-[560px] mx-auto font-semibold leading-relaxed text-[1.1em] text-white/95 mb-8 drop-shadow-md text-shadow-sm">
              {slide.text}
            </p>
            <EcoBtn
              onClick={() => goTo(idx + 3)}
              className="shadow-lg hover:shadow-eco-green/40"
            >
              {slide.cta}
            </EcoBtn>
          </motion.div>
        </div>
      </div>
    </>
  );
}

// Re-export data
export { heroSlides };
