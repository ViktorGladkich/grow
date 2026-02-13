"use client";

import dynamic from "next/dynamic";

const FullPageSlider = dynamic(() => import("@/components/FullPageSlider"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        height: "100vh",
        background: "#1a2f32",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          fontSize: "3em",
          fontWeight: 900,
          color: "#94de1d",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          animation: "pulse 1.5s ease-in-out infinite",
        }}
      >
        GROW
      </div>
    </div>
  ),
});

export default function HomePage() {
  return <FullPageSlider />;
}
