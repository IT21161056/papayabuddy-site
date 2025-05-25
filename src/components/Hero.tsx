import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-800 to-green-600 text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-black opacity-40 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-[5] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-20 lg:py-0">
        {/* Content Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="mb-4 sm:mb-6 animate-fadeIn">
            <span className="inline-block py-1.5 px-4 bg-yellow-500 text-green-900 rounded-full text-sm font-semibold shadow-lg">
              Research Project
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 animate-slideUp">
            <span className="block">PapayaBuddy</span>
            <span className="block text-lg sm:text-xl lg:text-2xl font-normal mt-3 text-yellow-300">
              A Deep Learning-Based Mobile Application for Papaya Disease, Pest, and Maturity Identification
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-10 animate-slideUp animation-delay-200">
            Enhancing Sri Lankan agriculture through machine learning and mobile technology, 
            offering real-time detection and solutions for papaya cultivation challenges.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 animate-slideUp animation-delay-400">
            <a
              href="#solution"
              className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold rounded-lg shadow-lg transition-all duration-300 transform hover:translate-y-1 text-base"
            >
              Explore the App
            </a>
            <a
              href="#methodology"
              className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-green-700 font-semibold rounded-lg transition-all duration-300 text-base"
            >
              View Research
            </a>
          </div>
        </div>

        {/* Dynamic Image Grid */}
        <div className="hidden lg:block w-1/2 relative">
          <div className="relative h-[600px] xl:h-[700px]">
            <div className="absolute top-0 right-[-30px] w-[400px] h-[500px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 z-[2]">
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800" 
                alt="Papaya Plant" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-[120px] left-[-30px] w-[250px] h-[250px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 hover:-rotate-2 transition-all duration-500 z-[1]">
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800" 
                alt="Papaya Fruit" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-[100px] left-[40px] w-[200px] h-[400px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 hover:rotate-2 transition-all duration-500 z-[3]">
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800" 
                alt="Agriculture" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-[400px] right-[60px] w-[180px] h-[180px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 hover:-rotate-1 transition-all duration-500 z-[2]">
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800" 
                alt="Technology" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-[40px] right-[120px] w-[280px] h-[200px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 z-[1]">
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800" 
                alt="Mobile App" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-[280px] left-[120px] w-[140px] h-[140px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 hover:-rotate-2 transition-all duration-500 z-[4]">
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800" 
                alt="Research" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute top-[200px] right-[160px] w-[160px] h-[240px] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 hover:rotate-1 transition-all duration-500 z-[3]">
              <img 
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800" 
                alt="Innovation" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#scope"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce z-[5]"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
