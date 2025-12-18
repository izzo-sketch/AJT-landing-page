import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, Maximize, Clock, Mail, Phone, ArrowRight, VolumeX, Bot, FileSearch, UserCheck, Search, Star, Zap, ShieldCheck, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';
import Button from './Button';

// --- Helper Component for Scroll Animations ---
interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
}

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
      { threshold: 0.15 }
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

const AiCandidateSearch: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
      if (videoRef.current) {
          videoRef.current.muted = !isMuted;
          setIsMuted(!isMuted);
      }
  };

  const handleTimeUpdate = () => {
      if (videoRef.current) {
          setCurrentTime(videoRef.current.currentTime);
      }
  };

  const handleLoadedMetadata = () => {
      if (videoRef.current) {
          setDuration(videoRef.current.duration);
      }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
      const time = parseFloat(e.target.value);
      if (videoRef.current) {
          videoRef.current.currentTime = time;
          setCurrentTime(time);
      }
  };

  const formatTime = (time: number) => {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const toggleFullscreen = () => {
      if (videoRef.current) {
          if (videoRef.current.requestFullscreen) {
              videoRef.current.requestFullscreen();
          }
      }
  };

  const toggleFaq = (index: number) => {
      setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const companies1 = [
    { name: 'Shopee', src: 'https://www.maukerja.my/mkt/images/mkrb-companies/shopee.png' },
    { name: 'Lazada', src: 'https://www.maukerja.my/mkt/images/mkrb-companies/lazada.png' },
    { name: 'Burger King', src: 'https://www.maukerja.my/mkt/images/mkrb-companies/burgerking.png' },
    { name: "McDonald's", src: 'https://www.maukerja.my/mkt/images/mkrb-companies/mcd.png' },
  ];

  const companies2 = [
    { name: 'Concentrix', src: 'https://www.maukerja.my/mkt/images/mkrb-companies/concentrix.png' },
    { name: 'Flash Express', src: 'https://www.maukerja.my/mkt/images/mkrb-companies/flash.png' },
    { name: 'Starbucks', src: 'https://www.maukerja.my/mkt/images/mkrb-companies/starbucks.png' },
    { name: 'Grab', src: 'https://www.maukerja.my/mkt/images/mkrb-companies/grab.png' },
  ];

  const companies3 = [
    { name: 'Watsons', src: 'https://www.maukerja.my/mkt/images/mkrb-companies/watsons.png' },
    { name: 'Foodpanda', src: 'https://www.maukerja.my/mkt/images/mkrb-companies/foodpanda.png' },
    { name: 'KFC', src: 'https://www.maukerja.my/mkt/images/mkrb-companies/kfc.png' },
  ];

  const allCompanies = [...companies1, ...companies2, ...companies3];

  const whySwitchItems = [
    {
        title: "AI Instant Match",
        desc: "Stop drowning in irrelevant resumes. Get qualified, ready-to-hire candidates instantly sorted into one folder.",
        img: "https://files.ajobthing.com/assets/images/ai-job-folder-lp/why-1.png",
        className: "lg:col-span-2"
    },
    {
        title: "AI Outreach",
        desc: "Forget chasing candidates. AI handles the first outreach via WhatsApp & SMS, connecting you only with those interested.",
        img: "https://files.ajobthing.com/assets/images/ai-job-folder-lp/why-2.png",
        className: "lg:col-span-2"
    },
    {
        title: "Candidate Signals",
        desc: "No more blind guessing. Instantly see who's active, open to offers, or ready to switch jobs immediately.",
        img: "https://files.ajobthing.com/assets/images/ai-job-folder-lp/why-3.png",
        className: "lg:col-span-2 md:col-span-2"
    },
    {
        title: "Daily Push Updates",
        desc: "Stop waiting weeks for applicants. Get a steady flow of fresh, active candidates delivered to you every day.",
        img: "https://files.ajobthing.com/assets/images/ai-job-folder-lp/why-4.png",
        className: "lg:col-span-3"
    },
    {
        title: "AJobthing Care Guarantee",
        desc: "Zero wasted budget. We guarantee profile validity and replace invalid candidates, so every credit counts.",
        img: "https://files.ajobthing.com/assets/images/ai-job-folder-lp/why-5.png",
        className: "lg:col-span-3"
    }
  ];

  const howItWorksSteps = [
    {
      id: 1,
      title: "Create Your Job Folder",
      desc: "Tell us what kind of talent you need — job role, skills, and requirements.",
      img: "https://files.ajobthing.com/assets/images/ai-job-folder-lp/how-it-works-1.png"
    },
    {
      id: 2,
      title: "AI Scans & Reaches Out",
      desc: "Our AI searches the market for candidates open to new roles, introduces your company, and checks their interest automatically.",
      img: "https://files.ajobthing.com/assets/images/ai-job-folder-lp/how-it-works-2.png"
    },
    {
      id: 3,
      title: "Review & Connect",
      desc: "You'll only see candidates who fit and are interested. Review, shortlist, and connect — all in one place.",
      img: "https://files.ajobthing.com/assets/images/ai-job-folder-lp/how-it-works-3.png"
    }
  ];

  const faqs = [
    { q: "Do I need a credit card for the trial?", a: "No, the 14-day trial is completely free and requires no credit card information." },
    { q: "How is this different from AI Job Ad?", a: "AI Job Ad waits for candidates to apply, whereas AI Candidate Search proactively finds and matches you with passive candidates who fit your criteria." },
    { q: "What if I don't like the profiles?", a: "Our AI learns from your feedback. You can also manually adjust filters to refine the search results." },
    { q: "Is this like LinkedIn Recruiter?", a: "Similar concept, but we focus on the local market with enriched data from our ecosystem (Maukerja, Ricebowl), plus AI-driven outreach automation." },
    { q: "Is this like using a headhunter?", a: "It's faster and more affordable. Instead of a human manually searching, our AI instantly scans millions of profiles to find matches." },
    { q: "How many candidates can I unlock?", a: "It depends on your plan. The Basic Plan includes 80 unlock credits per month." },
    { q: "Can I cancel or downgrade my plan?", a: "Yes, you can manage your subscription settings from your dashboard at any time." },
    { q: "Do you provide customer support?", a: "Yes, we have dedicated support via WhatsApp, Email, and Phone to assist you." }
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* --- HERO SECTION --- */}
      <section className="bg-gradient-to-b from-orange-50 via-white to-slate-50 text-center py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-[100px] -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[100px] translate-y-1/2"></div>
        </div>

        <div className="max-w-7xl container mx-auto px-6 relative z-10">
            <RevealOnScroll direction="up">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-[#f7a022] text-xs font-bold uppercase tracking-wider mb-8">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                    </span>
                    New Feature
                </div>

                <h1 className="text-4xl md:text-6xl font-black leading-tight text-[#2d3243] mb-6">
                    Hire Staff Faster with Our <br className="hidden md:block" />
                    <span className="text-[#f7a022]">AI Candidate Search</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-500 mb-8 max-w-3xl mx-auto font-medium leading-relaxed">
                    Automate Resume Screening & Candidate Sourcing with AI. <br className="hidden md:block" />
                    Find qualified candidates instantly, no more digging resumes.
                </p>

                <p className="text-slate-500 mb-12 text-base font-bold flex items-center justify-center gap-2">
                    <div className="flex text-[#f7a022]">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    Trusted by 15,000+ companies
                </p>
                
                <div className="relative mx-auto w-full max-w-4xl group mt-8">
                     <div className="absolute -inset-4 bg-gradient-to-r from-[#f7a022] to-pink-500 rounded-[2rem] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
                     <div className="relative mx-auto w-full hover:scale-[1.01] transition-transform duration-500">
                         <div className="relative bg-[#2d3243] rounded-t-2xl pt-2 px-2 pb-0 shadow-2xl mx-auto w-full">
                             <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-b-xl z-20 flex justify-center items-center">
                                 <div className="w-1.5 h-1.5 bg-slate-800 rounded-full"></div>
                                 <div className="w-1 h-1 bg-blue-900/50 rounded-full ml-1"></div>
                             </div>
                             <div className="bg-black rounded-t-lg overflow-hidden relative aspect-video border-[4px] border-[#2d3243]">
                                <video
                                    ref={videoRef}
                                    src="https://files.ajobthing.com/assets/video/ai-candidate-search-lp.mp4"
                                    className="absolute inset-0 w-full h-full object-cover"
                                    playsInline
                                    preload="metadata"
                                    onClick={togglePlay}
                                    onTimeUpdate={handleTimeUpdate}
                                    onLoadedMetadata={handleLoadedMetadata}
                                />
                                {!isPlaying && (
                                    <div className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/20 hover:bg-black/30 transition-all z-10" onClick={togglePlay}>
                                        <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transform transition-all group-hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                                            <Play className="w-8 h-8 text-[#f7a022] ml-1 fill-current" />
                                        </div>
                                    </div>
                                )}
                                <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 transition-opacity duration-300 z-20 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
                                    <div className="flex items-center space-x-3">
                                        <button onClick={(e) => { e.stopPropagation(); togglePlay(); }} className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                                            {isPlaying ? <Pause className="w-4 h-4 text-white fill-current" /> : <Play className="w-4 h-4 text-white ml-0.5 fill-current" />}
                                        </button>
                                        <div className="flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer relative group/progress">
                                            <input type="range" min="0" max={duration || 100} value={currentTime} onChange={handleSeek} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                                            <div className="h-full bg-orange-400 rounded-full transition-all duration-100 relative" style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}>
                                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md scale-0 group-hover/progress:scale-100 transition-transform"></div>
                                            </div>
                                        </div>
                                        <span className="text-white text-xs font-medium min-w-[70px] text-center font-mono">{formatTime(currentTime)} / {formatTime(duration || 76)}</span>
                                        <button onClick={toggleMute} className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                                            {isMuted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
                                        </button>
                                        <button onClick={toggleFullscreen} className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"><Maximize className="w-4 h-4 text-white" /></button>
                                    </div>
                                </div>
                             </div>
                         </div>
                         <div className="relative bg-[#e2e8f0] h-4 sm:h-6 w-full rounded-b-xl shadow-lg border-t border-slate-300">
                             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-2 bg-slate-300 rounded-b-lg"></div>
                         </div>
                         <div className="absolute -bottom-10 left-4 right-4 h-8 bg-black/20 blur-xl rounded-[100%]"></div>
                     </div>
                </div>

                <div className="mt-16">
                    <Button className="!px-10 !py-5 !text-xl !bg-[#f7a022] hover:!bg-[#e08e1a] shadow-xl shadow-orange-500/30 hover:-translate-y-1 transform transition-all mx-auto">Request a Demo</Button>
                    <p className="text-xs text-slate-400 mt-4">No credit card required for consultation.</p>
                </div>
            </RevealOnScroll>
        </div>
      </section>

      {/* --- SECTION 2: TRUSTED COMPANIES --- */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <RevealOnScroll>
                <p className="text-xl font-medium text-slate-500 mb-16">A Job Thing trusted over <span className="font-bold text-slate-900">15,000</span> companies</p>
            </RevealOnScroll>
            <div className="max-w-6xl mx-auto px-6 hidden md:block">
              <div className="flex flex-wrap justify-center items-center gap-16 opacity-80 hover:opacity-100 transition-opacity duration-500">
                  {[...companies1, ...companies2, ...companies3].map((c, i) => (
                      <RevealOnScroll key={i} delay={i * 50}><img src={c.src} alt={c.name} className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110" /></RevealOnScroll>
                  ))}
                  <RevealOnScroll delay={800}><span className="text-slate-400 text-lg font-bold bg-slate-50 px-6 py-3 rounded-full border border-slate-100 whitespace-nowrap"> 1,000 more </span></RevealOnScroll>
              </div>
            </div>
        </div>
      </section>

      {/* --- SECTION 3: PAIN POINTS --- */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <RevealOnScroll><div className="text-center mb-20"><h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Recruiting <span className="text-[#f7a022]">shouldn't</span> waste your time</h2></div></RevealOnScroll>
            <div className="grid md:grid-cols-3 gap-10 mb-20">
                {[1, 2, 3].map((num) => (
                    <RevealOnScroll key={num} delay={num * 100} className="h-full">
                        <div className="bg-white rounded-[2rem] p-8 h-full border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group">
                            <div className="w-48 h-48 mb-8 bg-slate-50 rounded-2xl p-4 overflow-hidden group-hover:bg-orange-50 transition-colors duration-500">
                                <img src={`https://files.ajobthing.com/assets/images/ai-job-folder-lp/recruiting-${num}.png`} className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <p className="text-xl font-medium text-gray-800 leading-relaxed">
                                {num === 1 && "Post a job ad… then just sit there waiting, wasting days with nothing coming in."}
                                {num === 2 && "Your inbox floods with irrelevant resumes, 90% totally useless."}
                                {num === 3 && "You call candidates one by one… most don't pick up, and the few who do aren't even interested."}
                            </p>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>
            <RevealOnScroll delay={400}><div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 w-full relative overflow-hidden group"><div className="absolute top-0 left-0 w-full h-2 bg-[#f7a022]"></div><div className="flex flex-col md:flex-row items-center justify-between gap-8"><p className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed text-left md:max-w-3xl">👉 That's the old way. It's <span className="text-[#f7a022] line-through decoration-4 decoration-[#f7a022]/30">slow</span>, <span className="text-[#f7a022] line-through decoration-4 decoration-[#f7a022]/30">frustrating</span>, and half the time, no one even answers.</p><Button className="!px-12 !py-5 !text-xl !bg-[#f7a022] hover:!bg-[#e08e1a] shadow-xl shadow-orange-500/30 !rounded-full transform hover:scale-105 transition-transform">Request a Demo</Button></div></div></RevealOnScroll>
        </div>
      </section>

      {/* --- SECTION 4: BENEFITS --- */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <RevealOnScroll><div className="mb-20"><span className="text-[#f7a022] font-bold tracking-widest uppercase text-sm mb-3 block">Benefits</span><h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">Why HR <span className="text-[#f7a022]">Switch to</span> AI Candidate Search</h2></div></RevealOnScroll>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-20">
                {whySwitchItems.map((item, index) => (
                    <RevealOnScroll key={index} delay={index * 100} className={item.className || 'lg:col-span-2'}>
                        <div className="group relative bg-white rounded-[2rem] p-8 border border-slate-100 shadow-lg hover:shadow-2xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-2 h-full text-left">
                            <div className="w-28 h-28 mb-6 bg-slate-50 rounded-2xl p-4 flex items-center justify-center group-hover:bg-white group-hover:shadow-md transition-all duration-500"><img src={item.img} className="w-full h-full object-contain" /></div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#f7a022] transition-colors">{item.title}</h3>
                            <p className="text-slate-500 leading-relaxed text-lg">{item.desc}</p>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>
            <RevealOnScroll delay={500}><Button className="!px-12 !py-4 !bg-[#f7a022] hover:!bg-[#e08e1a] !rounded-full transition-all shadow-xl shadow-orange-500/30 mx-auto">Request a Demo</Button></RevealOnScroll>
        </div>
      </section>

      {/* --- SECTION 5: HOW IT WORKS --- */}
      <section className="py-24 bg-slate-50 relative">
          <div className="max-w-7xl mx-auto px-4 text-center">
              <RevealOnScroll><div className="mb-16"><h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">How It <span className="text-[#f7a022]">Works</span></h2></div></RevealOnScroll>
              <div className="grid md:grid-cols-3 gap-12 relative">
                  {howItWorksSteps.map((step, index) => (
                      <RevealOnScroll key={index} delay={index * 200}>
                          <div className="text-center bg-white rounded-3xl p-8 border border-slate-100 shadow-lg h-full flex flex-col items-center">
                               <div className="w-48 h-48 mb-6"><img src={step.img} className="w-full h-full object-contain" /></div>
                               <div className="w-12 h-12 bg-[#f7a022] text-white rounded-full flex items-center justify-center text-xl font-bold mb-6">{step.id}</div>
                               <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                               <p className="text-slate-500 leading-relaxed text-lg">{step.desc}</p>
                          </div>
                      </RevealOnScroll>
                  ))}
              </div>
          </div>
      </section>

      {/* --- SECTION 6: PRICING (Illustration Left, Card Right) --- */}
      <section id="pricing" className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6"><span className="text-[#f7a022]">RM0</span> for 14 days. Pay only after trial.</h2>
              <p className="text-xl text-slate-500 max-w-3xl mx-auto">Try all Basic Plan features at no cost. After your trial ends, continue with Basic Plan to keep hiring without interruption.</p>
            </div>
          </RevealOnScroll>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Illustration (Restored) */}
            <RevealOnScroll direction="left" delay={0}>
                <img 
                    src="https://files.ajobthing.com/assets/images/ai-job-folder-lp/aijobfolder-illustration.png" 
                    alt="AI Candidate Search Dashboard" 
                    className="w-full h-auto object-contain scale-110 transform hover:scale-115 transition-transform duration-700" 
                />
            </RevealOnScroll>

            {/* Right: Pricing Card (Restored) */}
            <RevealOnScroll direction="right" delay={200}>
              <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10 relative overflow-hidden group hover:border-orange-200 transition-colors duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -mr-16 -mt-16 group-hover:bg-[#f7a022] transition-colors duration-300"></div>
                <div className="relative z-10">
                    <div className="text-center mb-10 border-b border-slate-100 pb-8"><h3 className="text-3xl font-bold text-slate-900 leading-tight">AI Candidate Search <br /> Subscription Plan</h3></div>
                    <div className="mb-10">
                      <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2"><span className="w-1 h-6 bg-[#f7a022] rounded-full"></span> This includes:</h4>
                      <ul className="space-y-4">
                        {["Manage up to 2 Job Folders", "600 AI Recommend Candidate Per Month", "80 Unlock Candidate Profile Credits Per Month", "AI Instant Match Feature", "AI Pre-Screening Feature"].map((f, i) => (
                          <li key={i} className="flex items-start"><div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5 mr-3 shrink-0"><div className="w-2 h-2 bg-[#f7a022] rounded-full"></div></div><span className="text-slate-600 font-medium text-lg">{f}</span></li>
                        ))}
                        <li className="flex items-start"><div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5 mr-3 shrink-0"><div className="w-2 h-2 bg-[#f7a022] rounded-full"></div></div><span className="text-slate-600 font-medium text-lg flex items-center gap-2">Ajobthing Care Service <img src="https://files.ajobthing.com/assets/images/logo/ajt-care.png" className="h-6 w-auto" /></span></li>
                      </ul>
                    </div>
                    <Button className="w-full !py-4 !text-xl !bg-[#f7a022] hover:!bg-[#e08e1a] !rounded-xl">Request a Demo</Button>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* --- SECTION 7: FAQ --- */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl container mx-auto px-6">
            <RevealOnScroll><div className="text-center mb-16"><h2 className="text-3xl md:text-4xl font-black text-slate-900">❓ Frequently Asked Questions (FAQ)</h2></div></RevealOnScroll>
            <div className="space-y-4">
                {faqs.map((faq, idx) => {
                    const isOpen = openFaqIndex === idx;
                    return (
                        <RevealOnScroll key={idx} delay={idx * 100}>
                            <div className={`bg-white border rounded-2xl transition-all duration-300 ${isOpen ? 'border-[#f7a022] shadow-lg' : 'border-slate-200'}`}>
                                <button onClick={() => toggleFaq(idx)} className="w-full flex justify-between items-center text-left p-6 group">
                                    <span className={`text-lg font-bold ${isOpen ? 'text-[#f7a022]' : 'text-slate-900'}`}>{faq.q}</span>
                                    {isOpen ? <Minus className="w-4 h-4 text-[#f7a022]" /> : <Plus className="w-4 h-4 text-slate-400" />}
                                </button>
                                {isOpen && <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-transparent">{faq.a}</div>}
                            </div>
                        </RevealOnScroll>
                    );
                })}
            </div>
        </div>
      </section>

      {/* --- SECTION 8: FINAL CTA (Content Left, Updated Illustration Right) --- */}
      <section className="py-24 bg-[#2d3243] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#f7a022]/10 rounded-full blur-[100px] translate-y-1/2"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
              <div className="grid lg:grid-cols-2 items-center gap-16">
                  {/* Left: Text Content */}
                  <RevealOnScroll direction="left">
                      <div className="text-left">
                          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-white">The right candidates <br className="hidden lg:block" /> are already here.</h2>
                          <p className="text-2xl md:text-3xl font-bold mb-8 text-[#f7a022]">Let AI bring them to you.</p>
                          <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-xl">Hiring shouldn't take so long. In minutes, every step of the hiring lifecycle is streamlined, so you spend time only with the right ones.</p>
                          <Button className="!px-12 !py-5 !text-xl !bg-[#f7a022] hover:!bg-[#e08e1a] !text-white shadow-xl hover:scale-105 transform transition-all rounded-full">Request a Demo</Button>
                      </div>
                  </RevealOnScroll>

                  {/* Right: Updated Illustration with Rounded Corners */}
                  <RevealOnScroll direction="right" delay={200}>
                      <div className="relative group flex justify-center items-center">
                          <img 
                             src="https://files.ajobthing.com/assets/images/ai-job-folder-lp/ai-x-candidate.png" 
                             alt="AI connecting with candidates" 
                             className="relative w-full max-w-[500px] h-auto object-contain transform group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl rounded-3xl"
                             onError={(e) => { 
                                 (e.target as HTMLImageElement).src = "https://files.ajobthing.com/assets/images/ai-job-folder-lp/aijobfolder-illustration.png"; 
                             }}
                          />
                      </div>
                  </RevealOnScroll>
              </div>
          </div>
      </section>

    </div>
  );
};

export default AiCandidateSearch;