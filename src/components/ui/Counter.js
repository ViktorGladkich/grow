"use client";

import { useRef, useEffect } from "react";

function formatNum(n) {
  if (n >= 1e6) return (n / 1e6).toFixed(1) + "M";
  if (n >= 1e3) return (n / 1e3).toFixed(0) + "K";
  return n.toLocaleString();
}

export default function Counter({ count, active }) {
  const ref = useRef(null);
  const done = useRef(false);

  useEffect(() => {
    if (active && !done.current && ref.current) {
      done.current = true;
      const el = ref.current;
      const dur = 2000;
      const t0 = performance.now();
      (function tick(now) {
        const p = Math.min((now - t0) / dur, 1);
        el.textContent = formatNum(
          Math.round((1 - Math.pow(1 - p, 3)) * count),
        );
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    }
  }, [active, count]);

  return (
    <div
      ref={ref}
      className="text-[clamp(2em,3.5vw,3em)] font-black text-shimmer leading-none mb-1 tabular-nums"
    >
      0
    </div>
  );
}
