import React, { useState, useEffect, useRef } from 'react';
import { 
  Zap, 
  Globe, 
  Menu, 
  X, 
  ArrowRight, 
  Star, 
  CircleCheck,
  ShieldCheck,
  Gift,
  Instagram,
  Twitter,
  ChevronDown,
  AtSign,
  Award,
  Share2,
  Phone,
  Mail,
  Quote,
  Youtube
} from 'lucide-react';
import Button from './components/Button';
import HireFastSection from './components/HireFastSection';
import VideoScrollSection from './components/VideoScrollSection';
import ProductCardsSection from './components/ProductCardsSection';
import { NAV_PRODUCTS, NAV_RESOURCES, PRODUCTS_SUITE, INDUSTRY_LOGOS, REVIEWS } from './constants';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Interaction States
  const [isHighlighting, setIsHighlighting] = useState(false);
  const ecosystemRef = useRef<HTMLDivElement>(null);
  const corePlatformsRef = useRef<HTMLDivElement>(null);
  const partnerPlatformsRef = useRef<HTMLDivElement>(null);
  const [flashCore, setFlashCore] = useState(false);
  const [flashPartners, setFlashPartners] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Interaction Handlers
  const handlePublishClick = () => {
    ecosystemRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setIsHighlighting(true);
    setTimeout(() => setIsHighlighting(false), 2000);
  };

  const handleSubtitleClick = (target: 'core' | 'partner') => {
    ecosystemRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    if (target === 'core') { setFlashCore(true); setTimeout(() => setFlashCore(false), 2000); }
    else if (target === 'partner') { setFlashPartners(true); setTimeout(() => setFlashPartners(false), 2000); }
  };

  return (
    <div className="min-h-screen font-sans bg-slate-50 text-slate-900 selection:bg-[#f7a022] selection:text-white flex flex-col">
      
      {/* --- TOP BANNER --- */}
      <div className="bg-gradient-to-r from-[#faa221] via-[#fbb54d] to-yellow-400 text-white py-5 px-4 text-center shadow-sm relative overflow-hidden z-[60]">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/confetti.png')]"></div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 relative z-10 text-sm sm:text-base font-bold text-stone-800">
          <div className="flex items-center gap-2">
            <div className="bg-red-600 text-white text-xs px-2 py-1 rounded transform -rotate-6 shadow-sm">25-30 Nov 2025</div>
            <Gift className="w-5 h-5 text-red-600" />
            <span className="uppercase tracking-wide text-red-700">AJT Anniversary Giveaway!</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-medium text-stone-700 hidden sm:inline">Choose your FREE treat!</span>
            <button className="bg-red-600 text-white px-4 py-1 rounded-full text-xs uppercase tracking-wider font-bold shadow-md hover:bg-red-700 transition-colors ml-2">Click Here</button>
          </div>
        </div>
      </div>

      {/* --- NAVBAR --- */}
      <nav className={`sticky top-0 w-full z-50 transition-all duration-300 bg-white border-b border-slate-100 ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="flex-shrink-0">
               <img src="https://files.ajobthing.com/assets/landing/a-job-thing-black.png" alt="AJobThing Logo" width="106" height="40" className="h-10 w-auto" />
            </a>
            <div className="hidden lg:flex items-center space-x-1 ml-8 mr-auto">
               <a href="/" className="px-4 py-2 text-sm font-bold text-slate-900 hover:text-[#f7a022] transition-colors">Home</a>
               <div className="relative group">
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#f7a022] transition-colors group-hover:text-[#f7a022]">Products <ChevronDown className="w-3 h-3 transition-transform group-hover:-rotate-180" /></button>
                  <div className="absolute top-full left-0 w-[400px] bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden p-2 grid gap-1">
                     {NAV_PRODUCTS.map((prod, idx) => (
                        <a key={idx} href={prod.href} className="flex items-start p-3 rounded-lg hover:bg-slate-50 transition-colors group/item">
                           <div className={`w-8 h-8 rounded-lg ${prod.color} flex items-center justify-center text-white flex-shrink-0 mt-0.5`}><prod.icon className="w-4 h-4" /></div>
                           <div className="ml-3">
                              <div className="text-xs font-bold text-slate-900 uppercase tracking-wide group-hover/item:text-[#f7a022]">{prod.title}</div>
                              <div className="text-xs text-slate-500 leading-snug mt-1">{prod.desc}</div>
                           </div>
                        </a>
                     ))}
                  </div>
               </div>
               <a href="/pricing" className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#f7a022] transition-colors">Pricing</a>
               <div className="relative group">
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#f7a022] transition-colors group-hover:text-[#f7a022]">Resources <ChevronDown className="w-3 h-3 transition-transform group-hover:-rotate-180" /></button>
                  <div className="absolute top-full left-0 w-[260px] bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 py-2">
                     {NAV_RESOURCES.map((res, idx) => (
                        <div key={idx} className="relative group/sub">
                           <a href={res.href} className="block px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#f7a022] flex justify-between items-center">{res.label}{res.submenu && <ArrowRight className="w-3 h-3" />}</a>
                           {res.submenu && (
                             <div className="hidden group-hover/sub:block absolute left-full top-0 w-[240px] bg-white rounded-xl shadow-xl border border-slate-100 p-2 ml-1">
                                {res.submenu.map((sub, sIdx) => (
                                  <a key={sIdx} href={sub.href} className="block px-3 py-2 text-sm text-slate-600 hover:text-[#f7a022] hover:bg-slate-50 rounded-lg">{sub.label}</a>
                                ))}
                             </div>
                           )}
                           {(idx === 0 || idx === 1 || idx === 2 || idx === 3 || idx === 4) && <div className="h-px bg-slate-100 mx-4 my-1"></div>}
                        </div>
                     ))}
                  </div>
               </div>
               <a href="/faq" className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#f7a022] transition-colors">FAQ</a>
            </div>
            <div className="hidden lg:flex items-center gap-3">
               <Button variant="secondary">Login</Button>
               <Button variant="secondary">Register</Button>
               <Button variant="primary">Post Job Now</Button>
               <a href="/product/hiring-in-malaysia" className="text-sm font-bold text-[#f7a022] hover:underline ml-2" onClick={() => console.log('gtag event')}>海外企业来马招聘</a>
            </div>
            <div className="lg:hidden flex items-center gap-3">
              <Button variant="primary" className="text-xs px-3 py-1.5">Post Job Now</Button>
              <button className="text-slate-600 p-2 hover:bg-slate-100 rounded-lg" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>{isMobileMenuOpen ? <X /> : <Menu />}</button>
            </div>
          </div>
        </div>
        {/* Mobile Menu Content */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 p-4 shadow-xl max-h-[80vh] overflow-y-auto">
             <div className="space-y-1">
                <a href="/" className="block px-4 py-2 text-sm font-bold text-[#f7a022] bg-orange-50 rounded-lg">Home</a>
                <div className="py-2">
                   <div className="px-4 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Products</div>
                   {NAV_PRODUCTS.map((p,i) => (<a key={i} href={p.href} className="flex items-center gap-3 px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-lg"><p.icon className="w-4 h-4 text-slate-400" /><span className="text-sm font-medium">{p.title}</span></a>))}
                </div>
                <a href="/pricing" className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg">Pricing</a>
                <div className="py-2">
                   <div className="px-4 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Resources</div>
                   {NAV_RESOURCES.map((r,i) => (<a key={i} href={r.href} className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg">{r.label}</a>))}
                </div>
                <a href="/product/hiring-in-malaysia" className="block px-4 py-2 text-sm font-bold text-[#f7a022] hover:bg-slate-50 rounded-lg">海外企业来马招聘</a>
             </div>
             <div className="border-t border-slate-100 mt-4 pt-4 space-y-3">
                <Button variant="outline" className="w-full">Login</Button>
                <Button variant="outline" className="w-full">Register</Button>
                <Button variant="primary" className="w-full">Post Job Now</Button>
             </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-20 overflow-hidden bg-gradient-to-b from-orange-50 to-white">
         <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
               
               {/* Left Text (50% width) */}
               <div className="lg:col-span-6 flex flex-col items-start"> 
                  
                  {/* Headline */}
                  <div className="flex flex-col w-full max-w-3xl">
                      <h1 className="text-4xl md:text-5xl lg:text-6xl leading-none font-black text-[#2d3243] whitespace-normal">
                        Post Your Job Ad to
                      </h1>
                      <h1 className="text-4xl md:text-5xl lg:text-6xl leading-none font-black text-[#f7a022] tracking-wide whitespace-normal mt-2">
                        Multiple Platforms
                      </h1>
                  </div>

                  {/* Subtitle */}
                  <div className="w-full max-w-lg mt-8 border-l-4 border-[#f7a022] pl-6">
                      <p className="text-lg text-slate-600 leading-relaxed">
                        Get <span className="bg-[#f7a022] text-white px-2 py-0.5 font-bold inline-block transform -rotate-2 shadow-sm rounded-lg">3X More Reach</span> by publishing your job ad on our 
                        <span 
                           className={`font-semibold text-slate-600 cursor-pointer hover:underline mx-1 transition-colors ${flashCore ? 'border-b-2 border-[#f7a022] bg-orange-50' : ''}`}
                           onClick={() => handleSubtitleClick('core')}
                        >Powering Malaysia's Top Job Platforms</span> 
                        + cross-publishing on our 
                        <span 
                           className={`font-semibold text-slate-600 cursor-pointer hover:underline mx-1 transition-colors ${flashPartners ? 'border-b-2 border-blue-600 bg-blue-50' : ''}`}
                           onClick={() => handleSubtitleClick('partner')}
                        >Partner Platforms</span> 
                        at once.
                        <span className="block mt-2 font-semibold text-slate-900">One submission, maximum exposure.</span>
                      </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-10">
                    <Button className="!px-8 !py-4 !text-base shadow-xl shadow-orange-500/20 hover:-translate-y-1 transition-transform">Start Posting Now</Button>
                    <Button variant="secondary" className="!px-8 !py-4 !text-base hover:-translate-y-1 transition-transform">View Packages</Button>
                  </div>
               </div>

               {/* Right Visual (50%) */}
               <div className="lg:col-span-6 flex justify-center perspective-1000">
                  <div className="relative w-full max-w-2xl transform transition-transform duration-500 hover:rotate-y-1 hover:rotate-x-1 z-10 animate-float-slow">
                      
                      {/* Floating Element 1: Multi-Channel - Moved outside overflow-hidden container */}
                      <div className="absolute -right-2 md:-right-8 top-16 bg-white p-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-stone-100 flex items-center gap-3 max-w-[200px] animate-[bounce_4s_infinite] z-30">
                          <div className="flex -space-x-3">
                              <img className="w-8 h-8 rounded-full border-2 border-white bg-white shadow-sm object-contain" src="https://logo.clearbit.com/maukerja.my" alt="Maukerja" />
                              <img className="w-8 h-8 rounded-full border-2 border-white bg-white shadow-sm object-contain" src="https://logo.clearbit.com/ricebowl.my" alt="Ricebowl" />
                              <div className="w-8 h-8 rounded-full border-2 border-white bg-[#0077b5] shadow-sm flex items-center justify-center">
                                  <img className="w-4 h-4 brightness-0 invert" src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" alt="LinkedIn" />
                              </div>
                          </div>
                          <div>
                              <p className="text-xs font-bold text-stone-800">Multi-Channel</p>
                              <p className="text-[10px] text-stone-500">Max Exposure</p>
                          </div>
                      </div>

                      {/* Floating Element 2: Hire Fast - Moved outside overflow-hidden container */}
                      <div className="absolute -left-2 md:-left-8 bottom-32 bg-[#faa221] text-white p-4 rounded-2xl shadow-xl shadow-orange-500/20 max-w-[180px] hidden sm:flex items-center gap-3 transform rotate-2 hover:rotate-0 transition-transform cursor-default z-30">
                          <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                              </svg>
                          </div>
                          <div>
                              <p className="text-sm font-bold">Hire Fast</p>
                              <p className="text-[10px] text-orange-100 font-medium">Under 72 Hours</p>
                          </div>
                      </div>

                      {/* Main Dashboard Card */}
                      <div className="relative bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden">
                        <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-2">
                           <div className="w-3 h-3 rounded-full bg-red-400"></div>
                           <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                           <div className="w-3 h-3 rounded-full bg-green-400"></div>
                           <div className="flex-1 text-center text-xs text-slate-400 font-mono">Employer Dashboard</div>
                        </div>
                        <div className="p-6 bg-slate-50/50 min-h-[400px] flex gap-6">
                           
                           <div className="flex-1">
                              <div className="flex justify-between items-center mb-6">
                                 <div><h3 className="font-bold text-slate-900 text-lg">Create Job Ad</h3><p className="text-xs text-slate-500">Step 2 of 3: Select Channels</p></div>
                                 <Button className="!px-4 !py-1 !text-xs !h-8">Save Draft</Button>
                              </div>
                              <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-6">
                                 <div className="flex justify-between mb-4">
                                    <div className="flex gap-3">
                                       <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold">M</div>
                                       <div><div className="font-bold text-slate-900">Marketing Executive</div><div className="text-xs text-slate-400">Full Time • Kuala Lumpur</div></div>
                                    </div>
                                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold h-fit">Draft</span>
                                 </div>
                                 <div className="p-4 bg-slate-50 rounded-lg border border-dashed border-slate-300 text-center">
                                    <p className="text-sm font-bold text-slate-600 mb-3">Where should we post this?</p>
                                    <Button className="!px-8 !py-2 mx-auto" onClick={handlePublishClick}>Publish your Job ad</Button>
                                 </div>
                              </div>
                              <div className="grid grid-cols-3 gap-4">
                                 <div className="bg-white p-3 rounded-xl border border-slate-100 col-span-2 group hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-default">
                                    <div className="text-xs text-slate-400 mb-1">Total Applicants</div>
                                    <div className="font-bold text-slate-900 text-2xl">128 <span className="text-sm text-green-600 font-medium">+12 today</span></div>
                                 </div>
                                 <div className="bg-white p-3 rounded-xl border border-slate-100 col-span-1 group hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-default">
                                    <div className="text-xs text-slate-400 mb-1">Quality Score</div>
                                    <div className="font-bold text-slate-900 text-2xl">92%</div>
                                 </div>
                              </div>
                           </div>
                        </div>
                      </div>
                  </div>
               </div>
            </div>

            {/* Platform Grid (Removed orange box wrapper) */}
            <div ref={ecosystemRef} className="w-full mt-12">
                <div className="grid lg:grid-cols-3 gap-8 relative z-10">
                    {/* Core */}
                    <div ref={corePlatformsRef} className={`p-8 rounded-3xl bg-white border border-slate-100 shadow-xl transition-all duration-300 text-center lg:text-left flex flex-col gap-4 group/card ${flashCore ? 'ring-4 ring-[#f7a022] scale-105' : 'hover:-translate-y-2'}`}>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-center lg:justify-start gap-2 group-hover/card:text-[#f7a022] transition-colors"><Zap className="w-4 h-4 text-[#f7a022]" /> Powering Top Platforms</p>
                        <div className="flex flex-col gap-4 justify-center lg:justify-start">
                            <div className="flex items-center gap-4">
                                <div className="h-14 px-6 rounded-xl flex items-center justify-center bg-[#ed3554] shadow-sm w-full transition-transform hover:scale-105">
                                   <img src="https://files.ajobthing.com/assets/logo/maukerja/v6-logo-desktop.svg" className="h-6 w-auto brightness-0 invert" alt="Maukerja" />
                                </div>
                                <div><div className="font-bold text-slate-900 text-base">Maukerja</div><div className="text-xs font-bold text-[#f7a022]">4M+ Users</div></div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="h-14 px-6 rounded-xl flex items-center justify-center bg-[#25a69a] shadow-sm w-full transition-transform hover:scale-105">
                                   <img src="https://files.ajobthing.com/assets/logo/ricebowl/v6-logo-desktop.svg" className="h-6 w-auto brightness-0 invert" alt="Ricebowl" />
                                </div>
                                <div><div className="font-bold text-slate-900 text-base">Ricebowl</div><div className="text-xs font-bold text-blue-500">1M+ Users</div></div>
                            </div>
                        </div>
                    </div>
                    {/* Partners */}
                    <div ref={partnerPlatformsRef} className={`p-8 rounded-3xl bg-white border border-slate-100 shadow-xl transition-all duration-300 text-center lg:text-left group/card ${flashPartners ? 'ring-4 ring-blue-500 scale-105' : 'hover:-translate-y-2'}`}>
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6 flex items-center justify-center lg:justify-start gap-2 group-hover/card:text-blue-500 transition-colors"><Globe className="w-4 h-4 text-blue-500" /> Partner Network</p>
                        <div className="flex gap-6 justify-center lg:justify-start items-start mt-2">
                            <div className="flex flex-col items-center gap-3 group/icon"><div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shadow-sm group-hover/icon:scale-110 group-hover/icon:bg-blue-50 transition-all"><img src="https://files.ajobthing.com/assets/landing/ico-linkedin.svg" className="w-8 h-8" alt="LinkedIn" /></div><span className="font-bold text-xs text-slate-500 group-hover/card:text-slate-800">LinkedIn</span></div>
                            <div className="flex flex-col items-center gap-3 group/icon"><div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shadow-sm group-hover/icon:scale-110 group-hover/icon:bg-blue-50 transition-all"><img src="https://files.ajobthing.com/assets/landing/ico-facebook.svg" className="w-8 h-8" alt="Facebook" /></div><span className="font-bold text-xs text-slate-500 group-hover/card:text-slate-800">Facebook</span></div>
                            <div className="flex flex-col items-center gap-3 group/icon"><div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shadow-sm group-hover/icon:scale-110 group-hover/icon:bg-orange-50 transition-all"><img src="https://files.ajobthing.com/assets/landing/ico-google.svg" className="w-8 h-8" alt="Google" /></div><span className="font-bold text-xs text-slate-500 group-hover/card:text-slate-800">Google</span></div>
                        </div>
                    </div>
                    {/* Socials */}
                    <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-xl transition-all duration-300 text-center lg:text-left group/card hover:-translate-y-2">
                        <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-6 flex items-center justify-center lg:justify-start gap-2 group-hover/card:text-purple-500 transition-colors"><Share2 className="w-4 h-4 text-purple-500" /> 4M+ Social Followers</p>
                        <div className="grid grid-cols-3 gap-4 justify-items-center lg:justify-items-start mt-2">
                            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 hover:scale-110 transition-transform hover:bg-black hover:text-white" title="TikTok"><div className="w-5 h-5 bg-current rounded-full border border-current"></div></div>
                            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 hover:scale-110 transition-transform hover:bg-black hover:text-white" title="X"><Twitter className="w-6 h-6" /></div>
                            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 hover:scale-110 transition-transform hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:text-white" title="Instagram"><Instagram className="w-6 h-6" /></div>
                            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 hover:scale-110 transition-transform hover:bg-black hover:text-white" title="Threads"><AtSign className="w-6 h-6" /></div>
                            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 hover:scale-110 transition-transform hover:bg-red-600 hover:text-white" title="YouTube"><Youtube className="w-6 h-6" /></div>
                            <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-600 font-bold text-lg hover:scale-110 transition-transform hover:bg-[#FF2442] hover:text-white" title="Xiaohongshu">小</div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* --- SECTION 2: Hire Fast --- */}
      <HireFastSection />

      {/* --- SECTION 3: Video Scroll (AI Job Ad, Smart Walk-in, Talent Pool) --- */}
      <VideoScrollSection products={PRODUCTS_SUITE.slice(0, 3)} />

      {/* --- SECTION 4: Product Cards (Candidate Search, Branding, Career Page) --- */}
      <ProductCardsSection products={PRODUCTS_SUITE.slice(3, 6)} />

      {/* --- SECTION 5: About & Rewards --- */}
      <section className="py-24 bg-gradient-to-b from-white to-orange-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-4xl mx-auto mb-24">
             <span className="text-[#f7a022] font-bold tracking-widest uppercase text-sm mb-3 block">Who We Are</span>
             <h2 className="text-3xl lg:text-5xl font-extrabold text-stone-900 mb-8">About <span className="text-[#f7a022]">AJobThing</span></h2>
             <p className="text-xl text-stone-600 leading-relaxed">We are a comprehensive recruitment ecosystem designed to help you hire better and faster. By combining technology with human expertise, we attract the best talents to match your specific company requirements.</p>
           </div>

           <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              <div>
                <h3 className="text-2xl font-bold text-stone-900 mb-10 flex items-center gap-3">
                  <span className="w-8 h-1 bg-[#f7a022] rounded-full"></span> Awards & Recognition
                </h3>
                <div className="space-y-10">
                   <div className="flex gap-4 items-start group">
                      <div className="flex-shrink-0 w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-[#f7a022] group-hover:bg-[#f7a022] group-hover:text-white transition-colors duration-300">
                         <Award className="w-6 h-6" />
                      </div>
                      <div>
                         <div className="text-xs font-bold text-[#f7a022] mb-1">2022</div>
                         <h4 className="text-lg font-bold text-stone-900 mb-2 leading-tight">MDEC Recognition</h4>
                         <p className="text-stone-600 leading-relaxed">Recognised for 'Long-standing Partnership in Advancing the Adoption of Sharing Economy Models' under the Malaysia Digital initiative.</p>
                      </div>
                   </div>
                   <div className="flex gap-4 items-start group">
                      <div className="flex-shrink-0 w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-[#f7a022] group-hover:bg-[#f7a022] group-hover:text-white transition-colors duration-300">
                         <Award className="w-6 h-6" />
                      </div>
                      <div>
                         <div className="text-xs font-bold text-[#f7a022] mb-1">2018</div>
                         <h4 className="text-lg font-bold text-stone-900 mb-2 leading-tight">Asia Recruitment Awards</h4>
                         <p className="text-stone-600 leading-relaxed">Our platform Maukerja was awarded Best Job Portal.</p>
                      </div>
                   </div>
                   <div className="flex gap-4 items-start group">
                      <div className="flex-shrink-0 w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-[#f7a022] group-hover:bg-[#f7a022] group-hover:text-white transition-colors duration-300">
                         <Award className="w-6 h-6" />
                      </div>
                      <div>
                         <div className="text-xs font-bold text-[#f7a022] mb-1">2018</div>
                         <h4 className="text-lg font-bold text-stone-900 mb-2 leading-tight">HR Vendors of the Year</h4>
                         <p className="text-stone-600 leading-relaxed">Won Best Recruitment Portal category in HumanResources HR Vendors of the Year.</p>
                      </div>
                   </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-10 border border-stone-100 shadow-xl">
                 <h3 className="text-2xl font-bold text-stone-900 mb-8">Trusted & Certified</h3>
                 <div className="space-y-8">
                    <div className="flex gap-4">
                       <CircleCheck className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                       <div>
                          <h4 className="font-bold text-stone-900 text-lg">HRDF Registered Training Provider</h4>
                          <p className="text-stone-600 mt-1">We are fully registered and compliant.</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <ShieldCheck className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                       <div>
                          <h4 className="font-bold text-stone-900 text-lg">MSC Status Company</h4>
                          <p className="text-stone-600 mt-1">Recognized for ICT adoption and growth.</p>
                       </div>
                    </div>
                    <div className="h-px bg-stone-200 my-8"></div>
                    <div className="mt-6">
                       <img alt="MSC Malaysia Status and HRDF Corp Registered" className="w-full max-w-[200px] h-auto object-contain grayscale opacity-80 hover:grayscale-0 transition-all" src="https://files.ajobthing.com/assets/landing/img-award-logo2.png" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* --- SECTION 6: Happy Customers (Infinite Scroll Marquee) --- */}
      <section className="py-20 bg-white border-t border-stone-100 overflow-hidden relative">
         <div className="relative w-full max-w-[1920px] mx-auto">
             {/* Gradient Edges for fade effect */}
             <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
             <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
             
             <div className="container mx-auto px-6 text-center mb-12">
                <span className="text-[#f7a022] font-bold tracking-widest uppercase text-sm mb-3 block">Our Clients</span>
                <h2 className="text-3xl lg:text-5xl font-extrabold text-stone-900">Trusted by <span className="text-[#f7a022]">Industry Leaders</span></h2>
             </div>

             {/* Infinite Scroll Container - ROW 1 (Left) - Duplicated 4x for seamless loop */}
             <div className="flex mb-6 w-max animate-scroll-left pause-hover">
                {[...INDUSTRY_LOGOS, ...INDUSTRY_LOGOS, ...INDUSTRY_LOGOS, ...INDUSTRY_LOGOS].map((logo, i) => (
                  <div key={i} className="flex-shrink-0 w-48 h-28 mx-3 flex items-center justify-center p-5 bg-white rounded-2xl border border-stone-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1 hover:rotate-1 transition-all duration-300 group cursor-default">
                     {logo.url ? (
                        <img alt={logo.name} className="max-h-14 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 filter transform group-hover:scale-110" src={logo.url} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                     ) : (
                        <span className="text-stone-400 font-bold text-sm text-center">{logo.name}</span>
                     )}
                  </div>
                ))}
             </div>
             
             {/* Infinite Scroll Container - ROW 2 (Right) - Duplicated 4x for seamless loop */}
             <div className="flex w-max animate-scroll-right pause-hover">
                {[...INDUSTRY_LOGOS, ...INDUSTRY_LOGOS, ...INDUSTRY_LOGOS, ...INDUSTRY_LOGOS].reverse().map((logo, i) => (
                  <div key={i} className="flex-shrink-0 w-48 h-28 mx-3 flex items-center justify-center p-5 bg-white rounded-2xl border border-stone-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-lg hover:-translate-y-1 hover:rotate-1 transition-all duration-300 group cursor-default">
                     {logo.url ? (
                        <img alt={logo.name} className="max-h-14 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 filter transform group-hover:scale-110" src={logo.url} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                     ) : (
                        <span className="text-stone-400 font-bold text-sm text-center">{logo.name}</span>
                     )}
                  </div>
                ))}
             </div>
         </div>
      </section>

      {/* --- SECTION 7: Google Reviews --- */}
      <section className="py-24 bg-slate-50">
         <div className="container mx-auto px-6">
            <div className="text-center mb-20">
               <span className="text-[#faa221] font-bold tracking-widest uppercase text-sm mb-3 block">Testimonials</span>
               <h2 className="text-3xl lg:text-5xl font-extrabold text-stone-900 mb-6">What Our <span className="text-[#faa221]">Customers Say</span></h2>
               <div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-lg border border-stone-100 transform hover:scale-105 transition-transform duration-300">
                  <img alt="Google" className="w-8 h-8" src="https://files.ajobthing.com/assets/landing/ico-google.svg" />
                  <div className="h-8 w-px bg-stone-200"></div>
                  <div className="text-left">
                     <div className="flex items-center gap-1">
                        <span className="text-stone-900 font-bold text-lg">4.8</span>
                        <div className="flex text-[#faa221]">
                           {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-current" />
                           ))}
                        </div>
                     </div>
                     <div className="text-stone-500 text-xs font-medium uppercase tracking-wide">Based on 1,511 reviews</div>
                  </div>
               </div>
            </div>
            {/* Showing ALL reviews now - Grid Layout Adjusted */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {REVIEWS.map((review, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col relative group">
                     <div className="absolute top-6 right-6 text-stone-100 group-hover:text-orange-100 transition-colors">
                        <Quote className="w-8 h-8 fill-current" />
                     </div>
                     
                     {/* Header with Logo if available */}
                     <div className="flex items-center gap-3 mb-6 relative z-10">
                        <div className="w-12 h-12 bg-stone-50 rounded-xl flex items-center justify-center p-2 border border-stone-100 shrink-0 group-hover:bg-orange-50 transition-colors">
                           {review.logo ? (
                              <img alt={review.company} className="w-full h-full object-contain mix-blend-multiply" src={review.logo} />
                           ) : (
                              <span className="font-bold text-lg text-stone-400">{review.company[0]}</span>
                           )}
                        </div>
                        <div>
                           <h4 className="font-bold text-stone-900 text-sm leading-tight line-clamp-1" title={review.company}>{review.company}</h4>
                           <p className="text-xs text-stone-500 mt-0.5 font-medium">{review.name}</p>
                        </div>
                     </div>

                     <p className="text-stone-600 text-sm leading-relaxed flex-grow italic mb-6">"{review.text}"</p>
                     
                     <div className="flex gap-0.5 text-[#faa221] mt-auto pt-4 border-t border-stone-100">
                        {[...Array(5)].map((_, i) => (
                           <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-slate-200'}`} />
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      <footer className="bg-white border-t border-slate-200 mt-auto">
         <div className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-12 gap-12">
               <div className="md:col-span-4 lg:col-span-5">
                  <h3 className="font-bold text-lg text-slate-900 mb-6">Contact Support</h3>
                  <ul className="space-y-6">
                     <li className="flex gap-4"><Phone className="w-6 h-6 text-slate-400 mt-1" /><div><p className="text-sm text-slate-500 mb-1 font-medium">Whatsapp or call us</p><a href="#" className="text-lg font-bold text-[#f7a022] hover:underline">60189666610</a></div></li>
                     <li className="flex gap-4"><Mail className="w-6 h-6 text-slate-400 mt-1" /><div><p className="text-sm text-slate-500 mb-1 font-medium">General Inquiries</p><a href="#" className="text-base font-bold text-slate-700 hover:text-[#f7a022]">hello@ajobthing.com</a></div></li>
                  </ul>
               </div>
               <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">
                  <div><h3 className="font-bold text-lg text-slate-900 mb-6">Employers</h3><ul className="space-y-3"><li><a href="#" className="text-sm text-slate-600 hover:text-[#f7a022]">Post A Job</a></li><li><a href="#" className="text-sm text-slate-600 hover:text-[#f7a022]">Products</a></li></ul></div>
                  <div><h3 className="font-bold text-lg text-slate-900 mb-6">Job Seekers</h3><ul className="space-y-3"><li><a href="#" className="text-sm text-slate-600 hover:text-[#f7a022]">Maukerja</a></li><li><a href="#" className="text-sm text-slate-600 hover:text-[#f7a022]">Ricebowl</a></li></ul></div>
                  <div><h3 className="font-bold text-lg text-slate-900 mb-6">Resources</h3><ul className="space-y-3"><li><a href="#" className="text-sm text-slate-600 hover:text-[#f7a022]">Blog</a></li><li><a href="#" className="text-sm text-slate-600 hover:text-[#f7a022]">Help Center</a></li></ul></div>
               </div>
            </div>
         </div>
         <div className="border-t border-slate-100 bg-slate-50 py-6"><div className="container mx-auto px-6 text-center"><p className="text-xs text-slate-500">© Copyright Agensi Pekerjaan Ajobthing Sdn Bhd</p></div></div>
      </footer>

      <style>{`
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-scroll { animation: scroll 30s linear infinite; }
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }
        .animate-scroll-left { animation: scroll-left 120s linear infinite; }
        @keyframes scroll-right { 0% { transform: translateX(-100%); } 100% { transform: translateX(0); } }
        .animate-scroll-right { animation: scroll-right 120s linear infinite; }
        .pause-hover:hover { animation-play-state: paused; }
        @keyframes gradient-x { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        .animate-gradient-x { background-size: 200% 200%; animation: gradient-x 3s ease infinite; }
        @keyframes spin-slow { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 4s linear infinite; }
        @keyframes float-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
}