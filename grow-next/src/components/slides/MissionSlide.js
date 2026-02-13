"use client";

import { motion } from "framer-motion";
import { Sprout, TreePine, Droplets, Sun } from "lucide-react";
import { missionFeatures, sectionBgs } from "../data";
import { scaleIn, fadeUp, staggerContainer } from "../animations";
import {
  SlideSection,
  AnimatedContent,
  GlassCard,
  Tag,
  Title,
  Highlight,
  Subtitle,
} from "../ui";

/* Mini stat pill for the top row */
function StatPill({ icon: Icon, value, label, delay, active }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex items-center gap-2.5 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
    >
      <div className="w-8 h-8 rounded-full bg-eco-green/15 flex items-center justify-center">
        <Icon className="w-4 h-4 text-eco-green" />
      </div>
      <div className="text-left">
        <div className="text-sm font-black text-eco-green leading-none">
          {value}
        </div>
        <div className="text-[0.55em] uppercase tracking-[0.15em] text-eco-gray font-semibold">
          {label}
        </div>
      </div>
    </motion.div>
  );
}

export default function MissionSlide({ activeIndex }) {
  const isActive = activeIndex === 3;

  return (
    <SlideSection bg={sectionBgs.mission} overlay={0.78}>
      <AnimatedContent isActive={isActive}>
        <div className="text-center">
          <Tag>
            <Sprout className="inline w-3.5 h-3.5 mr-1.5 -mt-0.5" /> Our Mission
          </Tag>
          <Title>
            Restoring the <Highlight>Earth</Highlight>, One Tree at a Time
          </Title>
          <Subtitle>
            Founded in 2018, GROW started with a simple idea: make environmental
            action accessible to everyone.
          </Subtitle>
        </div>

        {/* ── Stat pills row ── */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <StatPill
            icon={TreePine}
            value="12.5M"
            label="Trees"
            delay={0.3}
            active={isActive}
          />
          <StatPill
            icon={Droplets}
            value="340K"
            label="Tons CO₂"
            delay={0.45}
            active={isActive}
          />
          <StatPill
            icon={Sun}
            value="2,100"
            label="Species"
            delay={0.6}
            active={isActive}
          />
        </div>

        {/* ── Feature cards ── */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {missionFeatures.map((f, i) => (
            <motion.div key={i} variants={scaleIn} custom={i}>
              <GlassCard>
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-2xl
                  bg-gradient-to-br from-eco-green/15 to-eco-green/5
                  border border-eco-green/20 mb-4
                  shadow-[0_0_25px_rgba(148,222,29,0.1)]"
                >
                  <f.Icon
                    className="w-7 h-7 text-eco-green drop-shadow-[0_0_8px_rgba(148,222,29,0.4)]"
                    strokeWidth={1.8}
                  />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-1.5">
                  {f.title}
                </h4>
                <p className="text-xs text-eco-gray leading-relaxed">
                  {f.text}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </AnimatedContent>
    </SlideSection>
  );
}
