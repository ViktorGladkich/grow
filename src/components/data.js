import { Globe, Users, FlaskConical, ShieldCheck } from "lucide-react";

export const heroSlides = [
  {
    word: "Grow",
    text: "As an environmental charity, we're on a mission to make it simple for everyone to help the environment by planting each one tree!",
    cta: "Discover our mission",
    layers: {
      back: "/img/slides/slide-1-layer-back.jpg",
      middle: "/img/slides/slide-1-layer-middle.png",
      front: "/img/slides/slide-1-layer-front.png",
    },
  },
  {
    word: "Live",
    text: "Every breath we take comes from the forests. Protecting wildlife and forests is protecting our own existence.",
    cta: "See our impact",
    layers: {
      back: "/img/slides/slide-2-layer-back.jpg",
      middle: "/img/slides/slide-2-layer-middle.png",
      front: "/img/slides/slide-2-layer-front.png",
    },
  },
  {
    word: "Wood",
    text: "Forests are the lungs of our planet. Together we can restore what was lost and build a greener future.",
    cta: "View projects",
    layers: {
      back: "/img/slides/slide-3-layer-back.jpg",
      middle: "/img/slides/slide-3-layer-middle.png",
      front: "/img/slides/slide-3-layer-front.png",
    },
  },
];

export const missionFeatures = [
  {
    Icon: Globe,
    title: "Global Reach",
    text: "Active in 47 countries across 6 continents",
  },
  {
    Icon: Users,
    title: "Community",
    text: "Working with indigenous communities worldwide",
  },
  {
    Icon: FlaskConical,
    title: "Science-Backed",
    text: "Guided by expert ecologists and data",
  },
  {
    Icon: ShieldCheck,
    title: "Transparent",
    text: "Track every donation and every planted tree",
  },
];

export const steps = [
  {
    number: "01",
    title: "Choose Your Impact",
    text: "Select a project — from tropical rainforests to mangrove coastlines. Every tree costs just $1.",
  },
  {
    number: "02",
    title: "We Plant & Nurture",
    text: "Local communities plant your tree using native species. Each seedling is nurtured for 3 years.",
  },
  {
    number: "03",
    title: "Track & Celebrate",
    text: "Receive GPS coordinates and progress photos. Watch your personal forest grow over time.",
  },
];

export const impactStats = [
  { count: 12500000, label: "Trees Planted", fill: 87 },
  { count: 47, label: "Countries Active", fill: 72 },
  { count: 340000, label: "Tons CO₂ Offset", fill: 65 },
  { count: 2100, label: "Species Protected", fill: 53 },
];

export const blogArticles = [
  {
    category: "Conservation",
    title:
      "The Amazon's Silent Recovery: How Reforestation Outpaces Expectations",
    date: "Feb 10, 2026",
    read: "8 min",
  },
  {
    category: "Ocean",
    title: "Mangrove Forests: Unsung Heroes of Carbon Capture",
    date: "Feb 3, 2026",
    read: "5 min",
  },
  {
    category: "Science",
    title: "River Ecosystems: Why Riparian Forests Matter",
    date: "Jan 28, 2026",
    read: "6 min",
  },
];

export const projects = [
  {
    country: "🇧🇷 Brazil",
    title: "Amazon Restoration Initiative",
    trees: "1.56M",
    progress: 78,
  },
  {
    country: "🇲🇾 Malaysia",
    title: "Borneo Rainforest Corridor",
    trees: "450K",
    progress: 45,
  },
  {
    country: "🇳🇬 Nigeria",
    title: "Great Green Wall Initiative",
    trees: "820K",
    progress: 32,
  },
];

export const testimonials = [
  {
    stars: "★★★★★",
    text: "GROW made it incredibly easy for our company to offset our carbon footprint. The transparency is unmatched.",
    name: "Sarah Mitchell",
    role: "CEO, EcoTech",
    avatar: "S",
  },
  {
    stars: "★★★★★",
    text: "Volunteering with GROW in Borneo changed my perspective. Seeing orangutans return was life-changing.",
    name: "Marcus Chen",
    role: "Volunteer",
    avatar: "M",
  },
  {
    stars: "★★★★★",
    text: "I use GROW's platform to teach students ecology. They track 'their' trees growing in Brazil.",
    name: "Elena Rodriguez",
    role: "Teacher",
    avatar: "E",
  },
];

export const sectionBgs = {
  mission: "/img/aerial-forest.png",
  howItWorks: "/img/seedling.png",
  impact: "/img/ocean-reef.png",
  blog: "/img/mountain-lake.png",
  projects: "/img/savanna-sunset.png",
  testimonials: "/img/river-forest.png",
  quote: "/img/slides/slide-1-layer-back.jpg",
  newsletter: "/img/hero-forest.png",
};

export const navItems = [
  { label: "Home", index: 0 },
  { label: "Mission", index: 3 },
  { label: "How", index: 4 },
  { label: "Impact", index: 5 },
  { label: "Blog", index: 6 },
  { label: "Projects", index: 7 },
  { label: "Voices", index: 8 },
  { label: "Contact", index: 10 },
];

export const TOTAL_SLIDES = 11;
