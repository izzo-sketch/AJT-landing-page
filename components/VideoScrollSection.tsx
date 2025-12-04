import React, { useState, useEffect, useRef } from 'react';
import { ProductSuiteItem } from '../types';
import Button from './Button';

interface VideoScrollSectionProps {
  products: ProductSuiteItem[];
}

const VideoScrollSection: React.FC<VideoScrollSectionProps> = ({ products }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionHeight = containerRect.height;
      const stepHeight = sectionHeight / products.length;

      // Calculate relative scroll position within the component
      // We want to know how far down we've scrolled into the component
      // top is negative as we scroll down
      const scrollY = -containerRect.top;
      
      // Determine index based on scroll position
      // We add a small offset (viewportHeight * 0.3) so the change happens slightly before the exact boundary
      let newIndex = Math.floor((scrollY + viewportHeight * 0.3) / stepHeight);

      // Clamp index between 0 and products.length - 1
      newIndex = Math.max(0, Math.min(newIndex, products.length - 1));

      // Special case: If the section is just entering the viewport (top > 0), ensure index 0 is active
      if (containerRect.top > 0) {
        newIndex = 0;
      }

      setActiveIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initially
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [products.length]);

  return (
    <div ref={containerRef} className="relative bg-slate-900" style={{ height: `${products.length * 100}vh` }}>
      {/* Sticky Content Area */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
        
        {/* Background Videos/Images */}
        {products.map((product, idx) => (
           <div key={idx} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === activeIndex ? 'opacity-100' : 'opacity-0'}`}>
              <div className="absolute inset-0 bg-black/60 z-10" /> 
              <img 
                src={product.thumbnail} 
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <video 
                src={product.video} 
                poster={product.thumbnail}
                muted 
                loop 
                autoPlay 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover" 
              />
           </div>
        ))}

        {/* Section Header */}
        <div className="absolute top-0 left-0 w-full z-20 pt-8 text-center pointer-events-none px-4">
            <span className="text-[#f7a022] font-bold tracking-widest uppercase text-xs md:text-sm mb-2 block">AI Hiring Solutions</span>
            <h2 className="text-5xl md:text-6xl font-black text-white">The AJobThing <span className="text-[#f7a022]">Suite</span></h2>
        </div>

        {/* Centered Content Card */}
        <div className="relative z-30 w-full max-w-7xl mx-auto px-6 h-full flex items-center justify-center pointer-events-none">
           {products.map((product, idx) => (
             <div 
                key={idx} 
                className={`absolute w-full max-w-2xl transition-all duration-700 transform ${
                  idx === activeIndex 
                    ? 'opacity-100 translate-y-0 scale-100 delay-100' 
                    : idx < activeIndex 
                      ? 'opacity-0 -translate-y-8 scale-95' 
                      : 'opacity-0 translate-y-8 scale-95'
                }`}
             >
                <div className="bg-slate-900/60 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-3xl text-white shadow-2xl pointer-events-auto">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-2 h-10 rounded-full ${product.color.replace('text-', 'bg-').replace('400', '500')}`}></div>
                      <h3 className={`text-4xl md:text-5xl font-bold text-white`}>{product.title}</h3>
                    </div>
                    <p className="text-xl leading-relaxed text-slate-200 mb-10 font-light">{product.desc}</p>
                    <Button variant="primary" className="!text-lg !px-10 !py-4 shadow-lg shadow-orange-500/20 hover:scale-105 transform">Explore {product.title}</Button>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default VideoScrollSection;