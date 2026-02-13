"use client";

import { motion } from "framer-motion";
import { BookOpen, ArrowRight, Clock, Calendar } from "lucide-react";
import { blogArticles, sectionBgs } from "../data";
import {
  fadeUp,
  slideFromLeft,
  slideFromRight,
  staggerContainer,
} from "../animations";
import {
  SlideSection,
  AnimatedContent,
  GlassCard,
  Tag,
  Title,
  Highlight,
} from "../ui";

const cardColors = [
  "from-eco-green/20 to-[#54c955]/10",
  "from-blue-500/15 to-cyan-400/10",
  "from-purple-500/15 to-pink-400/10",
];

export default function BlogSlide({ activeIndex }) {
  return (
    <SlideSection bg={sectionBgs.blog} overlay={0.82}>
      <AnimatedContent isActive={activeIndex === 6}>
        <motion.div className="text-center">
          <Tag>
            <BookOpen className="inline w-3.5 h-3.5 mr-1.5 -mt-0.5" /> Eco
            Journal
          </Tag>
          <Title>
            Stories from the <Highlight>Field</Highlight>
          </Title>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
          {blogArticles.map((a, i) => (
            <div key={i} className="h-full">
              <GlassCard className="group h-full overflow-hidden p-0!">
                {/* Gradient header */}
                <div
                  className={`bg-linear-to-br ${cardColors[i]} px-6 pt-6 pb-4 relative`}
                >
                  <div className="absolute top-3 right-3 w-16 h-16 rounded-full bg-white/5 blur-xl" />
                  <span
                    className="inline-block bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full
                    text-[0.6em] font-bold uppercase tracking-[0.15em] mb-3 border border-white/10"
                  >
                    {a.category}
                  </span>
                  <h3 className="text-[0.95em] font-bold leading-snug group-hover:text-eco-green transition-colors duration-300">
                    {a.title}
                  </h3>
                </div>

                {/* Card body */}
                <div className="px-6 py-4">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex items-center gap-1.5 text-[0.62em] text-eco-gray font-semibold">
                      <Calendar className="w-3 h-3 text-eco-green/60" />{" "}
                      {a.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[0.62em] text-eco-gray font-semibold">
                      <Clock className="w-3 h-3 text-eco-green/60" /> {a.read}
                    </span>
                  </div>

                  {/* Read progress bar */}
                  <div className="h-0.5 bg-white/5 rounded-full mb-4 overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-linear-to-r from-eco-green to-[#54c955]"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.6 }}
                      style={{ width: "0%" }}
                    />
                  </div>

                  <motion.span
                    className="text-eco-green text-[0.7em] font-bold uppercase tracking-[0.15em] inline-flex items-center gap-2
                      group-hover:gap-3 transition-all duration-300"
                    whileHover={{ x: 4 }}
                  >
                    Read more <ArrowRight className="w-3.5 h-3.5" />
                  </motion.span>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </AnimatedContent>
    </SlideSection>
  );
}
