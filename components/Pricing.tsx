import React, { useState, useEffect } from 'react';
import { Check, Star, Zap, Info, Sparkles, Globe, MessageCircle, Phone, UserCheck, Layout, Clock, Briefcase, Gem, Settings, HeartHandshake, TrendingUp, X, Mail, MessageSquare, ChevronDown, ChevronUp, Search, Lock, Calendar, User, MapPin, Play, ChevronLeft, ChevronRight, Users, Target } from 'lucide-react';
import Button from './Button';

export const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState('AI JOB AD');
  const [planType, setPlanType] = useState<'yearly' | 'alacarte'>('yearly');
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  const tabs = [
    'AI JOB AD',
    'CANDIDATE SEARCH',
    'MASS HIRING',
    'PACKAGE COMPARISON'
  ];

  const massHiringVideos = [
    {
      company: "The Chicken Rice Shop",
      name: "Nur Syazana",
      role: "HR & Admin Executive",
      logo: "https://logo.clearbit.com/thechickenriceshop.com",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      company: "Padini",
      name: "Eunice Lee",
      role: "Senior Human Resource Executive",
      logo: "https://logo.clearbit.com/padini.com",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      company: "AEON",
      name: "Recruitment Team",
      role: "Aeon Co. (M) Bhd.",
      logo: "https://logo.clearbit.com/aeonretail.com.my",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      company: "Baskin-Robbins",
      name: "Siti Shamizatulhamim",
      role: "Executive, Human Resource",
      logo: "https://logo.clearbit.com/baskinrobbins.com",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      company: "McDonald's",
      name: "Wan Bahiyah Bt Bachtiar",
      role: "Perunding Operasi",
      logo: "https://logo.clearbit.com/mcdonalds.com.my",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const shoutoutCustomers = [
    { name: "AEON", url: "https://logo.clearbit.com/aeonretail.com.my" },
    { name: "CTOS", url: "https://logo.clearbit.com/ctoscredit.com.my" },
    { name: "Watsons", url: "https://logo.clearbit.com/watsons.com.my" },
    { name: "McDonald's", url: "https://logo.clearbit.com/mcdonalds.com.my" },
    { name: "UKM Specialist Centre", url: "https://logo.clearbit.com/ukmsc.com.my" },
    { name: "Yelaoshr", url: "https://logo.clearbit.com/yelaoshr.edu.my" },
    { name: "Teledirect", url: "https://logo.clearbit.com/teledirectgroup.com" },
    { name: "Gibraltar BSN", url: "https://logo.clearbit.com/gibraltarbsn.com" },
    { name: "Sunway Hotels", url: "https://logo.clearbit.com/sunwayhotels.com" },
    { name: "Starbucks", url: "https://logo.clearbit.com/starbucks.com.my" },
    { name: "Intercontinental", url: "https://logo.clearbit.com/ihg.com" },
    { name: "AEGIS", url: "https://logo.clearbit.com/aegisglobal.com" },
    { name: "MoneyMatch", url: "https://logo.clearbit.com/moneymatch.co" },
    { name: "Sellbytel", url: "https://logo.clearbit.com/webhelp.com" },
  ];

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'PACKAGE COMPARISON') {
      setTimeout(() => {
        const element = document.getElementById('comparison-table');
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 150; // Adjust offset
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const toggleFaq = (index: string) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const isAiJobAd = activeTab === 'AI JOB AD';
  const isCandidateSearch = activeTab === 'CANDIDATE SEARCH';
  const isMassHiring = activeTab === 'MASS HIRING';
  const isPackageComparison = activeTab === 'PACKAGE COMPARISON';

  useEffect(() => {
    let interval: any;
    if (isMassHiring) {
      interval = setInterval(() => {
        setActiveVideoIndex((prev) => (prev + 1) % massHiringVideos.length);
      }, 5000); 
    }
    return () => clearInterval(interval);
  }, [isMassHiring, massHiringVideos.length]);

  const nextVideo = () => {
    setActiveVideoIndex((prev) => (prev + 1) % massHiringVideos.length);
  };

  const prevVideo = () => {
    setActiveVideoIndex((prev) => (prev - 1 + massHiringVideos.length) % massHiringVideos.length);
  };

  // --- COMPONENT HELPERS ---
  const Tooltip = ({ text }: { text: string }) => (
    <div className="group/tooltip relative inline-flex items-center ml-1.5 align-middle z-50">
      <Info className="w-3.5 h-3.5 text-slate-300 hover:text-[#f7a022] cursor-help transition-colors" />
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-3 bg-slate-800 text-white text-[11px] font-normal leading-relaxed rounded-xl shadow-xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 z-[100] pointer-events-none text-center transform translate-y-1 group-hover/tooltip:translate-y-0">
        {text}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-800"></div>
      </div>
    </div>
  );

  const FeatureRow = ({ label, value, subValue, icon: Icon, tooltip, iconClassName }: { label: string | React.ReactNode, value: string | React.ReactNode, subValue?: string, icon?: React.ElementType, tooltip?: string, iconClassName?: string }) => (
    <div className="flex justify-between items-start py-2 border-b border-slate-100 last:border-0 relative">
      <div className="flex items-center gap-1.5 text-left pr-2 max-w-[70%]">
         {Icon && <Icon className={`w-3.5 h-3.5 shrink-0 fill-current/20 ${iconClassName || 'text-[#f7a022]'}`} />}
         <div className="flex items-center flex-wrap">
            <span className="text-sm text-slate-500 font-medium leading-tight">{label}</span>
            {tooltip && <Tooltip text={tooltip} />}
         </div>
      </div>
      <div className="text-right shrink-0">
        <div className="text-sm font-bold text-slate-700">{value}</div>
        {subValue && <div className="text-xs text-slate-400 leading-tight">{subValue}</div>}
      </div>
    </div>
  );

  const FeatureBool = ({ label, icon: Icon, tooltip }: { label: string | React.ReactNode, icon?: React.ElementType, tooltip?: string }) => (
     <div className="flex items-center gap-2 py-1.5">
        <div className="p-0.5 bg-green-100 rounded-full shrink-0">
            <Check className="w-3 h-3 text-green-600" />
        </div>
        <div className="flex items-center gap-1.5 flex-1">
            {Icon && <Icon className="w-3.5 h-3.5 text-[#f7a022] shrink-0 fill-current/20" />}
            <span className="text-sm text-slate-600 font-medium leading-tight flex items-center flex-wrap">
                {label}
                {tooltip && <Tooltip text={tooltip} />}
            </span>
        </div>
     </div>
  );

  const comparisonData = [
    {
      category: "Job Posting",
      rows: [
        { name: "Job Ad (Single job posting)", ajt: { type: "check", sub: "*Instant hiring within 72 hours" }, other: { type: "check" } },
        { name: "Job Ad (Unlimited job posting yearly)", ajt: { type: "check", sub: "*Instant hiring within 72 hours" }, other: { type: "check" } },
        { name: "Job Posting Durations", ajt: { type: "text", value: "45 days" }, other: { type: "text", value: "30 days" } },
        { name: "English Job Posting Languages", ajt: { type: "check" }, other: { type: "check" } },
        { name: "Mandarin Job Posting Languages", ajt: { type: "check" }, other: { type: "cross" } },
        { name: "Malay Job Posting Languages", ajt: { type: "check" }, other: { type: "cross" } },
        { 
            name: "Posted to Multiple Platforms", 
            ajt: { type: "custom", content: (
                <div className="flex items-center justify-center -space-x-3">
                    <img src="https://files.ajobthing.com/assets/logo/maukerja/v6-logo-desktop.svg" className="w-10 h-10 rounded-full bg-white p-1.5 shadow-sm border border-slate-100 object-contain" title="Maukerja" />
                    <img src="https://files.ajobthing.com/assets/logo/ricebowl/v6-logo-desktop.svg" className="w-10 h-10 rounded-full bg-white p-1.5 shadow-sm border border-slate-100 object-contain" title="Ricebowl" />
                    <div className="w-10 h-10 rounded-full bg-white p-2 shadow-sm border border-slate-100 flex items-center justify-center" title="LinkedIn"><img src="https://files.ajobthing.com/assets/landing/ico-linkedin.svg" className="w-full h-full" /></div>
                    <div className="w-10 h-10 rounded-full bg-white p-2 shadow-sm border border-slate-100 flex items-center justify-center" title="Facebook"><img src="https://files.ajobthing.com/assets/landing/ico-facebook.svg" className="w-full h-full" /></div>
                    <div className="w-10 h-10 rounded-full bg-white p-2 shadow-sm border border-slate-100 flex items-center justify-center" title="Google"><img src="https://files.ajobthing.com/assets/landing/ico-google.svg" className="w-full h-full" /></div>
                </div>
            )}, 
            other: { type: "cross", sub: "Limited" } 
        },
      ]
    },
    {
      category: "Company Branding",
      rows: [
        { name: "Company Page", ajt: { type: "check" }, other: { type: "check" } },
        { name: "Company Page Followers", note: "*Followers receive the latest updates directly from the company.", ajt: { type: "check" }, other: { type: "cross" } },
        { name: "Social Media Shoutout", ajt: { type: "check", sub: "Social Media Platforms" }, other: { type: "cross" } },
      ]
    },
    {
      category: "Reach and Engagement",
      rows: [
        { name: "Social Media Followers", ajt: { type: "text", value: "3.3 Million" }, other: { type: "text", value: "Average 400k" } },
        { 
            name: "Social Media Platform", 
            ajt: { type: "custom", content: (
                <div className="grid grid-cols-4 gap-2 w-fit mx-auto">
                     <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center"><div className="w-4 h-4 bg-black rounded-full"></div></div> {/* TikTok Placeholder */}
                     <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center"><div className="text-xs font-bold">X</div></div>
                     <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center"><div className="w-4 h-4 border-2 border-pink-500 rounded"></div></div> {/* IG Placeholder */}
                     <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center"><img src="https://files.ajobthing.com/assets/landing/ico-facebook.svg" className="w-5 h-5" /></div>
                     <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-[10px] font-bold text-red-500">小</div>
                     <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center"><img src="https://files.ajobthing.com/assets/landing/ico-linkedin.svg" className="w-5 h-5" /></div>
                     <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center"><img src="https://files.ajobthing.com/assets/landing/ico-google.svg" className="w-5 h-5" /></div>
                     <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-[10px] font-bold text-slate-400">+</div>
                </div>
            )}, 
            other: { type: "custom", content: (
                <div className="flex justify-center gap-2 opacity-50">
                    <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center"><img src="https://files.ajobthing.com/assets/landing/ico-linkedin.svg" className="w-5 h-5" /></div>
                    <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center"><img src="https://files.ajobthing.com/assets/landing/ico-facebook.svg" className="w-5 h-5" /></div>
                </div>
            )} 
        },
      ]
    },
    {
      category: "Integrated AI",
      rows: [
        { name: "Candidate Profile (Candidate Search)", ajt: { type: "text", value: "Free", highlight: true }, other: { type: "text", value: "Additional Charges" } },
        { name: "Applicant Tracking System (ATS)", ajt: { type: "check" }, other: { type: "check" } },
        { name: "AI Candidate Matching Score", ajt: { type: "check" }, other: { type: "cross" } },
        { name: "AI Recommended Candidates", ajt: { type: "check" }, other: { type: "cross" } },
        { name: "AI Job Description Builder", ajt: { type: "check" }, other: { type: "cross" } },
      ]
    },
    {
      category: "Personal Service and Support",
      rows: [
        { name: "Dedicated Sales Consultant", ajt: { type: "check" }, other: { type: "check" } },
        { name: "Dedicated Hiring Consultant", ajt: { type: "check" }, other: { type: "cross" } },
        { 
            name: "Customer Support Channel", 
            ajt: { type: "custom", content: (
                <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-left w-fit mx-auto">
                    <div className="flex items-center gap-2">
                        <div className="p-1 rounded bg-green-100"><MessageCircle className="w-3.5 h-3.5 text-green-600" /></div>
                        <span className="text-xs font-bold text-slate-700">WhatsApp</span>
                    </div>
                    <div className="flex items-center gap-2">
                         <div className="p-1 rounded bg-blue-100"><Mail className="w-3.5 h-3.5 text-blue-600" /></div>
                         <span className="text-xs font-bold text-slate-700">Email</span>
                    </div>
                    <div className="flex items-center gap-2">
                         <div className="p-1 rounded bg-purple-100"><Phone className="w-3.5 h-3.5 text-purple-600" /></div>
                         <span className="text-xs font-bold text-slate-700">Phone</span>
                    </div>
                    <div className="flex items-center gap-2">
                         <div className="p-1 rounded bg-orange-100"><MessageSquare className="w-3.5 h-3.5 text-orange-600" /></div>
                         <span className="text-xs font-bold text-slate-700">Live Chat</span>
                    </div>
                </div>
            )}, 
            other: { type: "custom", content: (
                <div className="flex flex-col gap-2.5 text-left w-fit mx-auto opacity-60 grayscale">
                    <div className="flex items-center gap-2">
                         <div className="p-1 rounded bg-slate-100"><Mail className="w-3.5 h-3.5 text-slate-400" /></div>
                         <span className="text-xs font-bold text-slate-600">Email</span>
                    </div>
                    <div className="flex items-center gap-2">
                         <div className="p-1 rounded bg-slate-100"><Phone className="w-3.5 h-3.5 text-slate-400" /></div>
                         <span className="text-xs font-bold text-slate-600">Phone</span>
                    </div>
                    <div className="flex items-center gap-2">
                         <div className="p-1 rounded bg-slate-100"><MessageSquare className="w-3.5 h-3.5 text-slate-400" /></div>
                         <span className="text-xs font-bold text-slate-600">Live Chat</span>
                    </div>
                </div>
            )} 
        },
      ]
    }
  ];

  const internalComparisonData = [
    {
        category: "Job Posting & Reach",
        rows: [
            { name: "45 Days Job Ad Validity", alacarte: true, basic: true, premium: true },
            { name: "Posting Multiple Platforms", alacarte: "logos", basic: "logos", premium: "logos" },
            { name: "Multiple Language Posting", sub: "English, Malay, Mandarin中文", alacarte: true, basic: true, premium: true },
            { name: "Featured Job", alacarte: "Add-on*", basic: false, premium: false },
            { name: "Premium Job Ad", alacarte: "Add-on*", basic: false, premium: "Free Upgrade" },
            { name: "Booster Plus", alacarte: false, basic: true, premium: true },
            { name: "Social Media Write Up", alacarte: false, basic: false, premium: "Add-on*" },
            { name: "Social Media Video Promote", alacarte: false, basic: false, premium: "Add-on*" },
        ]
    },
    {
        category: "Candidate Management & AI",
        rows: [
            { name: "AI-Recommendation Candidates", alacarte: true, basic: true, premium: true },
            { name: "AI Candidate Matching Score", alacarte: true, basic: true, premium: true },
            { name: "AI Job Description Builder", alacarte: true, basic: true, premium: true },
            { name: "Candidate Profiles", alacarte: false, basic: true, premium: true },
            { name: "Direct WhatsApp to Shortlisted Candidates", alacarte: false, basic: true, premium: true },
            { name: "Applied Candidate Notification Sent to WhatsApp", alacarte: true, basic: true, premium: true },
            { name: "ATS System Support", alacarte: true, basic: true, premium: true },
        ]
    },
    {
        category: "Company Branding",
        rows: [
            { name: "Free Company Page", alacarte: false, basic: true, premium: true },
            { name: "Enhance Your Brand with Company Photos", alacarte: false, basic: true, premium: true },
            { name: "Able to Add and Change Company Banner", alacarte: false, basic: true, premium: true },
            { name: "Company Page Consultation", alacarte: false, basic: false, premium: true },
            { name: "Post Your Company Description in Multiple Languages", alacarte: false, basic: false, premium: true },
        ]
    },
    {
        category: "Support",
        rows: [
            { name: "Customer Support", sub: "WhatsApp, Email, Phone", alacarte: true, basic: true, premium: true },
            { name: "Dedicated Sales Consultant", alacarte: true, basic: true, premium: true },
            { name: "Dedicated Hiring Consultant", alacarte: false, basic: false, premium: true },
        ]
    }
  ];

  const renderCell = (data: any) => {
      if (!data) return null;
      if (data.type === 'custom') return data.content;
      
      return (
          <div className="flex flex-col items-center justify-center gap-1">
              {data.type === 'check' && <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center"><Check className="w-3.5 h-3.5 text-green-600" /></div>}
              {data.type === 'cross' && <div className="w-6 h-6 bg-red-50 rounded-full flex items-center justify-center"><X className="w-3.5 h-3.5 text-red-500" /></div>}
              {data.type === 'text' && <span className={`text-sm font-bold ${data.highlight ? 'text-green-600' : 'text-slate-700'}`}>{data.value}</span>}
              {data.sub && <span className="text-[10px] font-medium text-slate-500 text-center leading-tight max-w-[120px]">{data.sub}</span>}
          </div>
      );
  };

  const renderInternalCell = (value: boolean | string) => {
      if (value === true) return <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mx-auto"><Check className="w-3.5 h-3.5 text-green-600" /></div>;
      if (value === false) return <div className="w-4 h-0.5 bg-slate-200 mx-auto rounded"></div>;
      if (value === "logos") return (
          <div className="flex items-center justify-center -space-x-2">
                <img src="https://files.ajobthing.com/assets/logo/maukerja/v6-logo-desktop.svg" className="w-8 h-8 rounded-full bg-white p-1 shadow-sm border border-slate-100 object-contain" title="Maukerja" />
                <img src="https://files.ajobthing.com/assets/logo/ricebowl/v6-logo-desktop.svg" className="w-8 h-8 rounded-full bg-white p-1 shadow-sm border border-slate-100 object-contain" title="Ricebowl" />
                <div className="w-8 h-8 rounded-full bg-white p-1.5 shadow-sm border border-slate-100 flex items-center justify-center" title="LinkedIn"><img src="https://files.ajobthing.com/assets/landing/ico-linkedin.svg" className="w-full h-full" /></div>
                <div className="w-8 h-8 rounded-full bg-white p-1.5 shadow-sm border border-slate-100 flex items-center justify-center" title="Facebook"><img src="https://files.ajobthing.com/assets/landing/ico-facebook.svg" className="w-full h-full" /></div>
                <div className="w-8 h-8 rounded-full bg-white p-1.5 shadow-sm border border-slate-100 flex items-center justify-center" title="Google"><img src="https://files.ajobthing.com/assets/landing/ico-google.svg" className="w-full h-full" /></div>
          </div>
      );
      return <span className={`text-xs font-bold ${value.includes("Free") ? "text-green-600" : "text-slate-500"}`}>{value}</span>;
  };

  const faqData = [
    {
        category: "Hiring Plans",
        questions: [
            {
                q: "How do I get started?",
                a: "If you already have an AJobThing account, log in to your account, visit the shop, and purchase a job ad there. If you're new to AJobThing, register a new account with us, and our hiring strategist will contact you to assist with your job ad purchase."
            },
            {
                q: "How much does it cost to post a job ad with AJobThing?",
                a: "Depending on the package you choose to meet your hiring needs. For specific job ad pricing information, please contact our sales team at +60186660801 or click on “log in” at the top right corner of this page."
            },
            {
                q: "Do you offer any additional services or features with job ad purchase?",
                a: "Yes, our job ad packages include free additional services and features. This includes AI candidate search, AI-recommended candidates, as well as social media shoutouts reaching up to 8.2 million followers. You’ll also get personal support from a dedicated hiring strategist and a customer success manager to ensure your hiring success."
            }
        ]
    },
    {
        category: "Our Products",
        questions: [
            {
                q: "On which social media platforms will the job ads be posted?",
                a: "Our job ads will be featured on five platforms: Ricebowl, Maukerja, Epicareer, and partner platforms such as LinkedIn and Google."
            },
            {
                q: "How long will the job ad be active?",
                a: "The job ad will run for 45 days, compared to the standard 30 days on other job platforms."
            },
            {
                q: "What’s the difference between Job Ad and Yearly Plan?",
                a: "The Job Ad is designed for quick visibility and flexible pricing, ideal for employers looking to attract candidates fast for immediate hiring needs. Meanwhile, the 12-Month Yearly Hiring Plan offers ongoing recruitment with added features like resume search, ad boosts, and social media promotion for better visibility and long-term success."
            }
        ]
    }
  ];

  // --- REUSABLE SECTIONS ---

  // 1. Benefits Section (AI Job Ad)
  const AiJobAdBenefits = () => (
    <div className="py-12 md:py-20">
        <div className="text-center mb-12">
            <span className="text-[#f7a022] font-bold tracking-widest uppercase text-sm mb-3 block">Features</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Benefits of <span className="text-[#f7a022]">AI Job Ad</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            {[
                { title: "Maximum Reach", desc: "Post once and get published on Maukerja, Ricebowl, and partner platforms like LinkedIn & Google.", icon: Globe },
                { title: "AI Smart Matching", desc: "Our AI engine identifies and invites the most qualified candidates to apply for your job instantly.", icon: Sparkles },
                { title: "Speedy Hiring", desc: "Get qualified applicants within 72 hours of posting your job advertisement.", icon: Zap }
            ].map((benefit, idx) => {
                const isAi = idx === 1; // 2nd item
                return (
                    <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:-translate-y-2 hover:shadow-2xl hover:border-orange-100 transition-all duration-300 group cursor-default">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                            isAi 
                                ? 'bg-indigo-50 text-indigo-600 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white'
                                : 'bg-orange-50 text-[#f7a022] group-hover:scale-110 group-hover:bg-[#f7a022] group-hover:text-white'
                        }`}>
                            <benefit.icon className="w-7 h-7" />
                        </div>
                        <h3 className={`text-xl font-bold mb-3 transition-colors ${
                            isAi 
                              ? 'text-slate-900 group-hover:text-indigo-600'
                              : 'text-slate-900 group-hover:text-[#f7a022]'
                        }`}>{benefit.title}</h3>
                        <p className="text-slate-500 leading-relaxed">{benefit.desc}</p>
                    </div>
                );
            })}
        </div>
    </div>
  );

  // 2. Custom Plan Section
  const CustomPlanSection = () => (
    <div className="bg-[#2d3243] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden group hover:scale-[1.01] hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-[#f7a022]/30 w-full">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#f7a022]/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 group-hover:bg-[#f7a022]/20 transition-all duration-500"></div>
        <Gem className="absolute -bottom-6 -right-6 w-40 h-40 text-white/5 rotate-12" />
        <div className="relative z-10 text-left">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-2">Need a Custom Plan?</h3>
            <p className="text-slate-300 text-lg">For large enterprises with high volume hiring needs, we offer tailored solutions.</p>
        </div>
        <Button className="!px-8 !py-4 !text-lg whitespace-nowrap relative z-10 shadow-lg shadow-black/20 group-hover:bg-white group-hover:text-[#2d3243] transition-colors">Contact Sales</Button>
    </div>
  );

  // 3. Comparison Table (AJobThing vs Others)
  const GeneralComparisonTable = () => (
    <section className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xl relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10">
            <div className="text-center mb-12">
               <span className="text-[#f7a022] font-bold tracking-widest uppercase text-sm mb-3 block">Why Choose Us</span>
               <h2 className="text-3xl font-black text-slate-900">AJobThing vs <span className="text-slate-400">Other Job Platform</span></h2>
            </div>
            
            <div className="overflow-x-auto rounded-xl bg-white/50 backdrop-blur-sm">
                <table className="w-full min-w-[700px] border-collapse">
                    <thead>
                        <tr>
                            <th className="w-[40%] bg-transparent"></th>
                            <th className="w-[30%] pb-6 px-4 relative">
                                <div className="bg-[#f7a022] text-white py-3 rounded-xl shadow-lg transform translate-y-0 relative z-10 w-full mx-auto">
                                    <div className="text-lg font-black">AJobThing</div>
                                </div>
                            </th>
                            <th className="w-[30%] pb-6 px-4">
                                <div className="bg-slate-100 text-slate-500 py-3 rounded-xl w-full mx-auto border border-slate-200">
                                    <div className="text-lg font-bold">Others</div>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {comparisonData.map((group, idx) => (
                            <React.Fragment key={idx}>
                                <tr>
                                    <td colSpan={3} className="pt-6 pb-3 pl-4">
                                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider flex items-center gap-2">
                                            <div className="w-6 h-px bg-slate-200"></div>
                                            {group.category}
                                        </h4>
                                    </td>
                                </tr>
                                {group.rows.map((row, rIdx) => (
                                    <tr key={rIdx} className="group hover:bg-slate-50 transition-colors">
                                        <td className="py-4 pr-4 pl-4">
                                            <div className="font-bold text-slate-700 text-sm group-hover:text-[#2d3243] transition-colors">{row.name}</div>
                                            {row.note && <div className="text-[10px] text-slate-400 mt-1 italic">{row.note}</div>}
                                        </td>
                                        <td className="py-4 px-4 text-center bg-[#fff8ef] group-hover:bg-[#fff4e0] transition-colors border-x border-[#f7a022]/10 relative">
                                            {renderCell(row.ajt)}
                                        </td>
                                        <td className="py-4 px-4 text-center text-slate-400">
                                            {renderCell(row.other)}
                                        </td>
                                    </tr>
                                ))}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </section>
  );

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      
      {/* Header */}
      <section className="pt-20 pb-12 px-6 text-center bg-white border-b border-slate-100 mb-12">
        
        {/* Product Category Tabs */}
        <div className="flex justify-center mb-10">
            <div className="inline-flex flex-wrap justify-center gap-1 sm:gap-2 bg-slate-100 p-1.5 rounded-full border border-slate-200 shadow-inner">
                {tabs.map(tab => (
                    <button
                        key={tab}
                        onClick={() => handleTabClick(tab)}
                        className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 ${
                            activeTab === tab 
                            ? 'bg-white text-[#f7a022] shadow-md transform scale-105' 
                            : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
        </div>

        {/* Dynamic Headlines based on Tab and Plan Type */}
        <h1 className="text-4xl md:text-5xl font-black text-[#2d3243] mb-6 max-w-4xl mx-auto leading-tight">
          {isAiJobAd && (planType === 'yearly' ? '12-Month Yearly Hiring Plan' : 'Ala Carte')}
          {isCandidateSearch && 'Candidate Profile'}
          {isMassHiring && 'Bulk Hiring'}
          {isPackageComparison && 'Job Ad Package Comparison'}
          {!isAiJobAd && !isCandidateSearch && !isMassHiring && !isPackageComparison && <span>Simple, Transparent <span className="text-[#f7a022]">Pricing</span></span>}
        </h1>
        <div className="text-xl text-slate-500 max-w-3xl mx-auto mb-8 leading-relaxed">
          {isAiJobAd && (
             planType === 'yearly' 
               ? 'Enjoy year-round access to top talent with the 12-Month Yearly Hiring Plan, helping you attract and secure the best candidates for successful hires and business growth.'
               : 'Boost your visibility with the Instant Job Ad, attracting qualified candidates fast for immediate hiring success.'
          )}
          {isCandidateSearch && 'Discover over 5 million talents and find top matches for your needs. Unlock details, download resumes, and connect with the right candidates today!'}
          {isMassHiring && (
            <div className="flex flex-col items-center">
                <span className="mb-2">Our hiring campaign service SHOUTOUT helps companies fill multiple vacancies in a short time.</span>
                <div className="relative group inline-flex items-center gap-1.5 cursor-help bg-blue-50 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors">
                   <Info className="w-4 h-4 text-blue-600" />
                   <span className="text-sm font-bold text-blue-600">Learn More</span>
                   <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 p-5 bg-slate-800 text-white text-xs text-left font-normal leading-relaxed rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform translate-y-2 group-hover:translate-y-0">
                      SHOUTOUT is a modernized marketing tool for bulk hiring ({'>'}20 vacancies) using digital recruitment campaigns for higher success rate. SHOUTOUT guarantees show-ups to your interviews based on your requirements.
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-8 border-transparent border-b-slate-800"></div>
                   </div>
                </div>
            </div>
          )}
          {isPackageComparison && 'Discover the benefits tailored to your hiring needs. Compare our job ad packages and choose the one that fits your goals best.'}
          {!isAiJobAd && !isCandidateSearch && !isMassHiring && !isPackageComparison && 'Choose the plan that fits your hiring needs. No hidden fees, cancel anytime.'}
        </div>

        {/* Switcher: AI Yearly Plan vs Ala Carte (Only for AI JOB AD) */}
        {isAiJobAd && (
            <div className="flex items-center justify-center gap-4">
               <span className={`text-sm font-bold ${planType === 'yearly' ? 'text-[#2d3243]' : 'text-slate-400'}`}>AI Yearly Plan</span>
               <button 
                 onClick={() => setPlanType(prev => prev === 'yearly' ? 'alacarte' : 'yearly')}
                 className="w-16 h-8 bg-[#f7a022] rounded-full p-1 relative transition-colors duration-300 cursor-pointer"
               >
                 <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${planType === 'alacarte' ? 'translate-x-8' : 'translate-x-0'}`}></div>
               </button>
               <span className={`text-sm font-bold ${planType === 'alacarte' ? 'text-[#2d3243]' : 'text-slate-400'}`}>
                  Ala Carte
               </span>
            </div>
        )}
      </section>

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="container mx-auto px-4 max-w-[1400px] space-y-16">
         
         {/* TAB CONTENT: AI JOB AD */}
         {isAiJobAd && (
            <>
               <div className={`grid gap-6 items-start ${planType === 'yearly' ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 max-w-5xl mx-auto'}`}>
                  {/* ... Pricing Cards Code ... */}
                  {planType === 'yearly' && (
                     <>
                        {/* Standard */}
                        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative group hover:-translate-y-1">
                           <div className="mb-6 text-center">
                              <h3 className="text-2xl font-black text-slate-900 mb-3">Standard</h3>
                              <div className="border border-slate-100 bg-slate-50 rounded-xl p-4 w-full">
                                 <div className="flex items-center justify-center gap-2 font-black text-xl">
                                    <Sparkles className="w-5 h-5 text-indigo-600 fill-current/20" /> 
                                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">6 Job Ads</span>
                                 </div>
                                 <div className="mt-2">
                                    <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-bold px-3 py-1 rounded-lg uppercase tracking-wide shadow-sm inline-block transform hover:scale-105 transition-transform cursor-default">Buy 3 Free 3</span>
                                 </div>
                              </div>
                           </div>
                           <Button className="w-full py-2.5 mb-6 !bg-[#f7a022] hover:!bg-[#e08e1a] text-sm">Buy Now</Button>
                           <div className="flex-grow">
                              <div className="bg-slate-50/50 rounded-lg p-3 mb-3 border border-slate-100">
                                 <FeatureRow label="AI Instant Match" value="Up to 180" subValue="30 Per Job Ad" icon={Sparkles} iconClassName="text-indigo-600" tooltip="AI will reach out to up to 50 matching candidates right after your job is posted and check their interest in your job." />
                                 <FeatureRow label="AI Daily Talent Recommendations" value="Up to 12" subValue="Up to 2 Daily / Job Ad" icon={Sparkles} iconClassName="text-indigo-600" tooltip="New matches daily. Get up to 10 fresh Recommended Candidates every morning, with alerts sent straight to your inbox." />
                                 <FeatureRow label="AI “Open to Explore” Detector" value="Up to 12" subValue="Up to 2 Daily / Job Ad" icon={Sparkles} iconClassName="text-indigo-600" tooltip="Our AI spots NEW Recommended Candidates who are actively exploring jobs like yours and surfaces them daily." />
                                 <FeatureRow label="AI Post Job Assistant" value={<span className="text-slate-900 font-bold">Included</span>} icon={Sparkles} iconClassName="text-indigo-600" tooltip="Our Integrated AI with the Post Job function will help you write and publish your job ad." />
                                 <FeatureRow label="Plan Validity" value="12 Months" />
                                 <FeatureRow label="Job Ad Validity" value="45 Days" />
                                 <FeatureRow label="Booster Plus" value="6" tooltip="Your job ad will auto-bump to the top for maximum visibility." />
                                 <FeatureRow label="Free Candidate Profile" value="60" tooltip="Get FREE “Candidate Profiles” that can be used to unlock your Recommended Candidates." />
                                 <FeatureRow label="Company Branding" value="Brand Basic" tooltip="Showcase your company culture and attract top talent with a branded profile page." />
                              </div>
                              <div className="space-y-1 px-1">
                                 <FeatureBool label={<span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#f7a022] to-orange-600">AJobThing Care</span>} tooltip="AJobThing Care provides a combination of performance protection, expert guidance, and exclusive support when you post job ads" />
                                 <FeatureBool label="ATS System Support" />
                                 <FeatureBool label="Dedicated Sales Consultant" />
                                 <FeatureBool label={<div className="flex flex-col sm:flex-row sm:items-center gap-1.5"><span>Multiple Platforms</span><div className="flex items-center gap-1"><span className="text-[10px] text-slate-400">+ Partners</span></div></div>} />
                                 <FeatureBool label="Post in En, BM, Mandarin" />
                                 <FeatureBool label="Support: WA, Email, Call, Chat" />
                              </div>
                           </div>
                        </div>
                        {/* Professional */}
                        <div className="bg-blue-50/30 rounded-2xl p-5 border-2 border-[#6366f1] shadow-xl relative transform md:-translate-y-4 flex flex-col h-full z-10">
                           <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#ef4444] text-white px-3 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider shadow-sm">Best Deal!</div>
                           <div className="mb-6 text-center mt-1">
                              <h3 className="text-2xl font-black text-slate-900 mb-3">Professional</h3>
                              <div className="border border-blue-100 bg-white rounded-xl p-4 w-full shadow-sm">
                                 <div className="flex items-center justify-center gap-2 font-black text-xl"><Sparkles className="w-5 h-5 text-indigo-600 fill-current/20" /> <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">12 Job Ads</span></div>
                                 <div className="mt-2"><span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-bold px-3 py-1 rounded-lg uppercase tracking-wide shadow-sm inline-block transform hover:scale-105 transition-transform cursor-default">Buy 6 Free 6</span></div>
                              </div>
                           </div>
                           <Button className="w-full py-2.5 mb-6 !bg-[#ef4444] hover:!bg-[#e08e1a] shadow-lg shadow-red-500/20 text-sm">Buy Now</Button>
                           <div className="flex-grow">
                              <div className="bg-white rounded-lg p-3 mb-3 border border-blue-100">
                                 <FeatureRow label="AI Instant Match" value="Up to 360" subValue="30 Per Job Ad" icon={Sparkles} iconClassName="text-indigo-600" tooltip="AI will reach out to up to 50 matching candidates right after your job is posted and check their interest in your job." />
                                 <FeatureRow label="AI Daily Talent Recommendations" value="Up to 24" subValue="Up to 2 Daily / Job Ad" icon={Sparkles} iconClassName="text-indigo-600" tooltip="New matches daily. Get up to 10 fresh Recommended Candidates every morning, with alerts sent straight to your inbox." />
                                 <FeatureRow label="AI “Open to Explore” Detector" value="Up to 24" subValue="Up to 2 Daily / Job Ad" icon={Sparkles} iconClassName="text-indigo-600" tooltip="Our AI spots NEW Recommended Candidates who are actively exploring jobs like yours and surfaces them daily." />
                                 <FeatureRow label="AI Post Job Assistant" value={<span className="text-slate-900 font-bold">Included</span>} icon={Sparkles} iconClassName="text-indigo-600" tooltip="Our Integrated AI with the Post Job function will help you write and publish your job ad." />
                                 <FeatureRow label="Plan Validity" value="12 Months" />
                                 <FeatureRow label="Job Ad Validity" value="45 Days" />
                                 <FeatureRow label="Booster Plus" value="12" tooltip="Your job ad will auto-bump to the top for maximum visibility." />
                                 <FeatureRow label="Free Candidate Profile" value="120" tooltip="Get FREE “Candidate Profiles” that can be used to unlock your Recommended Candidates." />
                                 <FeatureRow label="Company Branding" value="Brand Basic" tooltip="Showcase your company culture and attract top talent with a branded profile page." />
                              </div>
                              <div className="space-y-1 px-1">
                                 <FeatureBool label={<span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#f7a022] to-orange-600">AJobThing Care</span>} tooltip="AJobThing Care provides a combination of performance protection, expert guidance, and exclusive support when you post job ads" />
                                 <FeatureBool label="ATS System Support" />
                                 <FeatureBool label="Dedicated Sales Consultant" />
                                 <FeatureBool label={<div className="flex flex-col sm:flex-row sm:items-center gap-1.5"><span>Multiple Platforms</span><div className="flex items-center gap-1"><span className="text-[10px] text-slate-400">+ Partners</span></div></div>} />
                                 <FeatureBool label="Post in En, BM, Mandarin" />
                                 <FeatureBool label="Support: WA, Email, Call, Chat" />
                              </div>
                           </div>
                        </div>
                        {/* Enhanced */}
                        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative group hover:-translate-y-1">
                           <div className="mb-6 text-center">
                              <h3 className="text-2xl font-black text-slate-900 mb-3">Enhanced</h3>
                              <div className="border border-slate-100 bg-slate-50 rounded-xl p-4 w-full">
                                 <div className="flex items-center justify-center gap-2 font-black text-xl"><Sparkles className="w-5 h-5 text-indigo-600 fill-current/20" /> <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">24 Job Ads</span></div>
                                 <div className="mt-2"><span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-bold px-3 py-1 rounded-lg uppercase tracking-wide shadow-sm inline-block transform hover:scale-105 transition-transform cursor-default">Buy 12 Free 12</span></div>
                              </div>
                           </div>
                           <Button className="w-full py-2.5 mb-6 !bg-[#f7a022] hover:!bg-[#e08e1a] text-sm">Buy Now</Button>
                           <div className="flex-grow">
                              <div className="bg-slate-50/50 rounded-lg p-3 mb-3 border border-slate-100">
                                 <FeatureRow label="AI Instant Match" value="Up to 720" subValue="30 Per Job Ad" icon={Sparkles} iconClassName="text-indigo-600" tooltip="AI will reach out to up to 50 matching candidates right after your job is posted and check their interest in your job." />
                                 <FeatureRow label="AI Daily Talent Recommendations" value="Up to 48" subValue="Up to 2 Daily / Job Ad" icon={Sparkles} iconClassName="text-indigo-600" tooltip="New matches daily. Get up to 10 fresh Recommended Candidates every morning, with alerts sent straight to your inbox." />
                                 <FeatureRow label="AI “Open to Explore” Detector" value="Up to 48" subValue="Up to 2 Daily / Job Ad" icon={Sparkles} iconClassName="text-indigo-600" tooltip="Our AI spots NEW Recommended Candidates who are actively exploring jobs like yours and surfaces them daily." />
                                 <FeatureRow label="AI Post Job Assistant" value={<span className="text-slate-900 font-bold">Included</span>} icon={Sparkles} iconClassName="text-indigo-600" tooltip="Our Integrated AI with the Post Job function will help you write and publish your job ad." />
                                 <FeatureRow label="Plan Validity" value="12 Months" />
                                 <FeatureRow label="Job Ad Validity" value="45 Days" />
                                 <FeatureRow label="Booster Plus" value="24" tooltip="Your job ad will auto-bump to the top for maximum visibility." />
                                 <FeatureRow label="Free Candidate Profile" value="240" tooltip="Get FREE “Candidate Profiles” that can be used to unlock your Recommended Candidates." />
                                 <FeatureRow label="Company Branding" value="Brand Basic" tooltip="Showcase your company culture and attract top talent with a branded profile page." />
                              </div>
                              <div className="space-y-1 px-1">
                                 <FeatureBool label={<span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#f7a022] to-orange-600">AJobThing Care</span>} tooltip="AJobThing Care provides a combination of performance protection, expert guidance, and exclusive support when you post job ads" />
                                 <FeatureBool label="ATS System Support" />
                                 <FeatureBool label="Dedicated Sales Consultant" />
                                 <FeatureBool label={<div className="flex flex-col sm:flex-row sm:items-center gap-1.5"><span>Multiple Platforms</span><div className="flex items-center gap-1"><span className="text-[10px] text-slate-400">+ Partners</span></div></div>} />
                                 <FeatureBool label="Post in En, BM, Mandarin" />
                                 <FeatureBool label="Support: WA, Email, Call, Chat" />
                              </div>
                           </div>
                        </div>
                     </>
                  )}
                  {planType === 'alacarte' && (
                     <div className="col-span-1 md:col-span-3 bg-white rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 w-full">
                        <div className="grid md:grid-cols-12 gap-8 items-center">
                           <div className="md:col-span-4 flex flex-col items-center text-center h-full justify-center bg-slate-50/50 rounded-2xl p-6 border border-slate-100">
                              <h3 className="text-2xl font-black text-slate-900 mb-2">Pay Per Post</h3>
                              <p className="text-slate-500 text-sm mb-6">Perfect for urgent, one-off hiring needs.</p>
                              <div className="bg-white p-6 rounded-2xl border-2 border-indigo-100 shadow-sm w-full mb-8 relative overflow-hidden group hover:border-[#f7a022] transition-colors duration-300">
                                 <div className="absolute top-0 left-0 w-full h-1 bg-[#f7a022]"></div>
                                 <div className="flex flex-col items-center gap-2">
                                    <div className="p-3 bg-indigo-50 rounded-full text-indigo-600 mb-1 group-hover:scale-110 transition-transform"><Sparkles className="w-8 h-8" /></div>
                                    <span className="text-3xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">1 Job Ad</span>
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Single Posting</span>
                                 </div>
                              </div>
                              <Button className="w-full py-4 !text-lg !bg-[#f7a022] hover:!bg-[#e08e1a] shadow-lg shadow-orange-500/20">Buy Now</Button>
                           </div>
                           <div className="md:col-span-8">
                              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><span className="w-1 h-6 bg-[#f7a022] rounded-full"></span> What's Included</h4>
                              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                                 <div className="space-y-3">
                                    <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-100">
                                       <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">AI Capabilities</h5>
                                       <FeatureRow label="AI Instant Match" value="Up to 30 Profiles" icon={Sparkles} iconClassName="text-indigo-600" tooltip="AI will reach out to up to 50 matching candidates right after your job is posted and check their interest in your job." />
                                       <FeatureRow label="AI Daily Talent Recommendations" value="Up to 2 Daily" icon={Sparkles} iconClassName="text-indigo-600" tooltip="New matches daily. Get up to 10 fresh Recommended Candidates every morning, with alerts sent straight to your inbox." />
                                       <FeatureRow label="AI “Open to Explore” Detector" value="Up to 2 Daily" icon={Sparkles} iconClassName="text-indigo-600" tooltip="Our AI spots NEW Recommended Candidates who are actively exploring jobs like yours and surfaces them daily." />
                                       <FeatureRow label="AI Post Job Assistant" value={<span className="font-bold text-slate-900">Included</span>} icon={Sparkles} iconClassName="text-indigo-600" tooltip="Our Integrated AI with the Post Job function will help you write and publish your job ad." />
                                    </div>
                                    <div className="bg-slate-50/80 rounded-xl p-4 border border-slate-100">
                                       <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Validity & Credits</h5>
                                       <FeatureRow label="Plan Validity" value="10 Months" />
                                       <FeatureRow label="Job Ad Validity" value="45 Days" />
                                       <FeatureRow label="Free Candidate Profile" value="10 Credits" tooltip="Get FREE “Candidate Profiles” that can be used to unlock your Recommended Candidates." />
                                    </div>
                                 </div>
                                 <div className="space-y-2 pt-1 h-full flex flex-col justify-center">
                                    <div className="p-3">
                                       <FeatureBool label={<span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#f7a022] to-orange-600">AJobThing Care</span>} tooltip="AJobThing Care provides a combination of performance protection, expert guidance, and exclusive support when you post job ads" />
                                       <FeatureBool label="ATS System Support" />
                                       <FeatureBool label="Dedicated Sales Consultant" />
                                       <FeatureBool label="WhatsApp Notification on New Applicant" />
                                       <FeatureBool label="Post in En, BM, Mandarin" />
                                       <FeatureBool label="Support: WA, Email, Call, Live Chat" />
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  )}
               </div>
               
               {/* Custom Plan (Available for both plan types) */}
               <CustomPlanSection />

               {/* Benefits */}
               <AiJobAdBenefits />

               {/* General Comparison Table */}
               <GeneralComparisonTable />
            </>
         )}

         {/* TAB CONTENT: CANDIDATE SEARCH */}
         {isCandidateSearch && (
            <>
               <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-center">
                    {/* Card 1: 10 Profiles */}
                    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative group hover:-translate-y-1 text-center justify-between">
                        <div>
                            <div className="mb-6 mt-4">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Candidate Search 10</h3>
                                <div className="flex items-center justify-center gap-2 my-6 bg-slate-50 py-6 rounded-xl border border-slate-100">
                                    <span className="text-6xl font-black text-[#2d3243]">10</span>
                                    <span className="text-xs font-bold text-slate-500 text-left leading-tight uppercase tracking-wider">Candidate<br/>Profiles</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Button className="w-full py-5 !bg-[#2d3243] hover:!bg-slate-800 mb-6 text-xl">BUY</Button>
                            <div className="mt-auto pt-6 border-t border-slate-100">
                                <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 bg-slate-50 px-3 py-1 rounded-full">
                                    <Clock className="w-4 h-4 text-slate-400" />
                                    Package valid for <span className="text-slate-900 font-bold">1 Month</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: 30 Profiles (Recommended) */}
                    <div className="bg-white rounded-2xl p-6 border-2 border-[#f7a022] shadow-xl relative transform md:-translate-y-4 flex flex-col h-full z-10 text-center justify-between">
                         <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f7a022] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1"><Star className="w-3 h-3 fill-current" /> Recommended</div>
                        <div>
                            <div className="mb-6 mt-4">
                                <h3 className="text-2xl font-black text-slate-900 mb-2">Candidate Search 30</h3>
                                <div className="flex items-center justify-center gap-2 my-6 bg-orange-50 py-6 rounded-xl border border-orange-100">
                                    <span className="text-6xl font-black text-[#f7a022]">30</span>
                                    <span className="text-xs font-bold text-slate-500 text-left leading-tight uppercase tracking-wider">Candidate<br/>Profiles</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Button className="w-full py-5 !bg-[#f7a022] hover:!bg-[#e08e1a] shadow-lg shadow-orange-500/20 mb-6 text-xl">BUY</Button>
                            <div className="mt-auto pt-6 border-t border-slate-100">
                                <div className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 bg-orange-50 px-4 py-1.5 rounded-full border border-orange-100">
                                    <Clock className="w-4 h-4 text-[#f7a022]" />
                                    Package valid for <span className="text-[#f7a022]">6 Months</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 3: 100 Profiles */}
                    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full relative group hover:-translate-y-1 text-center justify-between">
                        <div>
                            <div className="mb-6 mt-4">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Candidate Search 100</h3>
                                <div className="flex items-center justify-center gap-2 my-6 bg-slate-50 py-6 rounded-xl border border-slate-100">
                                    <span className="text-6xl font-black text-[#2d3243]">100</span>
                                    <span className="text-xs font-bold text-slate-500 text-left leading-tight uppercase tracking-wider">Candidate<br/>Profiles</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Button className="w-full py-5 !bg-[#2d3243] hover:!bg-slate-800 mb-6 text-xl">BUY</Button>
                            <div className="mt-auto pt-6 border-t border-slate-100">
                                <div className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 bg-slate-50 px-3 py-1 rounded-full">
                                    <Clock className="w-4 h-4 text-slate-400" />
                                    Package valid for <span className="text-slate-900 font-bold">12 Months</span>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>

               {/* How It Works (ZigZag) */}
               <section className="py-12 bg-slate-50 overflow-hidden rounded-3xl">
                  <div className="container mx-auto px-4 max-w-6xl">
                      <div className="text-center mb-20">
                          <span className="text-[#f7a022] font-bold tracking-widest uppercase text-sm mb-3 block">Process</span>
                          <h2 className="text-3xl md:text-5xl font-black text-slate-900">How <span className="text-[#f7a022]">Candidate Search</span> Works</h2>
                      </div>
                      <div className="space-y-24">
                          {/* Step 1 */}
                          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 group">
                              <div className="w-full md:w-1/2 relative order-2 md:order-1">
                                   <div className="absolute inset-0 bg-[#f7a022]/10 rounded-3xl transform -rotate-3 scale-105 transition-transform group-hover:rotate-0 group-hover:scale-100 duration-500"></div>
                                   <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                                       <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Search Interface" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110" />
                                   </div>
                              </div>
                              <div className="w-full md:w-1/2 order-1 md:order-2">
                                   <div className="w-16 h-16 bg-[#f7a022] text-white rounded-2xl flex items-center justify-center text-2xl font-black mb-6 shadow-lg shadow-orange-500/30">01</div>
                                   <h3 className="text-3xl font-bold text-slate-900 mb-4">Search</h3>
                                   <p className="text-lg text-slate-500 leading-relaxed">Quickly search our database by Job Title or Skills to find the ideal candidate.</p>
                              </div>
                          </div>
                          {/* Step 2 */}
                          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 group">
                              <div className="w-full md:w-1/2 order-1">
                                   <div className="w-16 h-16 bg-[#2d3243] text-white rounded-2xl flex items-center justify-center text-2xl font-black mb-6 shadow-lg shadow-slate-500/30">02</div>
                                   <h3 className="text-3xl font-bold text-slate-900 mb-4">Unlock</h3>
                                   <p className="text-lg text-slate-500 leading-relaxed">Unlock profiles to review detailed information and ensure a perfect match for your requirements.</p>
                              </div>
                              <div className="w-full md:w-1/2 relative order-2">
                                   <div className="absolute inset-0 bg-blue-500/10 rounded-3xl transform rotate-3 scale-105 transition-transform group-hover:rotate-0 group-hover:scale-100 duration-500"></div>
                                   <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                                       <img src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Candidate Profile" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110" />
                                   </div>
                              </div>
                          </div>
                          {/* Step 3 */}
                          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 group">
                              <div className="w-full md:w-1/2 relative order-2 md:order-1">
                                   <div className="absolute inset-0 bg-green-500/10 rounded-3xl transform -rotate-3 scale-105 transition-transform group-hover:rotate-0 group-hover:scale-100 duration-500"></div>
                                   <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                                       <img src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Contact" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110" />
                                   </div>
                              </div>
                              <div className="w-full md:w-1/2 order-1 md:order-2">
                                   <div className="w-16 h-16 bg-[#f7a022] text-white rounded-2xl flex items-center justify-center text-2xl font-black mb-6 shadow-lg shadow-orange-500/30">03</div>
                                   <h3 className="text-3xl font-bold text-slate-900 mb-4">Contact</h3>
                                   <p className="text-lg text-slate-500 leading-relaxed">Contact your preferred candidates directly and schedule interviews effortlessly.</p>
                              </div>
                          </div>
                      </div>
                  </div>
               </section>
            </>
         )}

         {/* TAB CONTENT: MASS HIRING */}
         {isMassHiring && (
            <>
                <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 max-w-6xl mx-auto flex flex-col lg:flex-row">
                    {/* Video Side */}
                    <div className="lg:w-1/2 bg-slate-900 p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden text-white">
                        <div key={activeVideoIndex} className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay transition-opacity duration-1000" style={{ backgroundImage: `url(${massHiringVideos[activeVideoIndex].image})` }}></div>
                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div><span className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-400 text-xs font-bold uppercase tracking-wider mb-6 w-fit"><Check className="w-3 h-3" /> Proven Success</span><h3 className="text-3xl font-black mb-6 leading-tight">See how <span className="text-[#f7a022]">{massHiringVideos[activeVideoIndex].company}</span> hired efficiently.</h3></div>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video bg-black group cursor-pointer mb-8">
                                <img src={massHiringVideos[activeVideoIndex].image} alt="Video" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity" />
                                <div className="absolute inset-0 flex items-center justify-center"><div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center pl-1 border border-white/30"><Play className="w-8 h-8 text-white fill-current" /></div></div>
                            </div>
                            <div className="flex items-center justify-between"><div className="flex gap-2">{massHiringVideos.map((_, idx) => (<button key={idx} onClick={() => setActiveVideoIndex(idx)} className={`h-1.5 rounded-full transition-all duration-300 ${activeVideoIndex === idx ? 'w-8 bg-[#f7a022]' : 'w-1.5 bg-slate-700 hover:bg-slate-600'}`} />))}</div><div className="flex gap-2"><button onClick={prevVideo} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"><ChevronLeft className="w-5 h-5" /></button><button onClick={nextVideo} className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"><ChevronRight className="w-5 h-5" /></button></div></div>
                        </div>
                    </div>
                    {/* Form Side */}
                    <div className="lg:w-1/2 p-8 lg:p-12 bg-white flex flex-col justify-center">
                        <div className="mb-8"><div className="inline-block px-4 py-1.5 bg-red-50 text-red-600 border border-red-100 text-xs font-bold rounded-full mb-4 animate-pulse">LIMITED TIME PROMO</div><h3 className="text-2xl lg:text-3xl font-black text-slate-900 leading-tight mb-2">Get up to <span className="text-red-600">RM5,000 OFF</span></h3><p className="text-slate-500 text-lg">on Bulk Hiring Packages.</p></div>
                        <form className="space-y-4">
                            {/* Row 1: Name & Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Your Name</label>
                                    <input type="text" className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-[#f7a022] focus:ring-1 focus:ring-[#f7a022] transition-all text-sm" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Your Email</label>
                                    <input type="email" className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-[#f7a022] focus:ring-1 focus:ring-[#f7a022] transition-all text-sm" placeholder="john@company.com" />
                                </div>
                            </div>

                            {/* Row 2: Company Name & Contact */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                     <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Company Name</label>
                                     <input type="text" className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-[#f7a022] focus:ring-1 focus:ring-[#f7a022] transition-all text-sm" placeholder="Acme Corporation" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Contact Number</label>
                                    <input type="tel" className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-[#f7a022] focus:ring-1 focus:ring-[#f7a022] transition-all text-sm" placeholder="+60 12..." />
                                </div>
                            </div>

                            {/* Row 3: Size & Industry */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Company Size</label>
                                    <select className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-[#f7a022] focus:ring-1 focus:ring-[#f7a022] transition-all text-sm text-slate-600 appearance-none">
                                        <option value="" disabled selected>Select size</option>
                                        <option>1 - 10 Employees</option>
                                        <option>11 - 50 Employees</option>
                                        <option>51 - 200 Employees</option>
                                        <option>201 - 500 Employees</option>
                                        <option>500+ Employees</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Company Industry</label>
                                    <select className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-[#f7a022] focus:ring-1 focus:ring-[#f7a022] transition-all text-sm text-slate-600 appearance-none">
                                        <option value="" disabled selected>Select industry</option>
                                        <option>Technology / IT</option>
                                        <option>Manufacturing / Production</option>
                                        <option>Food & Beverage (F&B)</option>
                                        <option>Retail / Merchandise</option>
                                        <option>Healthcare / Medical</option>
                                        <option>Education / Training</option>
                                        <option>Finance / Banking</option>
                                        <option>Construction / Property</option>
                                        <option>Others</option>
                                    </select>
                                </div>
                            </div>
                            
                            {/* Row 4: Hiring Needs */}
                            <div>
                                <label className="block text-xs font-bold text-slate-500 uppercase mb-1.5">Hiring Needs</label>
                                <select className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-[#f7a022] focus:ring-1 focus:ring-[#f7a022] transition-all text-sm text-slate-600 appearance-none">
                                    <option value="" disabled selected>Select volume</option>
                                    <option>Less than 10 roles</option>
                                    <option>10 - 50 roles</option>
                                    <option>More than 50 roles</option>
                                </select>
                            </div>

                            <Button className="w-full py-4 !text-base font-bold mt-4 shadow-xl shadow-orange-500/20">Request Free Consultation</Button>
                        </form>
                    </div>
                </div>
                
                {/* Logos */}
                <div className="mt-20 max-w-6xl mx-auto px-4 text-center">
                     <h3 className="text-xl font-bold text-slate-400 uppercase tracking-widest mb-10">Trusted By Industry Leaders</h3>
                     <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
                        {shoutoutCustomers.map((c, i) => (
                            <div key={i} className="bg-white aspect-[3/2] rounded-xl border border-slate-100 flex items-center justify-center p-4 hover:shadow-lg hover:-translate-y-1 transition-all"><img src={c.url} alt={c.name} className="w-full h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} /></div>
                        ))}
                     </div>
                </div>
            </>
         )}

         {/* TAB CONTENT: PACKAGE COMPARISON */}
         {isPackageComparison && (
            <div id="comparison-table" className="col-span-1 md:col-span-3 mb-20 max-w-[1400px] mx-auto">
             <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden">
                 <div className="overflow-x-auto relative">
                    <table className="w-full min-w-[1000px] border-collapse relative">
                       <thead className="bg-white relative shadow-sm">
                          <tr>
                             <th className="w-[30%] text-left p-6 bg-slate-50 border-b border-slate-200 align-bottom">
                                 <h3 className="text-2xl font-black text-slate-800">Compare Plans</h3>
                                 <p className="text-sm text-slate-500 font-normal mt-1">Find the perfect fit.</p>
                             </th>
                             <th className="w-[20%] text-center p-4 border-b border-slate-200 align-bottom bg-slate-50/30">
                                <div className="text-lg font-bold text-slate-700 mb-2">Ala Carte</div>
                             </th>
                             <th className="w-[25%] text-center p-4 border-b border-blue-100 bg-blue-50/10 align-bottom">
                                <div className="text-lg font-bold text-blue-600 mb-2">Basic Yearly</div>
                             </th>
                             <th className="w-[25%] text-center p-4 border-b border-orange-100 bg-orange-50/20 align-bottom relative">
                                <div className="absolute top-0 left-0 w-full h-1 bg-[#f7a022]"></div>
                                <div className="inline-block bg-[#f7a022] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-b-md mb-2">Best Value</div>
                                <div className="text-xl font-black text-[#f7a022] mb-1">Premium Yearly</div>
                             </th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-slate-100">
                          {internalComparisonData.map((category, catIdx) => (
                             <React.Fragment key={catIdx}>
                                <tr><td colSpan={4} className="py-4 px-6 bg-slate-50 border-y border-slate-100 relative"><h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">{category.category}</h4></td></tr>
                                {category.rows.map((row, rowIdx) => (
                                   <tr key={rowIdx} className="group hover:bg-slate-50 transition-colors">
                                      <td className="py-4 px-6 align-middle border-r border-slate-50"><div className="flex flex-col"><span className="text-sm font-semibold text-slate-700">{row.name}</span>{row.sub && <span className="text-[10px] text-slate-400 mt-0.5">{row.sub}</span>}</div></td>
                                      <td className="py-4 px-4 align-middle text-center border-r border-slate-50">{renderInternalCell(row.alacarte)}</td>
                                      <td className="py-4 px-4 align-middle text-center border-r border-blue-50 bg-blue-50/5">{renderInternalCell(row.basic)}</td>
                                      <td className="py-4 px-4 align-middle text-center bg-orange-50/10 border-l border-orange-100/50">{renderInternalCell(row.premium)}</td>
                                   </tr>
                                ))}
                             </React.Fragment>
                          ))}
                       </tbody>
                    </table>
                 </div>
                 <div className="bg-slate-50 p-4 text-center border-t border-slate-200"><p className="text-xs text-slate-400 font-medium">* Terms and conditions apply.</p></div>
              </div>
            </div>
         )}

         {/* --- SHARED SECTIONS (FAQ & CTA) --- */}
         
         {/* FAQ (Visible for all except Mass Hiring) */}
         {!isMassHiring && (
             <div className="max-w-6xl mx-auto">
                 <div className="text-center mb-12">
                     <span className="text-slate-400 font-bold tracking-widest uppercase text-sm mb-3 block">Support</span>
                     <h3 className="text-3xl font-black text-slate-900 mb-4">Frequently Asked Questions</h3>
                 </div>
                 <div className="grid md:grid-cols-2 gap-8">
                     {faqData.map((section, idx) => (
                         <div key={idx} className="bg-white rounded-2xl p-2 border border-slate-200 shadow-lg h-full">
                             <div className="px-6 py-4 border-b border-slate-200/50"><h4 className="text-lg font-bold text-slate-800 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#f7a022]"></div>{section.category}</h4></div>
                             <div className="divide-y divide-slate-200/50 px-2">
                                 {section.questions.map((faq, fIdx) => {
                                     const itemIndex = `${idx}-${fIdx}`;
                                     const isOpen = openFaq === itemIndex;
                                     return (
                                         <div key={fIdx} className={`transition-all duration-300 ${isOpen ? 'bg-white shadow-sm rounded-xl my-2' : ''}`}>
                                             <button onClick={() => toggleFaq(itemIndex)} className="w-full text-left flex justify-between items-center gap-4 py-4 px-4 group"><span className={`text-sm font-bold transition-colors ${isOpen ? 'text-[#f7a022]' : 'text-slate-700 group-hover:text-slate-900'}`}>{faq.q}</span><span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-orange-100 rotate-180' : 'bg-slate-200 group-hover:bg-slate-300'}`}>{isOpen ? <ChevronUp className="w-4 h-4 text-[#f7a022]" /> : <ChevronDown className="w-4 h-4 text-slate-600" />}</span></button>
                                             <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}><p className="text-sm text-slate-500 leading-relaxed px-4 pl-4 border-l-2 border-[#f7a022] ml-4">{faq.a}</p></div>
                                         </div>
                                     );
                                 })}
                             </div>
                         </div>
                     ))}
                 </div>
             </div>
         )}

         {/* Final CTA (Always Visible) */}
         <div className="relative overflow-hidden rounded-3xl bg-[#2d3243] text-center p-12 md:p-24 shadow-2xl mx-auto max-w-6xl border-4 border-white ring-1 ring-slate-200">
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0"><div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f7a022]/20 rounded-full blur-[100px] transform translate-x-1/2 -translate-y-1/2"></div><div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] transform -translate-x-1/2 translate-y-1/2"></div></div>
              <div className="relative z-10 flex flex-col items-center">
                  <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight">Start Hiring with Us Now!</h2>
                  <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="!px-12 !py-5 !text-xl !bg-[#f7a022] hover:!bg-[#e08e1a] shadow-xl shadow-orange-500/20">Get Best Price!</Button>
                  </div>
              </div>
         </div>

      </div>
    </div>
  );
};