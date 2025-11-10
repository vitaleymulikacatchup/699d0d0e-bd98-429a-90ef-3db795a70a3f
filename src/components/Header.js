import React, { useState } from 'react';
import { Menu, X, Search, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    'Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods', 'TV & Home', 'Entertainment', 'Accessories', 'Support'
  ];

  return (
    <>
      {/* Top banner */}
      <div className="bg-apple-gray text-white text-sm py-2 px-4 text-center">
        <span>Vill att sända ditt gamla för att vi ska använda som byten så du är och handla online.</span>
        <select className="ml-2 bg-transparent border border-gray-600 rounded px-2 py-1 text-xs">
          <option>Sverige</option>
        </select>
        <button className="ml-2 text-xs underline">Fortsätt</button>
        <button className="ml-4 text-gray-400 hover:text-white">
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Main header */}
      <header className="bg-black bg-opacity-80 backdrop-blur-md sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Apple logo */}
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-gray-300 transition-colors duration-200">
                <Search className="w-5 h-5" />
              </button>
              <button className="text-white hover:text-gray-300 transition-colors duration-200">
                <ShoppingCart className="w-5 h-5" />
              </button>
              
              {/* Mobile menu button */}
              <button
                className="md:hidden text-white hover:text-gray-300 transition-colors duration-200"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-white hover:text-gray-300 block px-3 py-2 text-base font-medium transition-colors duration-200"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;