"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { blogArticles, sectionBgs } from "../data";
import {
  fadeUp,
  slideFromLeft,
  slideFromRight,
  staggerContainer,
  cardHover,
} from "../animations";
import { SlideSection, AnimatedContent, Tag, Title, Highlight } from "../ui";

export default function BlogSlide({ activeIndex }) {
  return (
    <SlideSection bg={sectionBgs.blog} overlay={0.82}>
      <AnimatedContent isActive={activeIndex === 6}>
        <Tag>
          <BookOpen className="inline w-3.5 h-3.5 mr-1.5 -mt-0.5" /> Eco Journal
        </Tag>
        <Title>
          Stories from the <Highlight>Field</Highlight>
        </Title>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6"
        >
          {blogArticles.map((a, i) => (
            <motion.div
              key={i}
              variants={
                i === 0 ? slideFromLeft : i === 2 ? slideFromRight : fadeUp
              }
              custom={i}
              whileHover={cardHover}
              className="bg-eco-glass border border-eco-glass-border rounded-2xl p-6
                backdrop-blur-md cursor-pointer transition-colors duration-300 group
                hover:bg-[rgba(148,222,29,0.05)] hover:border-[rgba(148,222,29,0.2)]"
            >
              <span
                className="inline-block bg-eco-green/15 text-eco-green px-3 py-1 rounded-full
                text-[0.62em] font-bold uppercase tracking-[0.15em] mb-3"
              >
                {a.category}
              </span>
              <h3 className="text-[0.95em] font-bold leading-snug mb-3 group-hover:text-eco-green transition-colors duration-300">
                {a.title}
              </h3>
              <div className="flex gap-4 mb-3">
                <span className="text-[0.62em] text-eco-gray uppercase tracking-[0.15em] font-semibold">
                  {a.date}
                </span>
                <span className="text-[0.62em] text-eco-gray uppercase tracking-[0.15em] font-semibold">
                  {a.read}
                </span>
              </div>
              <span className="text-eco-green text-[0.7em] font-bold uppercase tracking-[0.15em] inline-flex items-center gap-1">
                Read more{" "}
                <motion.span className="inline-block" whileHover={{ x: 6 }}>
                  →
                </motion.span>
              </span>
            </motion.div>
          ))}
        </motion.div>
      </AnimatedContent>
    </SlideSection>
  );
}
