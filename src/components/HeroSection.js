import React from 'react';

const HeroSection = () => {
  return (
    <section className="hero-section bg-black text-white relative overflow-hidden">
      <div className="section-padding max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            iPhone 17 Pro
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            All out Pro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="apple-button-primary text-lg px-8 py-4">
              Learn more
            </button>
            <button className="apple-button-secondary text-lg px-8 py-4">
              Buy
            </button>
          </div>
        </div>
        
        {/* iPhone image */}
        <div className="flex justify-center mt-16">
          <div className="relative">
            <div className="w-80 h-96 md:w-96 md:h-112 bg-gradient-to-b from-orange-400 to-orange-600 rounded-3xl shadow-2xl transform perspective-1000 rotate-x-12">
              {/* Camera module */}
              <div className="absolute top-6 left-6 right-6">
                <div className="bg-orange-500 rounded-2xl p-4 shadow-inner">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="w-12 h-12 bg-black rounded-full shadow-lg"></div>
                    <div className="w-12 h-12 bg-black rounded-full shadow-lg"></div>
                    <div className="w-12 h-12 bg-black rounded-full shadow-lg"></div>
                    <div className="w-6 h-6 bg-gray-200 rounded-full ml-auto"></div>
                  </div>
                  <div className="w-3 h-3 bg-black rounded-full mt-2 ml-auto mr-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;