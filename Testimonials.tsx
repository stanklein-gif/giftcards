import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <div className="bg-bf-black py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-white mb-12">
          Black Friday Winners
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-bf-card rounded-xl p-6 shadow-lg border border-gray-800 hover:border-gray-700 transition-colors">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 mr-1 ${i < t.rating ? 'text-yellow-500 fill-current' : 'text-gray-600'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6">"{t.text}"</p>
              <div className="flex items-center">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-10 h-10 rounded-full mr-3 border-2 border-bf-red/50"
                />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <span className="text-xs text-gray-500 uppercase">{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;