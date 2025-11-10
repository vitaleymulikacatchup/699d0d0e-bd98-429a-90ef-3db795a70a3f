import React from 'react';

const AppleTVSection = () => {
  return (
    <section className="py-8">
      <div className="section-padding max-w-7xl mx-auto">
        {/* Main Apple TV+ banner */}
        <div className="relative bg-yellow-400 rounded-3xl overflow-hidden mb-4 h-96 md:h-112">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-500">
            <div className="flex items-center justify-between h-full px-8 md:px-16">
              <div className="text-left">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 mr-2 text-black" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span className="text-2xl font-bold text-black">tv</span>
                </div>
              </div>
              
              <div className="text-center flex-1">
                <h2 className="text-4xl md:text-6xl font-bold text-black mb-4">
                  PLURIBUS
                </h2>
                <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200">
                  Watch now
                </button>
              </div>
              
              <div className="text-right">
                <div className="flex items-center">
                  <svg className="w-8 h-8 mr-2 text-black" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span className="text-2xl font-bold text-black">tv</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom row of shows */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-green-400 rounded-2xl h-32 md:h-40 flex items-end p-4">
            <span className="text-white font-bold text-sm">Coming soon</span>
          </div>
          
          <div className="bg-gray-900 rounded-2xl h-32 md:h-40 flex flex-col justify-between p-4">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span className="text-white font-bold text-sm">tv+</span>
            </div>
            <div>
              <p className="text-white text-xs mb-1">Bad Monkey: The First Look</p>
              <p className="text-gray-400 text-xs">8/14/2024</p>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-2xl h-32 md:h-40 flex flex-col justify-between p-4">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span className="text-white font-bold text-sm">tv+</span>
            </div>
            <div>
              <p className="text-white text-xs mb-1">The Buccaneers</p>
              <p className="text-gray-400 text-xs">8/14/2024</p>
            </div>
          </div>
          
          <div className="bg-gray-900 rounded-2xl h-32 md:h-40 flex flex-col justify-between p-4">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span className="text-white font-bold text-sm">tv+</span>
            </div>
            <div>
              <p className="text-white text-xs mb-1">Slow Horses</p>
              <p className="text-gray-400 text-xs">8/14/2024</p>
            </div>
          </div>
          
          <div className="bg-pink-500 rounded-2xl h-32 md:h-40 flex flex-col justify-between p-4">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <span className="text-white font-bold text-sm">tv+</span>
            </div>
            <div>
              <p className="text-white text-xs mb-1">Shrinking</p>
              <p className="text-gray-400 text-xs">8/14/2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppleTVSection;