import React, { useState, useEffect, useRef } from 'react';
import { Star, Zap, Play, Rocket, UserCheck, Send, Edit, Search, ShieldCheck, FilePlus, Sparkles, CheckCircle, Plus, Minus } from 'lucide-react';
import Button from './Button';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}

// --- Helper Component for Scroll Animations ---
const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ children, className = "", delay = 0, direction = 'up' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 } // Trigger when 15% visible
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate-x-0 translate-y-0 opacity-100';
    switch (direction) {
        case 'up': return 'translate-y-12 opacity-0';
        case 'left': return '-translate-x-12 opacity-0';
        case 'right': return 'translate-x-12 opacity-0';
        default: return 'translate-y-12 opacity-0';
    }
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${getTransform()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const AiJobAd: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const faqs = [
    { 
        q: "What is AI Job Ad?", 
        a: "AI Job Ad is a smart recruitment tool that helps you hire faster. It uses AI to write your job ads, match you with the right candidates instantly, and even reach out to them on your behalf — so you can hire in just 72 hours." 
    },
    { 
        q: "How does AI Instant Match work?", 
        a: "The moment you post a job, AI scans for qualified candidates and automatically reaches out to them, so you don't waste time waiting for applications." 
    },
    { 
        q: "What is the AI Job Post Assistant?", 
        a: "It's an AI-powered helper that writes and optimizes your job ads for better performance. With just a few clicks, your job post is ready and published." 
    },
    { 
        q: "What is the AI 'Open to Explore' Detector?", 
        a: "This feature identifies new candidates who are actively looking for opportunities like yours. The system updates daily, so you always see fresh and relevant talent." 
    },
    { 
        q: "What is AJobThing Care?", 
        a: "It's our dedicated support service that ensures your job ad package performs well. If you face issues, our team is ready to step in and help." 
    },
    { 
        q: "How much does it cost?", 
        a: "Right now, we're offering an exclusive launch discount of 80% OFF, so you can try AI Job Ad at a fraction of the usual cost." 
    },
    { 
        q: "Is there any risk if it doesn't work for me?", 
        a: "No. With AJobThing Care, you're fully covered. If something doesn't work as expected, our support team will provide solutions or replacements." 
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-gradient-to-b from-orange-50 via-white to-slate-50 text-center py-20 lg:py-28 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-[100px] -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[100px] translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl container mx-auto px-6 relative z-10">
          
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-black leading-tight text-[#2d3243] mb-6">
            Hiring Too Slow? <br className="hidden md:block" />
            <span className="text-[#f7a022]">Let AI Do the Work.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Designed to save your time and connect you with the right talent – fast.
          </p>
          
          {/* Timer Pill */}
          <div className="mb-8 animate-bounce-slow">
            <div className="inline-flex items-center gap-3 bg-[#2d3243] text-white text-lg md:text-xl font-semibold rounded-full py-3 px-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-4 border-white/50 ring-2 ring-slate-100">
               <span>🔥</span>
               <span>80% OFF ends in</span>
               <span className="font-mono font-bold tracking-wider text-[#f7a022]">13:42:28</span>
            </div>
          </div>
          
          {/* Rating */}
          <p className="text-slate-500 mt-4 text-base font-bold flex items-center justify-center gap-2">
            <div className="flex text-[#f7a022]">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            4.8 rating from 1,300+ employers
          </p>
          
          {/* Video Container */}
          <div className="mt-16 relative max-w-5xl mx-auto group">
             <div className="absolute -inset-4 bg-gradient-to-r from-[#f7a022] to-pink-500 rounded-[2rem] opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500"></div>
             <div className="relative rounded-2xl shadow-2xl overflow-hidden border-4 border-white aspect-video bg-black">
                <iframe 
                    className="w-full h-full" 
                    src="https://www.youtube.com/embed/3OeDp3ixieo?autoplay=1&mute=1&loop=1&playlist=3OeDp3ixieo" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                ></iframe>
                {/* Overlay for interaction hint if needed, or remove if iframe has controls */}
             </div>
          </div>
          
          {/* CTA Button */}
          <div className="mt-12">
            <Button className="!px-10 !py-5 !text-xl !bg-[#f7a022] hover:!bg-[#e08e1a] shadow-xl shadow-orange-500/30 hover:-translate-y-1 transform transition-all mx-auto">
                Get 80% OFF Today Only!
            </Button>
            <p className="text-xs text-slate-400 mt-4">No credit card required for consultation.</p>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: Trusted Employers --- */}
      <section className="py-16 bg-white border-b border-slate-100">
        <RevealOnScroll className="max-w-[1400px] container mx-auto px-4 md:px-8 text-center">
            {/* Updated Title Style */}
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-14">Trusted by Malaysia's Top Employers</h3>
            
            {/* Desktop View - Larger Logos, Flex Wrap for Better Layout */}
            <div className="hidden md:block w-full">
                <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-16 opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                    <img src="https://www.maukerja.my/mkt/images/mkrb-companies/watsons.png" alt="Watsons" className="h-20 w-auto object-contain hover:scale-110 transition-transform" />
                    <img src="https://www.maukerja.my/mkt/images/mkrb-companies/burgerking.png" alt="Burger King" className="h-20 w-auto object-contain hover:scale-110 transition-transform" />
                    <img src="https://www.maukerja.my/mkt/images/mkrb-companies/starbucks.png" alt="Starbucks" className="h-20 w-auto object-contain hover:scale-110 transition-transform" />
                    <img src="https://www.maukerja.my/mkt/images/mkrb-companies/kfc.png" alt="KFC" className="h-20 w-auto object-contain hover:scale-110 transition-transform" />
                    <img src="https://www.maukerja.my/mkt/images/mkrb-companies/shopee.png" alt="Shopee" className="h-20 w-auto object-contain hover:scale-110 transition-transform" />
                    <img src="https://www.maukerja.my/mkt/images/mkrb-companies/grab.png" alt="Grab" className="h-20 w-auto object-contain hover:scale-110 transition-transform" />
                    <img src="https://www.maukerja.my/mkt/images/mkrb-companies/mcd.png" alt="McDonald's" className="h-20 w-auto object-contain hover:scale-110 transition-transform" />
                    <img src="https://www.maukerja.my/mkt/images/mkrb-companies/lazada.png" alt="Lazada" className="h-20 w-auto object-contain hover:scale-110 transition-transform" />
                </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden overflow-x-auto no-scrollbar pb-4">
                <div className="flex justify-start items-center gap-x-8 min-w-max px-4">
                    <img src="https://www.maukerja.my/mkt/images/mkrb-companies/watsons.png" alt="Watsons" className="h-12 w-auto object-contain opacity-80" />
                    <img src="https://www.maukerja.my/mkt/images/mkrb-companies/burgerking.png" alt="Burger King" className="h-12 w-auto object-contain opacity-80" />
                    <img src="https://www.maukerja.my/mkt/images/mkrb-companies/starbucks.png" alt="Starbucks" className="h-12 w-auto object-contain opacity-80" />
                    <img src="https://www.maukerja.my/mkt/images/mkrb-companies/kfc.png" alt="KFC" className="h-12 w-auto object-contain opacity-80" />
                    <img src="https://www.maukerja.my/mkt/images/mkrb-companies/shopee.png" alt="Shopee" className="h-12 w-auto object-contain opacity-80" />
                    <img src="https://www.maukerja.my/mkt/images/mkrb-companies/grab.png" alt="Grab" className="h-12 w-auto object-contain opacity-80" />
                    <img src="https://www.maukerja.my/mkt/images/mkrb-companies/mcd.png" alt="McDonald's" className="h-12 w-auto object-contain opacity-80" />
                    <img src="https://www.maukerja.my/mkt/images/mkrb-companies/lazada.png" alt="Lazada" className="h-12 w-auto object-contain opacity-80" />
                </div>
            </div>
        </RevealOnScroll>
      </section>

      {/* --- SECTION 3: Stop Wasting Time --- */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl container mx-auto px-6 text-center">
            <RevealOnScroll>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
                    Stop Wasting Time. <span className="text-[#f7a022]">Start Hiring Smarter.</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-500 mt-3 max-w-3xl mx-auto leading-relaxed">
                    AI Job Ad eliminates the biggest frustrations in recruitment, so you can focus on what matters: finding the perfect hire.
                </p>
            </RevealOnScroll>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {/* Card 1 - Rocket Icon */}
                <RevealOnScroll delay={100} className="h-full">
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hover:-translate-y-2 transition-all duration-300 group cursor-default h-full">
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 text-[#f7a022] w-24 h-24 rounded-full inline-flex items-center justify-center mb-6 group-hover:from-[#f7a022] group-hover:to-orange-500 group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-orange-500/30 ring-4 ring-orange-50/50">
                            <Rocket className="w-12 h-12 fill-current" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#f7a022] transition-colors">Tired of waiting weeks to hire?</h3>
                        <p className="text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                            AI reduces hiring time to just <span className="font-bold text-[#f7a022]">72 hours</span> by instantly matching you with the best candidates.
                        </p>
                    </div>
                </RevealOnScroll>

                {/* Card 2 - UserCheck Icon */}
                <RevealOnScroll delay={300} className="h-full">
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hover:-translate-y-2 transition-all duration-300 group cursor-default h-full">
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 text-[#f7a022] w-24 h-24 rounded-full inline-flex items-center justify-center mb-6 group-hover:from-[#f7a022] group-hover:to-orange-500 group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-orange-500/30 ring-4 ring-orange-50/50">
                            <UserCheck className="w-12 h-12 fill-current" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#f7a022] transition-colors">Overwhelmed by irrelevant resumes?</h3>
                        <p className="text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                            Our AI filters and contacts only <span className="font-bold text-[#f7a022]">qualified, interested candidates</span>, saving you hours of screening.
                        </p>
                    </div>
                </RevealOnScroll>

                {/* Card 3 - Send Icon */}
                <RevealOnScroll delay={500} className="h-full">
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hover:-translate-y-2 transition-all duration-300 group cursor-default h-full">
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 text-[#f7a022] w-24 h-24 rounded-full inline-flex items-center justify-center mb-6 group-hover:from-[#f7a022] group-hover:to-orange-500 group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-orange-500/30 ring-4 ring-orange-50/50">
                            <Send className="w-12 h-12 fill-current" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#f7a022] transition-colors">Struggling to reach applicants?</h3>
                        <p className="text-slate-500 leading-relaxed group-hover:text-slate-600 transition-colors">
                            AI reaches out <span className="font-bold text-[#f7a022]">automatically via WhatsApp & SMS</span> before you even open your inbox.
                        </p>
                    </div>
                </RevealOnScroll>
            </div>

            <div className="mt-16 flex justify-center">
                 <Button className="!px-10 !py-4 !text-lg !bg-[#f7a022] hover:!bg-[#e08e1a] shadow-lg shadow-orange-500/30 hover:scale-105 transform transition-all">Start Hiring Smarter</Button>
            </div>
        </div>
      </section>

      {/* --- SECTION 4: How AI Job Ad Works --- */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Image Side - HR Illustration with Feature Icons */}
                <RevealOnScroll direction="left" delay={0} className="relative flex justify-center items-center py-10 lg:py-0">
                    
                    {/* Main Image Container */}
                    <div className="relative z-10 w-full max-w-lg">
                        <div className="relative">
                            {/* Original Illustration (Frame Removed) */}
                            <img src="https://files.ajobthing.com/assets/images/ai-job-ad-recruitment-illustration.png" alt="HR using AI Dashboard" className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-700 drop-shadow-2xl" />
                        </div>

                        {/* Floating Feature Icons */}
                        
                        {/* 1. AI Instant Match (Zap) */}
                        <div className="absolute -left-4 md:-left-8 top-8 z-20 animate-float-slow" style={{ animationDelay: '0s' }}>
                            <div className="bg-white p-3 rounded-xl shadow-lg flex items-center gap-3 transform -rotate-2 hover:rotate-0 transition-all duration-300 border border-slate-50">
                                <div className="bg-orange-100 p-2 rounded-lg text-[#f7a022] shadow-sm"><Zap className="w-5 h-5" /></div>
                                <div>
                                    <div className="text-xs font-bold text-slate-800">AI Instant Match</div>
                                    <div className="text-[10px] text-slate-500 font-medium">Auto-connect</div>
                                </div>
                            </div>
                        </div>

                        {/* 2. Open to Explore (Search) */}
                        <div className="absolute -right-4 md:-right-8 top-16 z-20 animate-float-slow" style={{ animationDelay: '1.5s' }}>
                            <div className="bg-white p-3 rounded-xl shadow-lg flex items-center gap-3 transform rotate-3 hover:rotate-0 transition-all duration-300 border border-slate-50">
                                <div className="bg-blue-100 p-2 rounded-lg text-blue-600 shadow-sm"><Search className="w-5 h-5" /></div>
                                <div>
                                    <div className="text-xs font-bold text-slate-800">Open to Explore</div>
                                    <div className="text-[10px] text-slate-500 font-medium">Detector Active</div>
                                </div>
                            </div>
                        </div>

                        {/* 3. Job Post Assistant (Edit) */}
                        <div className="absolute -left-2 md:-left-6 bottom-20 z-20 animate-float-slow" style={{ animationDelay: '3s' }}>
                            <div className="bg-white p-3 rounded-xl shadow-lg flex items-center gap-3 transform rotate-1 hover:rotate-0 transition-all duration-300 border border-slate-50">
                                <div className="bg-purple-100 p-2 rounded-lg text-purple-600 shadow-sm"><Edit className="w-5 h-5" /></div>
                                <div>
                                    <div className="text-xs font-bold text-slate-800">Job Assistant</div>
                                    <div className="text-[10px] text-slate-500 font-medium">Optimized</div>
                                </div>
                            </div>
                        </div>

                        {/* 4. AJobThing Care (Shield) */}
                        <div className="absolute -right-2 md:-right-6 bottom-8 z-20 animate-float-slow" style={{ animationDelay: '2s' }}>
                             <div className="bg-white p-3 rounded-xl shadow-lg flex items-center gap-3 transform -rotate-2 hover:rotate-0 transition-all duration-300 border border-slate-50">
                                <div className="bg-green-100 p-2 rounded-lg text-green-600 shadow-sm"><ShieldCheck className="w-5 h-5" /></div>
                                <div>
                                    <div className="text-xs font-bold text-slate-800">AJobThing Care</div>
                                    <div className="text-[10px] text-slate-500 font-medium">Fully Covered</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </RevealOnScroll>
                
                {/* Content Side */}
                <div>
                    <RevealOnScroll direction="right" delay={200}>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">How Our AI Job Ad Works For You</h2>
                        <p className="text-lg text-slate-600 mt-4 mb-10 leading-relaxed">
                            Our AI-powered features are designed to automate and accelerate your hiring process from start to finish.
                        </p>
                    </RevealOnScroll>
                    <div className="space-y-8">
                        <RevealOnScroll direction="up" delay={300}>
                            <div className="flex items-start space-x-4 group">
                                <div className="bg-orange-100 text-[#f7a022] p-3 rounded-lg mt-1 flex-shrink-0 group-hover:bg-[#f7a022] group-hover:text-white transition-colors duration-300">
                                    <Zap className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 group-hover:text-[#f7a022] transition-colors">AI Instant Match</h4>
                                    <p className="text-slate-600 leading-relaxed">AI reaches out to qualified candidates the moment your job is posted.</p>
                                </div>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll direction="up" delay={400}>
                            <div className="flex items-start space-x-4 group">
                                <div className="bg-orange-100 text-[#f7a022] p-3 rounded-lg mt-1 flex-shrink-0 group-hover:bg-[#f7a022] group-hover:text-white transition-colors duration-300">
                                    <Edit className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 group-hover:text-[#f7a022] transition-colors">AI Job Post Assistant</h4>
                                    <p className="text-slate-600 leading-relaxed">AI helps you write and publish the perfect job ad effortlessly.</p>
                                </div>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll direction="up" delay={500}>
                            <div className="flex items-start space-x-4 group">
                                <div className="bg-orange-100 text-[#f7a022] p-3 rounded-lg mt-1 flex-shrink-0 group-hover:bg-[#f7a022] group-hover:text-white transition-colors duration-300">
                                    <Search className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 group-hover:text-[#f7a022] transition-colors">AI 'Open to Explore' Detector</h4>
                                    <p className="text-slate-600 leading-relaxed">AI finds new candidates actively looking for roles like yours—updated daily.</p>
                                </div>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll direction="up" delay={600}>
                            <div className="flex items-start space-x-4 group">
                                <div className="bg-orange-100 text-[#f7a022] p-3 rounded-lg mt-1 flex-shrink-0 group-hover:bg-[#f7a022] group-hover:text-white transition-colors duration-300">
                                    <ShieldCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 group-hover:text-[#f7a022] transition-colors">AJobThing Care</h4>
                                    <p className="text-slate-600 leading-relaxed">Get dedicated support and service coverage for your job ad package.</p>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                    <RevealOnScroll delay={700}>
                        <div className="mt-12 text-center lg:text-left">
                            <Button className="!px-8 !py-4 !text-lg !bg-[#f7a022] hover:!bg-[#e08e1a] shadow-lg shadow-orange-500/30">Automate My Hiring</Button>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </div>
      </section>

      {/* --- SECTION 5: How It Works --- */}
      <section className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#f7a022_1px,transparent_1px)] [background-size:20px_20px]"></div>

        <div className="max-w-7xl container mx-auto px-6 text-center relative z-10">
            <RevealOnScroll>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">How It Works</h2>
                <p className="text-lg md:text-xl text-slate-500 mb-16 max-w-3xl mx-auto leading-relaxed">
                Three simple steps to hiring your next great employee.
                </p>
            </RevealOnScroll>

            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-16 left-[16%] right-[16%] h-1 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200 rounded-full -z-10"></div>

                {/* Step 1 */}
                <RevealOnScroll delay={200} className="h-full">
                    <div className="relative group">
                        <div className="w-32 h-32 mx-auto bg-white rounded-full shadow-xl border-4 border-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 relative z-10">
                            <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center group-hover:bg-[#f7a022] transition-colors duration-300">
                                <FilePlus className="w-10 h-10 text-[#f7a022] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#2d3243] text-white rounded-full flex items-center justify-center font-bold border-4 border-white">1</div>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#f7a022] transition-colors">Post Your Job</h3>
                        <p className="text-slate-500 leading-relaxed px-4">Use our AI assistant to create the perfect job ad in minutes.</p>
                    </div>
                </RevealOnScroll>

                {/* Step 2 */}
                <RevealOnScroll delay={500} className="h-full">
                    <div className="relative group">
                        <div className="w-32 h-32 mx-auto bg-white rounded-full shadow-xl border-4 border-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 relative z-10">
                            <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center group-hover:bg-[#f7a022] transition-colors duration-300">
                                <Sparkles className="w-10 h-10 text-[#f7a022] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#2d3243] text-white rounded-full flex items-center justify-center font-bold border-4 border-white">2</div>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#f7a022] transition-colors">AI Matches Candidates</h3>
                        <p className="text-slate-500 leading-relaxed px-4">Our system instantly finds and engages with qualified talent.</p>
                    </div>
                </RevealOnScroll>

                {/* Step 3 */}
                <RevealOnScroll delay={800} className="h-full">
                    <div className="relative group">
                        <div className="w-32 h-32 mx-auto bg-white rounded-full shadow-xl border-4 border-white flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 relative z-10">
                            <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center group-hover:bg-[#f7a022] transition-colors duration-300">
                                <CheckCircle className="w-10 h-10 text-[#f7a022] group-hover:text-white transition-colors duration-300" />
                            </div>
                            <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#2d3243] text-white rounded-full flex items-center justify-center font-bold border-4 border-white">3</div>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-[#f7a022] transition-colors">Hire in 72 Hours</h3>
                        <p className="text-slate-500 leading-relaxed px-4">Review top candidates, conduct interviews, and make your hire.</p>
                    </div>
                </RevealOnScroll>
            </div>

            <RevealOnScroll delay={1000}>
                <div className="mt-16 flex justify-center">
                    <Button className="!px-10 !py-4 !text-lg !bg-[#f7a022] hover:!bg-[#e08e1a] shadow-lg shadow-orange-500/30 hover:scale-105 transform transition-all">Get Started Now</Button>
                </div>
            </RevealOnScroll>
        </div>
      </section>

      {/* --- SECTION 6: FAQ --- */}
      <section className="py-20 md:py-28 bg-white border-t border-slate-100">
        <div className="max-w-4xl container mx-auto px-6">
            <RevealOnScroll>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900">❓ Frequently Asked Questions (FAQ)</h2>
                </div>
            </RevealOnScroll>
            
            <div className="space-y-4">
                {faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                        <RevealOnScroll key={idx} delay={idx * 100}>
                            <div 
                                className={`bg-white border rounded-2xl transition-all duration-300 overflow-hidden ${isOpen ? 'border-[#f7a022] shadow-lg ring-1 ring-[#f7a022]/20' : 'border-slate-200 shadow-sm hover:border-[#f7a022]/50 hover:shadow-md'}`}
                            >
                                <button 
                                    onClick={() => toggleFaq(idx)}
                                    className="w-full flex justify-between items-center text-left p-6 focus:outline-none group"
                                >
                                    <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-[#f7a022]' : 'text-slate-900 group-hover:text-[#f7a022]'}`}>{faq.q}</span>
                                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 border ${isOpen ? 'bg-[#f7a022] border-[#f7a022] text-white rotate-180' : 'bg-slate-50 border-slate-200 text-slate-500 group-hover:border-[#f7a022] group-hover:text-[#f7a022]'}`}>
                                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </span>
                                </button>
                                <div 
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-transparent">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    );
                })}
            </div>

            <RevealOnScroll delay={200}>
                <div className="mt-20 text-center bg-slate-50 rounded-3xl p-10 border border-slate-100">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">Ready to transform your recruitment process?</h3>
                    <p className="text-slate-600 text-lg mb-8">Let's get you started with an 80% discount.</p>
                    <div className="flex justify-center">
                        <Button className="!px-10 !py-4 !text-lg !bg-[#f7a022] hover:!bg-[#e08e1a] shadow-lg shadow-orange-500/30 hover:scale-105 transform transition-all">
                            Claim My 80% Discount
                        </Button>
                    </div>
                </div>
            </RevealOnScroll>
        </div>
      </section>

      {/* --- SECTION 7: Final CTA --- */}
      <section className="bg-[#2d3243] text-white py-16">
        <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
                <RevealOnScroll>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">The right candidates are already here.</h2>
                    <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                        Stop searching and start hiring. Let our AI bring the best talent directly to you.
                    </p>
                    <div className="flex justify-center">
                        <Button className="!px-10 !py-4 !text-base !bg-[#f7a022] hover:!bg-[#e08e1a] shadow-xl shadow-orange-500/20 hover:scale-105 transform transition-all">
                            Claim Your Discount
                        </Button>
                    </div>
                </RevealOnScroll>
            </div>
        </div>
      </section>

    </div>
  );
};