"use client";

import { useState } from "react";

/* Pre-compute particle positions once on mount via lazy initializer (pure render). */
function createDots(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: `${((i * 7 + 13) * 17) % 100}%`,
    dur: `${6 + ((i * 3 + 5) % 8)}s`,
    delay: `${(i * 11 + 3) % 8}s`,
    size: 2 + ((i * 7 + 2) % 4),
    opacity: 0.2 + ((i * 13 + 1) % 4) * 0.1,
  }));
}

export default function Particles({ count = 12 }) {
  const [dots] = useState(() => createDots(count));

  return (
    <div className="particles-container">
      {dots.map((d) => (
        <div
          key={d.id}
          className="particle"
          style={{
            "--x": d.x,
            "--dur": d.dur,
            "--delay": d.delay,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
          }}
        />
      ))}
    </div>
  );
}
