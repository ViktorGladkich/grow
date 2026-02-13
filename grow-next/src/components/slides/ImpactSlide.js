"use client";

import { motion } from "framer-motion";
import { BarChart3, TrendingUp } from "lucide-react";
import { impactStats, sectionBgs } from "../data";
import { scaleIn, fadeUp, staggerContainer } from "../animations";
import {
  SlideSection,
  AnimatedContent,
  Counter,
  Tag,
  Title,
  Highlight,
} from "../ui";

/* Circular progress ring */
function CircleRing({ fill, active, delay = 0 }) {
  const r = 42;
  const circumference = 2 * Math.PI * r;

  return (
    <svg className="w-28 h-28 -rotate-90 mx-auto mb-3" viewBox="0 0 100 100">
      {/* Background ring */}
      <circle
        cx="50"
        cy="50"
        r={r}
        fill="none"
        stroke="rgba(255,255,255,0.05)"
        strokeWidth="5"
      />
      {/* Animated fill ring */}
      <motion.circle
        cx="50"
        cy="50"
        r={r}
        fill="none"
        stroke="url(#impactGrad)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={
          active ? { strokeDashoffset: circumference * (1 - fill / 100) } : {}
        }
        transition={{ duration: 2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ filter: "drop-shadow(0 0 6px rgba(148,222,29,0.4))" }}
      />
      {/* Glow dot at end */}
      <defs>
        <linearGradient id="impactGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#94de1d" />
          <stop offset="50%" stopColor="#b8f03e" />
          <stop offset="100%" stopColor="#54c955" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function ImpactSlide({ activeIndex }) {
  const isActive = activeIndex === 5;

  return (
    <SlideSection bg={sectionBgs.impact} overlay={0.75}>
      <AnimatedContent isActive={isActive}>
        <div className="text-center">
          <Tag>
            <BarChart3 className="inline w-3.5 h-3.5 mr-1.5 -mt-0.5" /> Our
            Impact
          </Tag>
          <Title shimmer>
            Numbers That <Highlight>Matter</Highlight>
          </Title>

          {/* Impact summary banner */}
          <motion.div
            variants={fadeUp}
            custom={2}
            className="inline-flex items-center gap-2 px-5 py-2 bg-eco-green/10 border border-eco-green/20
              rounded-full text-eco-green text-[0.7em] font-bold uppercase tracking-[0.15em] mb-6"
          >
            <TrendingUp className="w-4 h-4" />
            <span>+23% growth year over year</span>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4"
        >
          {impactStats.map((stat, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              custom={i}
              whileHover={{ scale: 1.05, y: -8, transition: { duration: 0.3 } }}
              className="bg-eco-glass border border-eco-glass-border rounded-2xl p-5
                text-center relative overflow-hidden cursor-pointer
                card-glow gradient-border hover:bg-[rgba(148,222,29,0.05)]"
            >
              {/* Radial glow */}
              <div
                className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2
                w-32 h-32 rounded-full bg-eco-green/5 blur-2xl pointer-events-none"
              />

              <div className="relative z-10">
                {/* Circular ring */}
                <CircleRing
                  fill={stat.fill}
                  active={isActive}
                  delay={i * 0.2}
                />

                {/* Counter inside */}
                <div className="-mt-[5.5rem] mb-12 relative z-20">
                  <Counter count={stat.count} active={isActive} />
                </div>

                <div className="text-[0.65em] uppercase tracking-[0.2em] text-eco-gray font-semibold mb-3">
                  {stat.label}
                </div>
              </div>

              {/* Bottom progress bar */}
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-eco-green via-[#b8f03e] to-[#54c955]
                    shadow-[0_0_12px_rgba(148,222,29,0.5)]"
                  initial={{ width: 0 }}
                  animate={{ width: isActive ? `${stat.fill}%` : "0%" }}
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
