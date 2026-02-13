"use client";

import Particles from "./Particles";

export default function SlideSection({ bg, overlay = 0.7, children }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center will-change-contents"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,26,29,0.92) 0%, rgba(26,47,50,0.85) 50%, rgba(10,26,29,0.95) 100%)",
          opacity: overlay,
        }}
      />
      <div className="aurora-bg" />
      <Particles count={8} />
      <div className="relative z-10 w-full h-full overflow-y-auto flex flex-col items-center justify-center px-6 pt-32 pb-20 md:pt-40 md:pb-24">
        {children}
      </div>
    </div>
  );
}
