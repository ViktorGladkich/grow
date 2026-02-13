"use client";

import { motion } from "framer-motion";
import { MessageCircle, Star, Quote, ThumbsUp } from "lucide-react";
import { testimonials, sectionBgs } from "../data";
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

export default function TestimonialsSlide({ activeIndex }) {
  const isActive = activeIndex === 8;

  return (
    <SlideSection bg={sectionBgs.testimonials} overlay={0.82}>
      <AnimatedContent isActive={isActive}>
        <motion.div className="text-center">
          <Tag>
            <MessageCircle className="inline w-3.5 h-3.5 mr-1.5 -mt-0.5" />{" "}
            Voices
          </Tag>
          <Title>
            What People <Highlight>Say</Highlight>
          </Title>

          {/* Satisfaction summary */}
          <motion.div
            variants={fadeUp}
            custom={2}
            className="flex items-center justify-center gap-4 mb-6 mt-2"
          >
            <div className="flex items-center gap-1.5 px-4 py-1.5 bg-yellow-400/10 rounded-full border border-yellow-400/20">
              <ThumbsUp className="w-3.5 h-3.5 text-yellow-400" />
              <span className="text-[0.65em] font-bold text-yellow-400 uppercase tracking-widest">
                98% satisfaction
              </span>
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, j) => (
                <Star
                  key={j}
                  className="w-4 h-4 text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
          {testimonials.map((t, i) => (
            <div key={i}>
              <GlassCard className="text-left relative h-full">
                {/* Floating quote icon */}
                <motion.div
                  className="absolute -top-3 -right-2 w-10 h-10 rounded-xl bg-eco-green/10
                    flex items-center justify-center border border-eco-green/20
                    shadow-[0_0_15px_rgba(148,222,29,0.15)]"
                  initial={{ opacity: 0, rotate: -20, scale: 0 }}
                  animate={isActive ? { opacity: 1, rotate: 0, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.2 + 0.3 }}
                >
                  <Quote className="w-4 h-4 text-eco-green" />
                </motion.div>

                {/* Star rating */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isActive ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: i * 0.12 + j * 0.06 }}
                    >
                      <Star
                        className="w-4 h-4 text-yellow-400 fill-yellow-400
                        drop-shadow-[0_0_6px_rgba(250,204,21,0.4)]"
                      />
                    </motion.div>
                  ))}
                </div>

                <p className="text-[0.85em] text-white/80 leading-relaxed italic mb-5">
                  {t.text}
                </p>

                {/* Author row with enhanced avatar */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <div className="relative">
                    <div
                      className="w-11 h-11 rounded-full bg-linear-to-br from-eco-green to-[#54c955]
                      flex items-center justify-center font-black text-eco-dark
                      shadow-[0_0_20px_rgba(148,222,29,0.3)]
                      ring-2 ring-eco-green/20 ring-offset-2 ring-offset-transparent"
                    >
                      {t.avatar}
                    </div>
                    {/* Online indicator */}
                    <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-eco-green border-2 border-eco-dark" />
                  </div>
                  <div>
                    <strong className="block text-[0.82em] font-bold">
                      {t.name}
                    </strong>
                    <span className="block text-[0.62em] text-eco-gray uppercase tracking-widest">
                      {t.role}
                    </span>
                  </div>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </AnimatedContent>
    </SlideSection>
  );
}
