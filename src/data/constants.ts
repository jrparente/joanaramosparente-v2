import { Linkedin, Github, Mail, Instagram, Twitter } from "lucide-react";

export const routes = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  // { label: "Work With Me", href: "/work-with-me" },
  { label: "Contact", href: "/#contact" },
];

export const socialMedia = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/joanaparente/",
  },
  {
    icon: Github,
    label: "Github",
    href: "https://github.com/jrparente",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://x.com/joana_r_parente",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/joanaramosparente/",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:jrparente@gmail.com",
  },
];

export const technicalSkills: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "NextJS",
  "SQL",
  "MongoDB",
  "Express.js",
  "Git",
];

export const marketingSkills: string[] = [
  "SEO Best Practices",
  "Content Creation",
  "Social Media Strategy",
];
