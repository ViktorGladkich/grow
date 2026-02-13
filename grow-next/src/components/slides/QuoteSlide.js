"use client";

import { motion } from "framer-motion";
import { sectionBgs } from "../data";
import { fadeUp } from "../animations";
import { SlideSection, AnimatedContent, Highlight } from "../ui";

export default function QuoteSlide({ activeIndex }) {
  return (
    <SlideSection bg={sectionBgs.quote} overlay={0.55}>
      <AnimatedContent isActive={activeIndex === 9}>
        <motion.blockquote
          variants={fadeUp}
          className="max-w-[800px] mx-auto text-center relative"
        >
          {/* Decorative glowing orbs */}
          <div className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-eco-green/5 blur-3xl animate-float pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-32 h-32 rounded-full bg-[#54c955]/5 blur-3xl animate-float-slow pointer-events-none" />

          <motion.p
            className="text-[clamp(1.5em,4vw,2.8em)] font-bold leading-snug italic relative z-10
              drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={activeIndex === 9 ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            &ldquo;The best time to plant a tree was twenty years ago.
            <br />
            The second best time is <Highlight>now</Highlight>.&rdquo;
          </motion.p>
          <motion.cite
            className="block mt-6 text-sm text-eco-gray not-italic uppercase tracking-[0.2em] font-semibold"
            variants={fadeUp}
            custom={3}
          >
            — Chinese Proverb
          </motion.cite>

          {/* Decorative line */}
          <motion.div
            className="mx-auto mt-6 h-[2px] rounded-full bg-gradient-to-r from-transparent via-eco-green/50 to-transparent"
            initial={{ width: 0 }}
            animate={activeIndex === 9 ? { width: "120px" } : {}}
            transition={{ duration: 1.5, delay: 0.8 }}
          />
        </motion.blockquote>
      </AnimatedContent>
    </SlideSection>
  );
}
