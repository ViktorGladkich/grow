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
        <motion.div className="text-center">
          <Tag>
            <Leaf className="inline w-3.5 h-3.5 mr-1.5 -mt-0.5" /> How It Works
          </Tag>
          <Title>
            From Seed to <Highlight>Forest</Highlight>
          </Title>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          {steps.map((s, i) => {
            const StepIcon = stepIcons[i];
            return (
              <div key={i} className="h-full">
                <GlassCard className="text-center h-full">
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
              </div>
            );
          })}
        </div>
      </AnimatedContent>
    </SlideSection>
  );
}
