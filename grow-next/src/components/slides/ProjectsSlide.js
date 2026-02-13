"use client";

import { motion } from "framer-motion";
import { FolderKanban } from "lucide-react";
import { projects, sectionBgs } from "../data";
import { fadeUp, staggerContainer, cardHover } from "../animations";
import { SlideSection, AnimatedContent, Tag, Title, Highlight } from "../ui";

export default function ProjectsSlide({ activeIndex }) {
  return (
    <SlideSection bg={sectionBgs.projects} overlay={0.78}>
      <AnimatedContent isActive={activeIndex === 7}>
        <Tag>
          <FolderKanban className="inline w-3.5 h-3.5 mr-1.5 -mt-0.5" /> Active
          Projects
        </Tag>
        <Title>
          Where We&apos;re <Highlight>Growing</Highlight>
        </Title>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6"
        >
          {projects.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              whileHover={cardHover}
              className="bg-eco-glass border border-eco-glass-border rounded-2xl p-6
                backdrop-blur-md cursor-pointer transition-colors duration-300
                hover:bg-[rgba(148,222,29,0.05)] hover:border-[rgba(148,222,29,0.2)]"
            >
              <div className="text-[0.7em] font-bold uppercase tracking-[0.2em] text-eco-green mb-2">
                {p.country}
              </div>
              <h3 className="text-base font-bold mb-3 leading-snug">
                {p.title}
              </h3>
              <div className="flex gap-6 mb-4">
                <div className="flex flex-col">
                  <strong className="text-lg text-eco-green font-black">
                    {p.trees}
                  </strong>
                  <span className="text-[0.6em] text-eco-gray uppercase tracking-[0.15em] font-semibold">
                    Trees
                  </span>
                </div>
                <div className="flex flex-col">
                  <strong className="text-lg text-eco-green font-black">
                    {p.progress}%
                  </strong>
                  <span className="text-[0.6em] text-eco-gray uppercase tracking-[0.15em] font-semibold">
                    Done
                  </span>
                </div>
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-eco-green to-[#54c955]"
                  initial={{ width: 0 }}
                  animate={{
                    width: activeIndex === 7 ? `${p.progress}%` : "0%",
                  }}
                  transition={{
                    duration: 1.8,
                    delay: i * 0.2,
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
