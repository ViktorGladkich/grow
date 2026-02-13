"use client";

import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
import { impactStats, sectionBgs } from "../data";
import { scaleIn, staggerContainer, cardHover } from "../animations";
import {
  SlideSection,
  AnimatedContent,
  Counter,
  Tag,
  Title,
  Highlight,
} from "../ui";

export default function ImpactSlide({ activeIndex }) {
  return (
    <SlideSection bg={sectionBgs.impact} overlay={0.75}>
      <AnimatedContent isActive={activeIndex === 5}>
        <div className="text-center">
          <Tag>
            <BarChart3 className="inline w-3.5 h-3.5 mr-1.5 -mt-0.5" /> Our
            Impact
          </Tag>
          <Title>
            Numbers That <Highlight>Matter</Highlight>
          </Title>
        </div>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8"
        >
          {impactStats.map((stat, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              custom={i}
              whileHover={cardHover}
              className="bg-eco-glass border border-eco-glass-border rounded-2xl p-6
                text-center relative overflow-hidden cursor-pointer transition-colors duration-300
                hover:bg-[rgba(148,222,29,0.05)]"
            >
              {/* Top glow bar */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #94de1d, transparent)",
                }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
              <Counter count={stat.count} active={activeIndex === 5} />
              <div className="text-[0.65em] uppercase tracking-[0.2em] text-eco-gray font-semibold mb-3">
                {stat.label}
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-eco-green to-[#54c955]"
                  initial={{ width: 0 }}
                  animate={{
                    width: activeIndex === 5 ? `${stat.fill}%` : "0%",
                  }}
                  transition={{
                    duration: 1.8,
                    delay: i * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatedContent>
    </SlideSection>
  );
}
