"use client";

import { motion } from "framer-motion";
import { FolderKanban, MapPin, TreePine, Target } from "lucide-react";
import { projects, sectionBgs } from "../data";
import { fadeUp, staggerContainer } from "../animations";
import {
  SlideSection,
  AnimatedContent,
  GlassCard,
  Donut,
  Tag,
  Title,
  Highlight,
} from "../ui";

const countryIcons = [
  { flag: "🇧🇷", color: "from-green-500/20 to-yellow-500/10" },
  { flag: "🇲🇾", color: "from-blue-500/20 to-red-500/10" },
  { flag: "🇳🇬", color: "from-green-600/20 to-white/5" },
];

export default function ProjectsSlide({ activeIndex }) {
  const isActive = activeIndex === 7;

  return (
    <SlideSection bg={sectionBgs.projects} overlay={0.78}>
      <AnimatedContent isActive={isActive}>
        <motion.div className="text-center">
          <Tag>
            <FolderKanban className="inline w-3.5 h-3.5 mr-1.5 -mt-0.5" />{" "}
            Active Projects
          </Tag>
          <Title>
            Where We&apos;re <Highlight>Growing</Highlight>
          </Title>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
          {projects.map((p, i) => (
            <div key={i}>
              <GlassCard className="h-full">
                {/* Country header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-9 h-9 rounded-lg bg-linear-to-br ${countryIcons[i].color}
                      flex items-center justify-center text-lg border border-white/10`}
                    >
                      {countryIcons[i].flag}
                    </div>
                    <div>
                      <div className="text-[0.65em] font-bold uppercase tracking-[0.2em] text-eco-green">
                        {p.country.split(" ")[1]}
                      </div>
                      <h3 className="text-[0.85em] font-bold leading-tight">
                        {p.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Stats row with donut */}
                <div className="flex items-center justify-between mt-2">
                  <div className="flex gap-5">
                    <div className="flex flex-col items-center">
                      <TreePine className="w-4 h-4 text-eco-green/60 mb-1" />
                      <strong className="text-base text-eco-green font-black">
                        {p.trees}
                      </strong>
                      <span className="text-[0.55em] text-eco-gray uppercase tracking-[0.15em] font-semibold">
                        Trees
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Target className="w-4 h-4 text-eco-green/60 mb-1" />
                      <strong className="text-base text-eco-green font-black">
                        {p.progress}%
                      </strong>
                      <span className="text-[0.55em] text-eco-gray uppercase tracking-[0.15em] font-semibold">
                        Goal
                      </span>
                    </div>
                  </div>
                  <Donut
                    progress={p.progress}
                    active={isActive}
                    delay={i * 0.3}
                  />
                </div>

                {/* Location tag */}
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-eco-green/50" />
                  <span className="text-[0.6em] text-eco-gray/60 font-semibold">
                    Active since 2021
                  </span>
                  <div className="ml-auto w-2 h-2 rounded-full bg-eco-green animate-glow-pulse" />
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </AnimatedContent>
    </SlideSection>
  );
}
