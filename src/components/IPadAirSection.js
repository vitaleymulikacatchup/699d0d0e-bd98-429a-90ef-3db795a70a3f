import React from 'react';

const IPadAirSection = () => {
  return (
    <section className="product-section bg-apple-sky">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-apple-gray mb-4">
            iPad <span className="font-light italic">air</span>
          </h2>
          <p className="text-xl md:text-2xl text-apple-text-gray mb-8">
            Now supercharged by the M3 chip.
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
        
        {/* iPad Air image */}
        <div className="flex justify-center items-center">
          <div className="relative">
            {/* Multiple iPads stacked */}
            <div className="relative">
              {/* Back iPad */}
              <div className="w-64 h-80 md:w-80 md:h-100 bg-white rounded-2xl shadow-xl transform rotate-12 absolute">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-4">
                  <div className="w-full h-full bg-white rounded-xl"></div>
                </div>
              </div>
              
              {/* Middle iPad */}
              <div className="w-64 h-80 md:w-80 md:h-100 bg-white rounded-2xl shadow-xl transform rotate-6 absolute left-8">
                <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-4">
                  <div className="w-full h-full bg-white rounded-xl"></div>
                </div>
              </div>
              
              {/* Front iPad */}
              <div className="w-64 h-80 md:w-80 md:h-100 bg-white rounded-2xl shadow-2xl relative z-10 left-16">
                <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center">
                    <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-white bg-opacity-40 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IPadAirSection;