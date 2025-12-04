import React, { useRef, useState } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { ProductSuiteItem } from '../types';

interface ProductCardProps {
  product: ProductSuiteItem;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log("Video play prevented:", e));
    }
  };

  const handleMouseLeave = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div 
      className={`relative rounded-3xl overflow-hidden group cursor-pointer h-64 md:h-80 ${product.colSpan}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Media */}
      <div className="absolute inset-0 bg-slate-900">
        <img 
          src={product.thumbnail} 
          alt={product.title} 
          className={`w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-0' : 'opacity-60'}`}
        />
        <video
          ref={videoRef}
          src={product.video}
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isPlaying ? 'opacity-60' : 'opacity-0'}`}
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end z-20 bg-gradient-to-t from-black/80 via-transparent to-transparent">
        <div className={`transform transition-all duration-500 ${isPlaying ? '-translate-y-2' : 'translate-y-4'}`}>
          <div className="flex items-center justify-between mb-2">
             <h3 className={`text-2xl font-bold text-white group-hover:text-[#f7a022] transition-colors`}>{product.title}</h3>
             <div className={`w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 ${isPlaying ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                <ArrowRight className="w-4 h-4" />
             </div>
          </div>
          <p className={`text-slate-300 text-sm leading-relaxed transition-all duration-500 ${isPlaying ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'}`}>
            {product.desc}
          </p>
        </div>
      </div>
      
      {/* Play Icon Hint (visible when not playing) */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/50 transition-all duration-300 ${isPlaying ? 'opacity-0 scale-150' : 'opacity-100 scale-100'}`}>
         <PlayCircle className="w-12 h-12" />
      </div>
    </div>
  );
};

export default ProductCard;