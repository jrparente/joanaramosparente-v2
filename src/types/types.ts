export interface Links {
  github?: string;
  live?: string;
  instagram?: string;
  casestudy?: string;
  backend?: string;
}

export interface Project {
  id: string;
  live: boolean;
  isDemo?: boolean;
  isFeatured: boolean;
  status: string;
  iscasestudy: boolean;
  type: string;
  date: string;
  name: string;
  shortDescription?: string;
  tagline?: string;
  description: string;
  problemStatement?: string;
  role?: string;
  image: string;
  links: Links;
  techstack: string[];
  features?: string[];
  codeHighlights?: string[];
  challengesAndLearnings?: string[];
  imageGallery?: { imgUrl: string; alt: string }[];
}
