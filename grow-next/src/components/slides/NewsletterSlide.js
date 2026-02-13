"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { sectionBgs } from "../data";
import { fadeUp, fadeIn } from "../animations";
import {
  SlideSection,
  AnimatedContent,
  Tag,
  Title,
  Highlight,
  Subtitle,
  EcoBtn,
} from "../ui";

export default function NewsletterSlide({ activeIndex }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SlideSection bg={sectionBgs.newsletter} overlay={0.88}>
      <AnimatedContent isActive={activeIndex === 10}>
        <div className="text-center">
          <Tag>
            <Mail className="inline w-3.5 h-3.5 mr-1.5 -mt-0.5" /> Stay
            Connected
          </Tag>
          <Title>
            Join the <Highlight>Movement</Highlight>
          </Title>
          <Subtitle>
            Get monthly stories, project updates, and tips for sustainable
            living.
          </Subtitle>
        </div>
        <motion.form
          variants={fadeUp}
          custom={3}
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="max-w-md mx-auto"
        >
          <div className="flex flex-col gap-3 mb-4">
            <motion.input
              whileFocus={{
                borderColor: "#94de1d",
                boxShadow: "0 0 20px rgba(148,222,29,0.15)",
              }}
              type="text"
              placeholder="Your name"
              required
              className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white text-sm
                outline-none transition-all duration-300 placeholder:text-white/30 font-[Montserrat]"
            />
            <motion.input
              whileFocus={{
                borderColor: "#94de1d",
                boxShadow: "0 0 20px rgba(148,222,29,0.15)",
              }}
              type="email"
              placeholder="Your email"
              required
              className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white text-sm
                outline-none transition-all duration-300 placeholder:text-white/30 font-[Montserrat]"
            />
          </div>
          <EcoBtn className="w-full">
            {submitted ? "🌱 Welcome to GROW!" : "Subscribe"}
          </EcoBtn>
        </motion.form>
        <motion.div
          variants={fadeIn}
          custom={5}
          className="mt-10 pt-5 border-t border-white/5 text-center"
        >
          <p className="text-[0.7em] text-white/25 tracking-wider mb-2">
            © 2026 GROW Tree. All rights reserved. Made with 💚
          </p>
          <div className="flex justify-center gap-6">
            {["Privacy", "Terms", "Press", "FAQ"].map((l) => (
              <motion.a
                key={l}
                href="#"
                whileHover={{ color: "#94de1d" }}
                className="text-[0.65em] text-white/35 uppercase tracking-[0.15em] font-semibold"
              >
                {l}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </AnimatedContent>
    </SlideSection>
  );
}
