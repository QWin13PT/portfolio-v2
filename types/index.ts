export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  age?: number;
  location: string;
  bio: string;
  tagline?: string;
  photo?: string;
  socialLinks?: SocialLink[];
}

export interface Project {
  id: string;
  title: string;
  smallDescription: string;
  description: string;
  background?: string;
  images?: string[];
  technologies: string[];
  category: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  description: string;
  startDate: string;
  endDate?: string; // Optional for current positions
  location?: string;
  technologies?: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  description?: string;
  startDate: string;
  endDate?: string;
  location?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface Tools {
  categories: SkillCategory[];
}

