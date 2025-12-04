import { LucideIcon } from 'lucide-react';

export interface NavProduct {
  title: string;
  desc: string;
  icon: LucideIcon;
  href: string;
  color: string;
}

export interface NavResourceSubmenu {
  label: string;
  href: string;
}

export interface NavResource {
  label: string;
  href: string;
  submenu?: NavResourceSubmenu[];
}

export interface Step {
  id: number;
  title: string;
  desc: string;
  icon: LucideIcon;
  image: string;
}

export interface ProductSuiteItem {
  title: string;
  desc: string;
  video: string;
  thumbnail: string;
  colSpan: string;
  color: string;
}

export interface IndustryLogo {
  name: string;
  url?: string;
  text?: string;
}

export interface Review {
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  logo: string;
}
