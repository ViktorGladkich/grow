import "./globals.css";

export const metadata = {
  title: "GROW — Eco Blog | Planting Trees, Restoring Earth",
  description:
    "GROW is an environmental charity on a mission to make it simple for everyone to help the planet by planting trees and supporting sustainable living.",
  keywords:
    "eco blog, tree planting, environment, sustainability, nature, conservation, green living",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
