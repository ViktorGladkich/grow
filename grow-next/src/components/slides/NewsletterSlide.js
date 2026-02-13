"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Check,
  Sparkles,
  Twitter,
  Instagram,
  Youtube,
  Heart,
} from "lucide-react";
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

const socials = [
  { Icon: Twitter, label: "Twitter", color: "hover:text-blue-400" },
  { Icon: Instagram, label: "Instagram", color: "hover:text-pink-400" },
  { Icon: Youtube, label: "YouTube", color: "hover:text-red-400" },
];

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

        {/* Form with animated border */}
        <motion.form
          variants={fadeUp}
          custom={3}
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="max-w-md mx-auto relative"
        >
          {/* Glow behind form */}
          <div className="absolute -inset-4 rounded-3xl bg-eco-green/5 blur-xl pointer-events-none" />

          <div className="relative flex flex-col gap-3 mb-4">
            <motion.input
              whileFocus={{
                borderColor: "#94de1d",
                boxShadow: "0 0 30px rgba(148,222,29,0.2)",
              }}
              type="text"
              placeholder="Your name"
              required
              className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm
                outline-none transition-all duration-300 placeholder:text-white/30 font-[Montserrat]
                hover:border-white/20 focus:bg-white/8"
            />
            <motion.input
              whileFocus={{
                borderColor: "#94de1d",
                boxShadow: "0 0 30px rgba(148,222,29,0.2)",
              }}
              type="email"
              placeholder="Your email"
              required
              className="bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm
                outline-none transition-all duration-300 placeholder:text-white/30 font-[Montserrat]
                hover:border-white/20 focus:bg-white/8"
            />
          </div>
          <EcoBtn className="w-full">
            {submitted ? (
              <span className="inline-flex items-center gap-2">
                <Check className="w-4 h-4" /> Welcome to GROW!
              </span>
            ) : (
              <span className="inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Subscribe
              </span>
            )}
          </EcoBtn>

          {/* Trust badge */}
          <motion.p
            variants={fadeIn}
            custom={4}
            className="text-center mt-3 text-[0.6em] text-white/25 flex items-center justify-center gap-1"
          >
            <Heart className="w-3 h-3 text-eco-green/40" /> Join 52,000+
            eco-warriors. No spam, ever.
          </motion.p>
        </motion.form>

        {/* Social links */}
        <motion.div
          variants={fadeIn}
          custom={5}
          className="flex justify-center gap-3 mt-8 mb-6"
        >
          {socials.map(({ Icon, label, color }) => (
            <motion.a
              key={label}
              href="#"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10
                flex items-center justify-center text-white/40 ${color}
                transition-all duration-300 hover:bg-white/10 hover:border-white/20`}
            >
              <Icon className="w-4.5 h-4.5" />
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={fadeIn}
          custom={6}
          className="pt-5 border-t border-white/5 text-center"
        >
          <p className="text-[0.7em] text-white/25 tracking-wider mb-2">
            © 2026 GROW Tree. All rights reserved. Made with 💚
          </p>
          <div className="flex justify-center gap-6">
            {["Privacy", "Terms", "Press", "FAQ"].map((l) => (
              <motion.a
                key={l}
                href="#"
                whileHover={{ color: "#94de1d", y: -2 }}
                className="text-[0.65em] text-white/35 uppercase tracking-[0.15em] font-semibold transition-all duration-300"
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
