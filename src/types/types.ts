export interface Links {
  github?: string;
  live?: string;
  instagram?: string;
  casestudy?: string;
}

export interface Project {
  id: number;
  live: boolean;
  isFeatured: boolean;
  iscasestudy: boolean;
  date: string;
  name: string;
  shortDescription?: string;
  tagline: string;
  description: string;
  problemStatement: string;
  role: string;
  image: string;
  links: Links;
  techstack: string[];
  features?: string[];
  codeHighlights?: string[];
  challengesAndLearnings?: string[];
}
