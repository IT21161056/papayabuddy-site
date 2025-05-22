import React from 'react';
import { LineChart, Sprout } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

const ProjectScope: React.FC = () => {
  return (
    <section id="scope" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Project Scope" 
          subtitle="Understanding the Agricultural Impact"
        />
        
        <div className="grid md:grid-cols-2 gap-10 items-center mt-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-green-800">
              Sri Lanka's Papaya Cultivation Landscape
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Papaya cultivation represents a significant sector in Sri Lanka's agricultural economy,
              with over 5,000 hectares dedicated to its production. However, farmers face persistent
              challenges from diseases and pests that can destroy up to 40% of annual yields.
            </p>
            
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="bg-green-100 p-3 rounded-full">
                <LineChart className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Economic Impact</h4>
                <p className="text-gray-600">
                  Annual losses exceeding 500 million LKR due to inadequate disease detection
                  and management practices affecting small-scale farmers disproportionately.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="bg-green-100 p-3 rounded-full">
                <Sprout className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900">Societal Need</h4>
                <p className="text-gray-600">
                  Early intervention using technology can significantly improve crop yields,
                  enhance food security, and increase income for rural communities across the country.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative h-80 md:h-full overflow-hidden rounded-xl shadow-lg">
            <img 
              src="https://images-cdn.ubuy.co.in/63fd5eb98af6bb0cf050bc03-maradol-papaya-tree-seeds-delicious.jpg" 
              alt="Papaya farming in Sri Lanka" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-900/80 to-transparent p-6">
              <p className="text-white text-sm">
                Papaya plantation in central Sri Lanka, where farmers use traditional methods
                for disease detection that PapayaBuddy aims to revolutionize.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-green-800 mb-4">
            The Need for Real-Time, Intelligent Detection
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Current methods of disease and pest identification rely heavily on expert knowledge,
            which is often inaccessible to remote farming communities. PapayaBuddy addresses this
            gap by providing an accessible, mobile-based solution that brings advanced machine
            learning capabilities directly to farmers' fingertips, enabling:
          </p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
              <span className="text-gray-700">Early detection of diseases before visible symptoms develop</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
              <span className="text-gray-700">Precise identification of pests with targeted treatment recommendations</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
              <span className="text-gray-700">Accurate maturity assessment to optimize harvesting schedules</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
              <span className="text-gray-700">Reduced chemical usage through targeted intervention strategies</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectScope;