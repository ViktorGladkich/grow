"use client";

import { motion } from "framer-motion";
import { Leaf, MousePointerClick, TreePine, MapPin } from "lucide-react";
import { steps, sectionBgs } from "../data";
import { fadeUp, fadeDown, staggerContainer } from "../animations";
import {
  SlideSection,
  AnimatedContent,
  GlassCard,
  Tag,
  Title,
  Highlight,
} from "../ui";

const stepIcons = [MousePointerClick, TreePine, MapPin];

export default function HowItWorksSlide({ activeIndex }) {
  const isActive = activeIndex === 4;

  return (
    <SlideSection bg={sectionBgs.howItWorks} overlay={0.8}>
      <AnimatedContent isActive={isActive}>
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
          {/* Animated connecting line */}
          <div className="hidden md:block absolute top-14 left-[20%] right-[20%] h-[2px] overflow-hidden z-0">
            <motion.div
              className="h-full w-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, #94de1d, transparent)",
              }}
              initial={{ scaleX: 0 }}
              animate={isActive ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
            />
          </div>

          {/* Pulsing dots on the line */}
          {[33, 66].map((pos) => (
            <motion.div
              key={pos}
              className="hidden md:block absolute top-[52px] z-10"
              style={{ left: `${pos}%`, transform: "translateX(-50%)" }}
              initial={{ opacity: 0, scale: 0 }}
              animate={isActive ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 1.0 }}
            >
              <div className="w-3 h-3 rounded-full bg-eco-green shadow-[0_0_12px_rgba(148,222,29,0.6)] animate-glow-pulse" />
            </motion.div>
          ))}

          {steps.map((s, i) => {
            const StepIcon = stepIcons[i];
            return (
              <motion.div
                key={i}
                variants={i % 2 === 0 ? fadeUp : fadeDown}
                custom={i}
                className="relative z-10"
              >
                <GlassCard className="text-center">
                  {/* Step number circle with icon */}
                  <div className="relative mx-auto mb-5 w-20 h-20">
                    {/* Outer ring */}
                    <svg
                      className="absolute inset-0 w-full h-full -rotate-90"
                      viewBox="0 0 80 80"
                    >
                      <circle
                        cx="40"
                        cy="40"
                        r="36"
                        fill="none"
                        stroke="rgba(148,222,29,0.1)"
                        strokeWidth="2"
                      />
                      <motion.circle
                        cx="40"
                        cy="40"
                        r="36"
                        fill="none"
                        stroke="url(#greenGrad)"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeDasharray={226}
                        initial={{ strokeDashoffset: 226 }}
                        animate={
                          isActive
                            ? { strokeDashoffset: 226 * (1 - (i + 1) / 3) }
                            : {}
                        }
                        transition={{ duration: 1.5, delay: i * 0.3 + 0.5 }}
                      />
                      <defs>
                        <linearGradient
                          id="greenGrad"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#94de1d" />
                          <stop offset="100%" stopColor="#54c955" />
                        </linearGradient>
                      </defs>
                    </svg>
                    {/* Inner circle */}
                    <motion.div
                      className="absolute inset-2 flex flex-col items-center justify-center
                        bg-gradient-to-br from-eco-green to-[#54c955] rounded-full
                        shadow-[0_0_40px_rgba(148,222,29,0.35)]"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <StepIcon
                        className="w-5 h-5 text-eco-dark"
                        strokeWidth={2.5}
                      />
                    </motion.div>
                  </div>

                  <div className="text-[0.6em] font-black text-eco-green/40 uppercase tracking-[0.3em] mb-1">
                    Step {s.number}
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-eco-gray leading-relaxed">
                    {s.text}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatedContent>
    </SlideSection>
  );
}
