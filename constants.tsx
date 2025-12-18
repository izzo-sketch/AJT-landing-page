import {
  Zap,
  Users,
  Briefcase,
  Search,
  LayoutTemplate,
  Globe,
  Clock,
  Award,
  Cpu,
  HeartHandshake,
  Handshake,
} from 'lucide-react';
import { NavProduct, NavResource, Step, ProductSuiteItem, IndustryLogo, Review } from './types';

export const BRAND = {
  name: "AJobThing",
  color: "#f7a022",
  secondary: "#2d3243",
  dark: "#1e293b"
};

export const NAV_PRODUCTS: NavProduct[] = [
  { title: "AI JOB AD", desc: "Create compelling job ads in seconds.", icon: Zap, href: "#", color: "bg-blue-500" },
  { title: "AI CANDIDATE SEARCH", desc: "Headhunt top talent directly.", icon: Search, href: "#", color: "bg-orange-500" },
  { title: "SMART WALK-IN", desc: "Streamline bulk hiring events.", icon: Users, href: "#", color: "bg-green-500" },
  { title: "MY TALENT POOL", desc: "Build your own database of candidates.", icon: Briefcase, href: "#", color: "bg-purple-500" },
  { title: "COMPANY BRANDING", desc: "Showcase your culture.", icon: LayoutTemplate, href: "#", color: "bg-pink-500" },
  { title: "CAREER PAGE", desc: "Your branded hiring site.", icon: Globe, href: "#", color: "bg-indigo-500" },
  { title: "AJOBTHING CARE", desc: "Dedicated support and guidance for hiring success.", icon: HeartHandshake, href: "#", color: "bg-rose-500" },
  { title: "PARTNERSHIP", desc: "Collaborate with us to expand your reach.", icon: Handshake, href: "#", color: "bg-teal-500" },
];

export const NAV_RESOURCES: NavResource[] = [
  { label: "HR Resources", href: "#" },
  { label: "Recruitment Tools", href: "#", submenu: [
      { label: "Job Description Generator", href: "#" },
      { label: "Salary Comparison Tool", href: "#" }
  ]},
  { label: "Forum", href: "#" },
  { label: "Blog", href: "#" },
];

export const HIRE_FAST_STEPS: Step[] = [
  {
    id: 1,
    title: "Speedy Hiring",
    desc: "Get qualified applicants within 3 days of posting.",
    icon: Clock,
    image: "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    title: "Quality Candidates",
    desc: "Vetted professionals ready to join your team.",
    icon: Award,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    title: "Integrated AI",
    desc: "Smart matching technology to save you time.",
    icon: Cpu,
    image: "https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
  }
];

export const PRODUCTS_SUITE: ProductSuiteItem[] = [
  {
    title: "AI Job Ad",
    desc: "Generate optimized job descriptions in seconds using our advanced AI engine.",
    video: "https://cdn.coverr.co/videos/coverr-typing-on-computer-keyboard-2640/1080p.mp4",
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colSpan: "md:col-span-2",
    color: "text-blue-400"
  },
  {
    title: "Smart Walk-in",
    desc: "Manage mass hiring events with QR codes and digital resume collection.",
    video: "https://cdn.coverr.co/videos/coverr-people-walking-in-office-5363/1080p.mp4",
    thumbnail: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colSpan: "md:col-span-1",
    color: "text-green-400"
  },
  {
    title: "MY Talent Pool",
    desc: "Build and manage your own database of potential candidates for future roles.",
    video: "https://cdn.coverr.co/videos/coverr-scrolling-through-social-media-1606/1080p.mp4",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colSpan: "md:col-span-1",
    color: "text-purple-400"
  },
  {
    title: "Candidate Search",
    desc: "Proactively search our database of 4M+ job seekers to find your perfect match.",
    video: "https://cdn.coverr.co/videos/coverr-working-on-laptop-in-cafe-4828/1080p.mp4",
    thumbnail: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colSpan: "md:col-span-2",
    color: "text-orange-400"
  },
  {
    title: "Company Branding",
    desc: "Stand out with a customized company profile that attracts top talent.",
    video: "https://cdn.coverr.co/videos/coverr-team-brainstorming-in-office-5228/1080p.mp4",
    thumbnail: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colSpan: "md:col-span-1",
    color: "text-pink-400"
  },
  {
    title: "Career Page",
    desc: "Launch a beautiful, mobile-optimized career site for your brand instantly.",
    video: "https://cdn.coverr.co/videos/coverr-coding-on-laptop-2358/1080p.mp4",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    colSpan: "md:col-span-2",
    color: "text-indigo-400"
  }
];

