import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Gift, 
  ChevronDown, 
  Phone, 
  Mail,
  Zap,
  Globe
} from 'lucide-react';
import Button from './components/Button';
import Home from './components/Home';
import { Pricing } from './components/Pricing';
import { AiJobAd } from './components/AiJobAd';
import AiCandidateSearch from './components/AiCandidateSearch';
import { NAV_PRODUCTS, NAV_RESOURCES } from './constants';

type Page = 'home' | 'pricing' | 'ai-job-ad' | 'ai-candidate-search';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside mobile menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Simple Router Function
  const navigate = (page: Page) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); navigate('home'); }} 
              className="flex-shrink-0"
            >
               <img src="https://files.ajobthing.com/assets/landing/a-job-thing-black.png" alt="AJobThing Logo" width="106" height="40" className="h-10 w-auto" />
            </a>
            <div className="hidden lg:flex items-center space-x-1 ml-8 mr-auto">
               <button onClick={() => navigate('home')} className={`px-4 py-2 text-sm font-bold transition-colors ${currentPage === 'home' ? 'text-[#f7a022]' : 'text-slate-900 hover:text-[#f7a022]'}`}>Home</button>
               <div className="relative group">
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#f7a022] transition-colors group-hover:text-[#f7a022]">Products <ChevronDown className="w-3 h-3 transition-transform group-hover:-rotate-180" /></button>
                  <div className="absolute top-full left-0 w-[600px] bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden p-2 grid grid-cols-2 gap-1">
                     {NAV_PRODUCTS.map((prod, idx) => (
                        <a 
                          key={idx} 
                          href={prod.href} 
                          onClick={(e) => {
                             if (prod.title === 'AI JOB AD') {
                                e.preventDefault();
                                navigate('ai-job-ad');
                             } else if (prod.title === 'AI CANDIDATE SEARCH') {
                                e.preventDefault();
                                navigate('ai-candidate-search');
                             }
                          }}
                          className="flex items-start p-3 rounded-lg hover:bg-slate-50 transition-colors group/item h-full"
                        >
                           <div className={`w-8 h-8 rounded-lg ${prod.color} flex items-center justify-center text-white flex-shrink-0 mt-0.5`}><prod.icon className="w-4 h-4" /></div>
                           <div className="ml-3">
                              <div className="text-xs font-bold text-slate-900 uppercase tracking-wide group-hover/item:text-[#f7a022]">{prod.title}</div>
                              <div className="text-xs text-slate-500 leading-snug mt-1">{prod.desc}</div>
                           </div>
                        </a>
                     ))}
                  </div>
               </div>
               <button 
                  onClick={() => navigate('pricing')} 
                  className={`px-4 py-2 text-sm font-medium transition-colors ${currentPage === 'pricing' ? 'text-[#f7a022] font-bold' : 'text-slate-600 hover:text-[#f7a022]'}`}
               >
                 Pricing
               </button>
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
               <Button variant="primary">Login</Button>
               <Button variant="secondary">Register</Button>
               <a href="/product/hiring-in-malaysia" className="text-sm font-bold text-[#f7a022] hover:underline ml-2 flex items-center gap-1" onClick={() => console.log('gtag event')}>
                  <Globe className="w-3.5 h-3.5" />
                  海外企业来马招聘
               </a>
            </div>
            <div className="lg:hidden flex items-center gap-3">
              <button className="text-slate-600 p-2 hover:bg-slate-100 rounded-lg" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>{isMobileMenuOpen ? <X /> : <Menu />}</button>
            </div>
          </div>
        </div>
        {/* Mobile Menu Content */}
        {isMobileMenuOpen && (
          <div ref={mobileMenuRef} className="lg:hidden bg-white border-t border-slate-100 p-4 shadow-xl max-h-[80vh] overflow-y-auto">
             <div className="space-y-1">
                <button onClick={() => navigate('home')} className="block w-full text-left px-4 py-2 text-sm font-bold text-[#f7a022] bg-orange-50 rounded-lg">Home</button>
                <div className="py-2">
                   <div className="px-4 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Products</div>
                   {NAV_PRODUCTS.map((p,i) => (
                      <a 
                        key={i} 
                        href={p.href} 
                        onClick={(e) => {
                           if (p.title === 'AI JOB AD') {
                              e.preventDefault();
                              navigate('ai-job-ad');
                           } else if (p.title === 'AI CANDIDATE SEARCH') {
                              e.preventDefault();
                              navigate('ai-candidate-search');
                           }
                        }}
                        className="flex items-center gap-3 px-4 py-2 text-slate-700 hover:bg-slate-50 rounded-lg"
                      >
                         <p.icon className="w-4 h-4 text-slate-400" />
                         <span className="text-sm font-medium">{p.title}</span>
                      </a>
                   ))}
                </div>
                <button onClick={() => navigate('pricing')} className="block w-full text-left px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg">Pricing</button>
                <div className="py-2">
                   <div className="px-4 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Resources</div>
                   {NAV_RESOURCES.map((r,i) => (<a key={i} href={r.href} className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg">{r.label}</a>))}
                </div>
                <a href="/product/hiring-in-malaysia" className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-[#f7a022] hover:bg-slate-50 rounded-lg">
                  <Globe className="w-4 h-4" />
                  海外企业来马招聘
                </a>
             </div>
             <div className="border-t border-slate-100 mt-4 pt-4 space-y-3">
                <Button variant="primary" className="w-full">Login</Button>
                <Button variant="secondary" className="w-full">Register</Button>
             </div>
          </div>
        )}
      </nav>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-grow">
         {currentPage === 'home' && <Home />}
         {currentPage === 'pricing' && <Pricing />}
         {currentPage === 'ai-job-ad' && <AiJobAd />}
         {currentPage === 'ai-candidate-search' && <AiCandidateSearch />}
      </main>

      {/* --- FOOTER --- */}
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
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10%); } }
        .animate-bounce-slow { animation: bounce-slow 2s infinite; }
      `}</style>
    </div>
  );
}