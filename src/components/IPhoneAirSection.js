import React from 'react';

const IPhoneAirSection = () => {
  return (
    <section className="product-section bg-apple-light-gray">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-apple-gray mb-4">
            iPhone Air
          </h2>
          <p className="text-xl md:text-2xl text-apple-text-gray mb-2">
            The thinnest iPhone ever.
          </p>
          <p className="text-xl md:text-2xl text-apple-text-gray mb-8">
            With the power of pro inside.
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
        
        {/* iPhone Air image */}
        <div className="flex justify-center items-center">
          <div className="relative">
            {/* Hand holding the phone */}
            <div className="relative">
              <div className="w-80 h-20 md:w-96 md:h-24 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg shadow-lg">
                {/* Phone details */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg">
                  <div className="absolute left-2 top-1/2 transform -translate-y-1/2 w-2 h-8 bg-gray-400 rounded-full"></div>
                  <div className="absolute left-2 top-1/2 transform -translate-y-1/2 translate-y-4 w-2 h-4 bg-gray-400 rounded-full"></div>
                  <div className="absolute left-2 top-1/2 transform -translate-y-1/2 -translate-y-4 w-2 h-4 bg-gray-400 rounded-full"></div>
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-12 bg-gray-400 rounded-full"></div>
                </div>
              </div>
              
              {/* Hand */}
              <div className="absolute -right-20 -top-8 w-32 h-32 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full transform rotate-12">
                <div className="absolute top-8 left-8 w-16 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-t-full"></div>
                <div className="absolute top-12 left-4 w-4 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full transform -rotate-12"></div>
                <div className="absolute top-10 left-12 w-4 h-14 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full transform rotate-12"></div>
                <div className="absolute top-8 left-16 w-4 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full transform rotate-24"></div>
                <div className="absolute top-12 left-20 w-4 h-12 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full transform rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IPhoneAirSection;