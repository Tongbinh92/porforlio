import { LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'technical' | 'soft' | 'tool';
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  featured: boolean;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
  label: string;
}

export interface Strength {
  title: string;
  description: string;
  icon: LucideIcon;
}