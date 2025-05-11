import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  lightMode?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, lightMode = false }) => {
  return (
    <div className="text-center mb-6">
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${lightMode ? 'text-white' : 'text-green-800'}`}>
        {title}
      </h2>
      <p className={`text-xl ${lightMode ? 'text-yellow-200' : 'text-gray-600'}`}>
        {subtitle}
      </p>
      <div className="mt-6 flex justify-center">
        <div className={`h-1 w-24 rounded ${lightMode ? 'bg-yellow-300' : 'bg-yellow-500'}`}></div>
      </div>
    </div>
  );
};

export default SectionTitle;