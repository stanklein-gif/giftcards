import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-aldi-yellow">AldiPromo</h3>
            <p className="text-gray-500 text-sm">
              Helping shoppers save more with exclusive Black Friday rewards and offers.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Official Rules</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-gray-300">Disclaimer</h4>
            <p className="text-xs text-gray-600">
              This is a third-party promotional offer. We are not directly affiliated with, endorsed, or sponsored by Aldi. Trademarks are property of their respective owners. Participation required.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-900 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {currentYear} RewardOrbit Promotions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;