export const INDUSTRY_LOGOS: IndustryLogo[] = [
  { name: "Starbucks", url: "https://logo.clearbit.com/starbucks.com.my?size=160" },
  { name: "Giant", url: "https://logo.clearbit.com/giant.com.my?size=160" },
  { name: "Sushi King", text: "Sushi King" }, 
  { name: "AEON", url: "https://logo.clearbit.com/aeonretail.com.my?size=160" },
  { name: "Nando's", url: "https://logo.clearbit.com/nandos.com.my?size=160" },
  { name: "EpiCentre", url: "https://logo.clearbit.com/urbanrepublic.com.my?size=160" }, 
  { name: "McDonald's", url: "https://logo.clearbit.com/mcdonalds.com.my?size=160" },
  { name: "Sunway", url: "https://logo.clearbit.com/sunwaylagoon.com?size=160" },
  { name: "Wing Tai", url: "https://logo.clearbit.com/wingtaiasia.com.sg?size=160" },
  { name: "Watsons", url: "https://logo.clearbit.com/watsons.com.my?size=160" },
  { name: "Parkson", url: "https://logo.clearbit.com/parkson.com.my?size=160" },
];

export const REVIEWS: Review[] = [
  { 
    name: "Ms Kalai", 
    role: "Senior Human Resource Manager",
    company: "The Chicken Rice Shop", 
    text: "We have gotten a very good response and we have recruited quite a number of headcounts after we have joined up with Maukerja, using SHOUTOUT. It's a very good movement for our recruitment step.", 
    rating: 5,
    logo: "https://logo.clearbit.com/thechickenriceshop.com?size=100"
  },
  { 
    name: "Mr Alvin", 
    role: "Team Head",
    company: "Gibraltar BSN", 
    text: "We have been working with AJobThing since 2018. The entire team is awesome and always provide their relentless support and commitment towards our recruitment.", 
    rating: 5,
    logo: "https://logo.clearbit.com/gibraltarbsn.com?size=100"
  },
  { 
    name: "Ms Suruthi", 
    role: "Recruiter",
    company: "Foodpanda Malaysia", 
    text: "AJobThing has always been accommodating. Their Account Managers and Customer Service are always ready to serve. Using their platform has been an added advantage to our hiring.", 
    rating: 5,
    logo: "https://logo.clearbit.com/foodpanda.my?size=100"
  },
  { 
    name: "Ms Eunice", 
    role: "Senior HR Executive",
    company: "PADINI", 
    text: "The response is very good… we get a lot of candidates, that's the reason we continue using SHOUTOUT. From morning until now, we still have many candidates queuing up for interviews.", 
    rating: 5,
    logo: "https://logo.clearbit.com/padini.com?size=100"
  },
  { 
    name: "Mr Calvin", 
    role: "Asst Manager of Talent Acquisition",
    company: "STARTEK", 
    text: "I'm quite impressed! In such a short time frame, AJobThing team can still deliver the result that is above my expectations!", 
    rating: 5,
    logo: "https://logo.clearbit.com/startek.com?size=100"
  },
  { 
    name: "En Shahrul", 
    role: "Restaurant General Manager",
    company: "McDonald's", 
    text: "For me, this two days event using SHOUTOUT is very encouraging and reliable, we can attract more people from the community to work at McDonald's.", 
    rating: 5,
    logo: "https://logo.clearbit.com/mcdonalds.com.my?size=100"
  }
];