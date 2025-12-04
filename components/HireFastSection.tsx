import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';
import { HIRE_FAST_STEPS } from '../constants';

const HireFastSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const { top, height } = sectionRef.current.getBoundingClientRect();
      const scrollProgress = -top / (height - window.innerHeight);
      
      if (scrollProgress < 0.3) setActiveStep(0);
      else if (scrollProgress < 0.6) setActiveStep(1);
      else setActiveStep(2);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-gradient-to-b from-white via-white to-orange-50">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
        
        {/* Centered Header */}
        <div className="relative z-20 text-center pt-16 pb-8 px-6 max-w-4xl mx-auto">
            <span className="text-[#f7a022] font-bold tracking-widest uppercase text-sm mb-3 block">Job Ad</span>
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-[#2d3243]">Hire Fast in <span className="text-[#f7a022]">72 Hours</span></h2>
            <p className="text-xl text-slate-500 font-medium leading-relaxed">
                Simplify your recruiting process and find top talents FASTER.
            </p>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-12 items-center">
            
            {/* LEFT: Floating Photo Visual */}
            <div className="flex items-center justify-center relative h-full">
                 {/* Soft Glow Background */}
                 <div className="w-[400px] h-[400px] bg-orange-100 rounded-full blur-[80px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-60"></div>
                 
                 <div className="relative z-10 w-full max-w-md aspect-[4/3]">
                    {HIRE_FAST_STEPS.map((step, index) => (
                        <div 
                          key={step.id} 
                          className={`absolute inset-0 transition-all duration-700 ease-out ${activeStep === index ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-90'}`}
                        >
                            <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-1 hover:rotate-0 transition-transform duration-500 flex items-center justify-center bg-white">
                                <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                                
                                {/* Floating Badge on Image */}
                                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-3 rounded-xl shadow-lg flex items-center gap-4">
                                   <div className="p-2 bg-orange-100 rounded-full text-[#f7a022]">
                                      <step.icon className="w-6 h-6" />
                                   </div>
                                   <div>
                                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Feature</div>
                                      <div className="font-bold text-slate-900 text-lg">{step.title}</div>
                                   </div>
                                </div>
                            </div>
                        </div>
                    ))}
                 </div>
            </div>

            {/* RIGHT: Text Content (Points) */}
            <div className="flex flex-col justify-center px-8 lg:px-20 relative">
                 <div className="space-y-12">
                    {HIRE_FAST_STEPS.map((step, index) => (
                        <div 
                          key={step.id}
                          className={`transition-all duration-500 border-l-4 pl-8 py-2 ${activeStep === index ? 'border-[#f7a022] opacity-100 translate-x-0' : 'border-slate-200 opacity-40 translate-x-4'}`}
                        >
                           <div className="flex items-center gap-3 mb-2">
                              <div className={`p-1.5 rounded-lg ${activeStep === index ? 'bg-orange-100 text-[#f7a022]' : 'bg-slate-100 text-slate-400'}`}>
                                 <step.icon className="w-5 h-5" />
                              </div>
                              <h3 className={`text-2xl font-bold ${activeStep === index ? 'text-[#2d3243]' : 'text-slate-400'}`}>{step.title}</h3>
                           </div>
                           <p className="text-base text-slate-500 leading-relaxed font-light">{step.desc}</p>
                        </div>
                    ))}
                    
                    {/* Learn More Button */}
                    <div className="pt-8 pl-8">
                         <Button variant="primary" className="!text-lg !px-10 !py-4 shadow-xl shadow-orange-500/20">Learn More</Button>
                    </div>
                 </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default HireFastSection;