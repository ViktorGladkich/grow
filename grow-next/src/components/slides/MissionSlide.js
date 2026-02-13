"use client";

import { motion } from "framer-motion";
import { Sprout } from "lucide-react";
import { missionFeatures, sectionBgs } from "../data";
import { scaleIn, staggerContainer, cardHover } from "../animations";
import {
  SlideSection,
  AnimatedContent,
  Tag,
  Title,
  Highlight,
  Subtitle,
} from "../ui";

export default function MissionSlide({ activeIndex }) {
  return (
    <SlideSection bg={sectionBgs.mission} overlay={0.78}>
      <AnimatedContent isActive={activeIndex === 3}>
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
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4"
        >
          {missionFeatures.map((f, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              custom={i}
              whileHover={cardHover}
              className="bg-eco-glass border border-eco-glass-border rounded-2xl p-6
                backdrop-blur-md cursor-pointer transition-colors duration-300
                hover:bg-[rgba(148,222,29,0.06)] hover:border-[rgba(148,222,29,0.2)]"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-eco-green/10 border border-eco-green/20 mb-4">
                <f.Icon className="w-6 h-6 text-eco-green" strokeWidth={1.8} />
              </div>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-1.5">
                {f.title}
              </h4>
              <p className="text-xs text-eco-gray leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </AnimatedContent>
    </SlideSection>
  );
}
