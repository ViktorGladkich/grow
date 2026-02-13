"use client";

import { useState, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Parallax, Keyboard } from "swiper/modules";
import "swiper/css";

import Navigation from "./Navigation";
import HeroSlideContent, { heroSlides } from "./slides/HeroSlides";
import MissionSlide from "./slides/MissionSlide";
import HowItWorksSlide from "./slides/HowItWorksSlide";
import ImpactSlide from "./slides/ImpactSlide";
import BlogSlide from "./slides/BlogSlide";
import ProjectsSlide from "./slides/ProjectsSlide";
import TestimonialsSlide from "./slides/TestimonialsSlide";
import QuoteSlide from "./slides/QuoteSlide";
import NewsletterSlide from "./slides/NewsletterSlide";

export default function FullPageSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = useCallback((swiper) => {
    setActiveIndex(swiper.activeIndex);
  }, []);

  const goTo = (i) => swiperRef.current?.slideTo(i);

  return (
    <div className="h-screen overflow-hidden relative">
      <Navigation activeIndex={activeIndex} goTo={goTo} />

      <Swiper
        modules={[Mousewheel, Parallax, Keyboard]}
        onSwiper={(s) => {
          swiperRef.current = s;
        }}
        onSlideChange={handleSlideChange}
        mousewheel={{ sensitivity: 0.8, thresholdDelta: 20 }}
        keyboard={{ enabled: true }}
        direction="vertical"
        speed={800}
        parallax
        className="h-screen"
      >
        {/* ─── Hero slides (0–2) ─── */}
        {heroSlides.map((slide, idx) => (
          <SwiperSlide
            key={`hero-${idx}`}
            className="overflow-hidden! [&:not(.swiper-slide-active)]:scale-100! scale-125! transition-transform! duration-2000! ease-in-out!"
          >
            <HeroSlideContent
              slide={slide}
              isActive={activeIndex === idx}
              goTo={goTo}
              idx={idx}
            />
          </SwiperSlide>
        ))}

        {/* ─── Mission (slide 3) ─── */}
        <SwiperSlide>
          <MissionSlide activeIndex={activeIndex} />
        </SwiperSlide>

        {/* ─── How It Works (slide 4) ─── */}
        <SwiperSlide>
          <HowItWorksSlide activeIndex={activeIndex} />
        </SwiperSlide>

        {/* ─── Impact (slide 5) ─── */}
        <SwiperSlide>
          <ImpactSlide activeIndex={activeIndex} />
        </SwiperSlide>

        {/* ─── Blog (slide 6) ─── */}
        <SwiperSlide>
          <BlogSlide activeIndex={activeIndex} />
        </SwiperSlide>

        {/* ─── Projects (slide 7) ─── */}
        <SwiperSlide>
          <ProjectsSlide activeIndex={activeIndex} />
        </SwiperSlide>

        {/* ─── Testimonials (slide 8) ─── */}
        <SwiperSlide>
          <TestimonialsSlide activeIndex={activeIndex} />
        </SwiperSlide>

        {/* ─── Quote (slide 9) ─── */}
        <SwiperSlide>
          <QuoteSlide activeIndex={activeIndex} />
        </SwiperSlide>

        {/* ─── Newsletter + Footer (slide 10) ─── */}
        <SwiperSlide>
          <NewsletterSlide activeIndex={activeIndex} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
