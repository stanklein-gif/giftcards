import React, { useState, useEffect } from 'react';
import Button from './Button';
import { AFFILIATE_LINK } from '../constants';

const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-bf-black/90 backdrop-blur-md border-t border-gray-800 shadow-[0_-4px_20px_rgba(0,0,0,0.5)] z-50 md:hidden animate-fade-in-up">
      <Button href={AFFILIATE_LINK} fullWidth variant="primary">
        Claim $500 Gift Card
      </Button>
    </div>
  );
};

export default StickyCTA;