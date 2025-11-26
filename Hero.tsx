import React from 'react';
import { CheckCircle, Zap } from 'lucide-react';
import Button from './Button';
import { AFFILIATE_LINK, OFFER_AMOUNT } from '../constants';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-bf-black overflow-hidden pt-10 pb-16 sm:pb-24">
      {/* Dynamic Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
         <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-bf-red/20 rounded-full blur-[100px] opacity-40 animate-pulse"></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-aldi-blue/20 rounded-full blur-[100px] opacity-40"></div>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-bf-red/10 text-bf-red mb-6 border border-bf-red/30 animate-pulse-fast shadow-[0_0_15px_rgba(220,38,38,0.3)]">
              <Zap className="w-4 h-4 mr-2 fill-current" />
              <span className="text-sm font-bold uppercase tracking-wide">Black Friday Limited Offer</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-aldi-orange to-yellow-400">{OFFER_AMOUNT}</span> <br/>
              Aldi Shopping Spree
            </h1>
            
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Don't miss the biggest shopping event of the year. Inflation is high, but we've got you covered. Qualify instantly for this exclusive Black Friday reward.
            </p>

            <div className="mt-8 space-y-4 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5 backdrop-blur-sm">
                <CheckCircle className="text-aldi-yellow w-5 h-5 mr-3 flex-shrink-0" />
                <span className="font-medium">Valid at all US locations</span>
              </div>
              <div className="flex items-center text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5 backdrop-blur-sm">
                <CheckCircle className="text-aldi-yellow w-5 h-5 mr-3 flex-shrink-0" />
                <span className="font-medium">Use for groceries & special buys</span>
              </div>
              <div className="flex items-center text-gray-300 bg-white/5 p-3 rounded-lg border border-white/5 backdrop-blur-sm">
                <CheckCircle className="text-aldi-yellow w-5 h-5 mr-3 flex-shrink-0" />
                <span className="font-medium">No purchase necessary to enter</span>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href={AFFILIATE_LINK} withIcon fullWidth className="sm:w-auto text-xl py-5 shadow-[0_0_30px_rgba(220,38,38,0.4)] border border-bf-red/50 hover:scale-105 transition-transform">
                Claim {OFFER_AMOUNT} Now
              </Button>
            </div>
            
            <p className="mt-6 text-xs text-gray-500 font-mono">
              *Limited quantity. High demand expected. Terms apply.
            </p>
          </div>

          {/* Stunning Gift Card Visual */}
          <div className="order-1 lg:order-2 flex justify-center perspective-[1000px]">
             <div className="relative group w-full max-w-md aspect-[1.586/1] transition-all duration-500 transform hover:scale-105 hover:rotate-y-6 hover:rotate-x-6">
                
                {/* Glow behind card */}
                <div className="absolute -inset-4 bg-gradient-to-r from-aldi-blue via-bf-red to-aldi-orange opacity-30 blur-2xl rounded-[30px] group-hover:opacity-50 transition-opacity duration-500"></div>

                {/* Main Card Container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.8)] border border-white/10 bg-[#0a1020]">
                    
                    {/* Metallic/Dark Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#003b8e] via-[#001838] to-[#000000]"></div>
                    
                    {/* Texture Overlay */}
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay"></div>
                    
                    {/* Radial sheen */}
                    <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>

                    {/* Card Content Grid */}
                    <div className="relative h-full p-6 sm:p-8 flex flex-col justify-between z-10">
                        
                        {/* Top Bar */}
                        <div className="flex justify-between items-start">
                             <div className="flex items-center gap-3">
                                {/* Aldi Logo Styled */}
                                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-b from-[#002C6A] to-[#001838] rounded-lg border border-white/20 shadow-lg flex items-center justify-center relative overflow-hidden">
                                     <div className="absolute inset-0 bg-aldi-blue opacity-50"></div>
                                     <span className="relative z-10 text-white font-black text-[10px] sm:text-xs tracking-tighter scale-y-110">ALDI</span>
                                     <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg sm:text-xl tracking-wide shadow-black drop-shadow-md">ALDI</h3>
                                    <p className="text-gray-300 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-light">Grocery Card</p>
                                </div>
                             </div>
                             
                             {/* Black Friday Badge */}
                             <div className="bg-gradient-to-r from-bf-red to-red-800 text-white text-[10px] font-bold px-3 py-1 rounded-full border border-red-400/30 shadow-[0_0_15px_rgba(220,38,38,0.5)] flex items-center gap-1">
                                <Zap size={10} fill="currentColor" />
                                <span>BLACK FRIDAY</span>
                             </div>
                        </div>

                        {/* Chip & Contactless */}
                        <div className="flex items-center justify-between mt-2">
                             <div className="w-12 h-9 sm:w-16 sm:h-12 bg-gradient-to-tr from-[#d4af37] via-[#f7e48d] to-[#bfa034] rounded-md border border-[#8a7118] shadow-inner relative overflow-hidden group-hover:brightness-110 transition-all">
                                 <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_20%,rgba(0,0,0,0.1)_20%,rgba(0,0,0,0.1)_21%)]"></div>
                                 <div className="absolute top-1/2 left-0 right-0 h-px bg-yellow-900/40"></div>
                                 <div className="absolute left-1/2 top-0 bottom-0 w-px bg-yellow-900/40"></div>
                                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-6 border border-yellow-900/40 rounded-sm"></div>
                             </div>
                             <div className="text-white/40">
                                <svg className="w-8 h-8 sm:w-10 sm:h-10 rotate-90" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" opacity="0.3"/>
                                    <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
                                </svg>
                             </div>
                        </div>

                        {/* Value & Number */}
                        <div className="mt-auto">
                             <div className="font-mono text-white/40 text-sm sm:text-lg tracking-[0.2em] mb-2 sm:mb-4 shadow-black drop-shadow-sm">
                                **** **** **** 8294
                             </div>
                             <div className="flex justify-between items-end">
                                <div>
                                    <span className="block text-[10px] text-aldi-orange font-bold uppercase tracking-widest mb-0.5">Card Value</span>
                                    <span className="text-4xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-100 to-gray-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-sans">
                                        {OFFER_AMOUNT}
                                    </span>
                                </div>
                                <div className="flex -space-x-3 opacity-90">
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-red-500/80 backdrop-blur-sm mix-blend-screen shadow-lg"></div>
                                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-yellow-500/80 backdrop-blur-sm mix-blend-screen shadow-lg"></div>
                                </div>
                             </div>
                        </div>

                    </div>

                    {/* Holographic Shine Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>
                    <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none"></div>
                </div>
             </div>
             
             {/* Reflection below */}
             <div className="absolute -bottom-8 w-[90%] h-4 bg-black/50 blur-xl rounded-[100%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;