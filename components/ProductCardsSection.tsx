import React from 'react';
import { ProductSuiteItem } from '../types';
import { ArrowRight } from 'lucide-react';

interface ProductCardsSectionProps {
  products: ProductSuiteItem[];
}

const ProductCardsSection: React.FC<ProductCardsSectionProps> = ({ products }) => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
         <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#f7a022] font-bold tracking-widest uppercase text-sm mb-3 block">Recruitment Tools</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">Complete Your <span className="text-[#f7a022]">Hiring Ecosystem</span></h2>
         </div>
         <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, idx) => (
               <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full">
                  <div className="h-56 overflow-hidden relative">
                     <img src={product.thumbnail} alt={product.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                     <div className="absolute bottom-4 left-4 text-white font-bold text-lg opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                        View Details
                     </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                     <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-[#f7a022] transition-colors">{product.title}</h3>
                     <p className="text-slate-500 mb-8 leading-relaxed flex-grow">{product.desc}</p>
                     <div className="mt-auto pt-6 border-t border-slate-100">
                        <button className="flex items-center gap-2 font-bold text-slate-900 group-hover:text-[#f7a022] transition-colors">
                            Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </button>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default ProductCardsSection;