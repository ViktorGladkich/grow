"use client";

import { motion } from "framer-motion";
import { sectionBgs } from "../data";
import { fadeUp } from "../animations";
import { SlideSection, AnimatedContent, Highlight } from "../ui";

export default function QuoteSlide({ activeIndex }) {
  return (
    <SlideSection bg={sectionBgs.quote} overlay={0.6}>
      <AnimatedContent isActive={activeIndex === 9}>
        <motion.blockquote
          variants={fadeUp}
          className="max-w-[800px] mx-auto text-center"
        >
          <motion.p
            className="text-[clamp(1.5em,4vw,2.8em)] font-bold leading-snug italic"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={activeIndex === 9 ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            &ldquo;The best time to plant a tree was twenty years ago.
            <br />
            The second best time is <Highlight>now</Highlight>.&rdquo;
          </motion.p>
          <motion.cite
            className="block mt-5 text-sm text-eco-gray not-italic uppercase tracking-[0.2em] font-semibold"
            variants={fadeUp}
            custom={3}
          >
            — Chinese Proverb
          </motion.cite>
        </motion.blockquote>
      </AnimatedContent>
    </SlideSection>
  );
}
