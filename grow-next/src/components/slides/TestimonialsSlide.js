"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { testimonials, sectionBgs } from "../data";
import { scaleIn, staggerContainer, cardHover } from "../animations";
import { SlideSection, AnimatedContent, Tag, Title, Highlight } from "../ui";

export default function TestimonialsSlide({ activeIndex }) {
  return (
    <SlideSection bg={sectionBgs.testimonials} overlay={0.82}>
      <AnimatedContent isActive={activeIndex === 8}>
        <div className="text-center">
          <Tag>
            <MessageCircle className="inline w-3.5 h-3.5 mr-1.5 -mt-0.5" />{" "}
            Voices
          </Tag>
          <Title>
            What People <Highlight>Say</Highlight>
          </Title>
        </div>
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              custom={i}
              whileHover={cardHover}
              className="bg-eco-glass border border-eco-glass-border rounded-2xl p-6
                text-left relative cursor-pointer transition-colors duration-300
                hover:bg-[rgba(148,222,29,0.05)] hover:border-[rgba(148,222,29,0.15)]"
            >
              <span className="absolute top-1 right-3 text-[3.5em] font-black text-[rgba(148,222,29,0.07)] leading-none font-serif">
                &ldquo;
              </span>
              <div className="text-yellow-400 text-[0.82em] tracking-[0.15em] mb-3">
                {t.stars}
              </div>
              <p className="text-[0.85em] text-white/80 leading-relaxed italic mb-4">
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-eco-green to-[#54c955]
                  flex items-center justify-center font-black text-eco-dark shrink-0"
                >
                  {t.avatar}
                </div>
                <div>
                  <strong className="block text-[0.82em] font-bold">
                    {t.name}
                  </strong>
                  <span className="block text-[0.62em] text-eco-gray uppercase tracking-[0.1em]">
                    {t.role}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatedContent>
    </SlideSection>
  );
}
