import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-800 to-green-600 text-white"
    >
      <div 
        className="absolute inset-0 bg-black opacity-40 z-0"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/5529599/pexels-photo-5529599.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        }}
      ></div>
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="mb-4 animate-fadeIn">
          <span className="inline-block py-1 px-3 bg-yellow-500 text-green-900 rounded-full text-sm font-medium">Research Project</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slideUp">
          <span className="block">PapayaBuddy</span>
          <span className="block text-xl md:text-2xl font-normal mt-3 text-yellow-300">
            A Deep Learning-Based Mobile Application for Papaya Disease, Pest, and Maturity Identification
          </span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-slideUp animation-delay-200">
          Enhancing Sri Lankan agriculture through machine learning and mobile technology, 
          offering real-time detection and solutions for papaya cultivation challenges.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slideUp animation-delay-400">
          <a
            href="#solution"
            className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold rounded-lg shadow-lg transition-all duration-300 transform hover:translate-y-1"
          >
            Explore the App
          </a>
          <a
            href="#methodology"
            className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-green-700 font-semibold rounded-lg transition-all duration-300"
          >
            View Research
          </a>
        </div>
      </div>
      <a
        href="#scope"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;