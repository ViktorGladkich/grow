"use client";

import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import { steps, sectionBgs } from "../data";
import { fadeUp, fadeDown, staggerContainer, cardHover } from "../animations";
import { SlideSection, AnimatedContent, Tag, Title, Highlight } from "../ui";

export default function HowItWorksSlide({ activeIndex }) {
  return (
    <SlideSection bg={sectionBgs.howItWorks} overlay={0.8}>
      <AnimatedContent isActive={activeIndex === 4}>
        <div className="text-center">
          <Tag>
            <Leaf className="inline w-3.5 h-3.5 mr-1.5 -mt-0.5" /> How It Works
          </Tag>
          <Title>
            From Seed to <Highlight>Forest</Highlight>
          </Title>
        </div>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8 relative"
        >
          {/* Connecting line */}
          <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-transparent via-eco-green/30 to-transparent" />

          {steps.map((s, i) => (
            <motion.div
              key={i}
              variants={i % 2 === 0 ? fadeUp : fadeDown}
              custom={i}
              whileHover={cardHover}
              className="text-center p-6 bg-eco-glass border border-eco-glass-border rounded-2xl
                backdrop-blur-md cursor-pointer transition-colors duration-300
                hover:bg-[rgba(148,222,29,0.05)] hover:border-[rgba(148,222,29,0.2)]"
            >
              <motion.div
                className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-eco-green to-[#54c955]
                  rounded-full text-eco-dark font-black mx-auto mb-4 relative z-10"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                style={{ boxShadow: "0 0 30px rgba(148,222,29,0.25)" }}
              >
                {s.number}
              </motion.div>
              <h3 className="text-sm font-bold uppercase tracking-wider mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-eco-gray leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatedContent>
    </SlideSection>
  );
}
