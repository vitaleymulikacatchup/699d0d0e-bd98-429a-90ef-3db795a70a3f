import React from 'react';

const ProductGrid = () => {
  return (
    <section className="py-8">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* AirPods Pro 3 */}
          <div className="bg-apple-light-gray rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-apple-gray mb-2">
              AirPods Pro 3
            </h3>
            <p className="text-lg text-apple-text-gray mb-2">
              The world's best in-ear
            </p>
            <p className="text-lg text-apple-text-gray mb-8">
              Active Noise Cancellation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button className="apple-button-primary">
                Learn more
              </button>
              <button className="apple-button-secondary">
                Buy
              </button>
            </div>
            
            {/* AirPods image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-32 h-40 bg-white rounded-2xl shadow-lg transform -rotate-12">
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-16 bg-white rounded-full shadow-md"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-100 rounded-full"></div>
                </div>
                <div className="w-32 h-40 bg-white rounded-2xl shadow-lg transform rotate-12 absolute top-0 left-8">
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-6 h-16 bg-white rounded-full shadow-md"></div>
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gray-100 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Apple Watch Series 11 */}
          <div className="bg-apple-light-gray rounded-3xl p-8 md:p-12 text-center">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <h3 className="text-3xl md:text-4xl font-bold text-apple-gray">
                WATCH SERIES 11
              </h3>
            </div>
            <p className="text-lg text-apple-text-gray mb-8">
              The ultimate way to watch your health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button className="apple-button-primary">
                Learn more
              </button>
              <button className="apple-button-secondary">
                Buy
              </button>
            </div>
            
            {/* Apple Watch image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-32 h-40 bg-gradient-to-br from-blue-900 to-black rounded-3xl shadow-xl">
                  <div className="absolute inset-2 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="absolute -right-1 top-8 w-2 h-8 bg-gray-600 rounded-r-full"></div>
                  <div className="absolute -right-1 bottom-12 w-2 h-6 bg-gray-600 rounded-r-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* iPad Pro */}
          <div className="bg-black rounded-3xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-2">
              iPad Pro
            </h3>
            <p className="text-lg text-gray-300 mb-2">
              Advanced M4 performance
            </p>
            <p className="text-lg text-gray-300 mb-8">
              and game-changing capabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="apple-button-primary">
                Learn more
              </button>
              <button className="bg-transparent border border-white text-white hover:bg-white hover:text-black apple-button">
                Buy
              </button>
            </div>
          </div>

          {/* MacBook Pro 14" */}
          <div className="bg-black rounded-3xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-2">
              MacBook Pro 14"
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Supercharged by M4 Pro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="apple-button-primary">
                Learn more
              </button>
              <button className="bg-transparent border border-white text-white hover:bg-white hover:text-black apple-button">
                Buy
              </button>
            </div>
          </div>

          {/* Trade In */}
          <div className="bg-apple-light-gray rounded-3xl p-8 md:p-12 text-center">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <h3 className="text-3xl md:text-4xl font-bold text-apple-gray">
                Trade In
              </h3>
            </div>
            <p className="text-lg text-apple-text-gray mb-2">
              Get up to $800-900
            </p>
            <p className="text-lg text-apple-text-gray mb-2">
              in credit when you trade in
            </p>
            <p className="text-lg text-apple-text-gray mb-8">
              iPhone 14 or higher.*
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="apple-button-primary">
                Get your estimate
              </button>
            </div>
          </div>

          {/* Apple Card */}
          <div className="bg-apple-light-gray rounded-3xl p-8 md:p-12 text-center">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <h3 className="text-3xl md:text-4xl font-bold text-apple-gray">
                Card
              </h3>
            </div>
            <p className="text-lg text-apple-text-gray mb-2">
              Get up to 3% Daily Cash back
            </p>
            <p className="text-lg text-apple-text-gray mb-8">
              with every Apple Card purchase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="apple-button-primary">
                Learn more
              </button>
              <button className="apple-button-secondary">
                Apply now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;