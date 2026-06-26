import portfolio from "@/images/portfolio.png";
import dragon from "@/images/dragon_news.png";
import keen from "@/images/keen.png";

export const projects = [
  {
    id: "01",
    title: "Portfolio",
    description:
      "A modern developer portfolio built using Next.js and Tailwind CSS with responsive design and smooth UI interactions.",
    image: portfolio,
    tech: ["Next.js", "React", "Tailwind CSS", "Web3form"],
    github: "https://github.com/tafsin90/portfolio-ElitWeb",
    live: "#",
  },
  {
    id: "02",
    title: "Dragon News",
    description:
      "Dragoon News is a responsive front-end web application built with modern technologies to deliver real-time news articles across multiple categories. The app provides a clean and engaging reading experience, complete with user authentication, category navigation, and detailed article views.",
    image: dragon,
    tech: ["NextJS", "Express", "MongoDB", "Better-Auth", "Tailwind CSS"],
    github: "https://github.com/tafsin90/dragon-news",
    live: "https://dragon-news-five-beryl.vercel.app",
  },
  {
    id: "03",
    title: "Keen Keepers",
    description:
      "A personal relationship tracker built with Next.js that help me keep important friends and contacts organized, visible, and easy to follow up with.",
    image: keen,
    tech: ["Next.js", "Tailwind CSS","Recharts", "Daisy UI"],
    github: "https://github.com/tafsin90/keen-keepers",
    live: "https://keen-keepers-3jii.vercel.app/",
  },
];
