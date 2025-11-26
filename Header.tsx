import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-bf-black/95 backdrop-blur-sm border-b border-gray-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            {/* Logo Approximation using text and icons */}
            <div className="flex items-center gap-2">
              <div className="bg-aldi-blue p-2 rounded text-white shadow-lg shadow-aldi-blue/20">
                <ShoppingCart size={24} />
              </div>
              <span className="font-bold text-2xl text-white tracking-tight">
                Aldi<span className="text-aldi-orange">Promo</span>
              </span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs font-bold text-bf-red uppercase tracking-widest">Black Friday</span>
            <span className="text-sm text-gray-400 font-medium">Limited Time</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;