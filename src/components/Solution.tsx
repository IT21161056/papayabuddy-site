import React from 'react';
import { ShieldCheck, Smartphone, BrainCircuit, CloudCog } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

const Solution: React.FC = () => {
  const problemSolutions = [
    {
      title: "Disease Detection",
      problems: ["Cercospora Leaf Spot", "Papaya Mosaic Virus"],
      description: "Our models can detect early symptoms of common fungal and viral diseases before they become visible to the naked eye, allowing for preventative treatment.",
      accuracy: "98.3%",
      icon: <ShieldCheck className="h-10 w-10 text-green-600" />
    },
    {
      title: "Disease Classification",
      problems: ["Papaya Ring Spot Virus (PRSV)", "Powdery Mildew"],
      description: "Advanced image classification algorithms identify specific disease types and severity levels, enabling targeted treatment protocols.",
      accuracy: "99.1%",
      icon: <BrainCircuit className="h-10 w-10 text-green-600" />
    },
    {
      title: "Pest Identification",
      problems: ["Papaya Mites", "Mealy Bugs"],
      description: "Real-time detection of common pests with precise localization and population density estimation to guide appropriate intervention strategies.",
      accuracy: "96.7%",
      icon: <ShieldCheck className="h-10 w-10 text-green-600" />
    },
    {
      title: "Maturity Assessment",
      problems: ["Suboptimal Harvesting", "Post-Harvest Losses"],
      description: "Computer vision algorithms assess fruit maturity levels with precision, optimizing harvest timing for maximum yield and quality.",
      accuracy: "97.9%",
      icon: <CloudCog className="h-10 w-10 text-green-600" />
    }
  ];

  return (
    <section id="solution" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Research Problem & Proposed Solution" 
          subtitle="Innovative Approach to Papaya Cultivation Challenges"
        />
        
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-6">
              Core Problems Addressed
            </h3>
            
            <div className="space-y-8">
              {problemSolutions.map((item, index) => (
                <div key={index} className="flex">
                  <div className="mr-4 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                    <div className="mb-2 flex flex-wrap gap-2">
                      {item.problems.map((problem, pIndex) => (
                        <span 
                          key={pIndex} 
                          className="inline-block px-3 py-1 text-sm bg-red-100 text-red-800 rounded-full"
                        >
                          {problem}
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                    <p className="mt-2 text-green-700 font-medium">
                      Detection Accuracy: {item.accuracy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-xl border border-green-100">
              <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                <Smartphone className="mr-3 text-yellow-500" />
                Proposed Solution
              </h3>
              
              <p className="text-gray-700 mb-6">
                PapayaBuddy offers a comprehensive mobile application that integrates multiple specialized 
                deep learning models into a single, easy-to-use interface for Sri Lankan papaya farmers.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-900">Hybrid Deep Learning System</h4>
                  <p className="text-gray-600 text-sm">
                    Combining the strengths of EfficientNet, Vision Transformers, DenseNet and MobileNet 
                    architectures for optimal performance across different detection tasks.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-900">Real-time Processing</h4>
                  <p className="text-gray-600 text-sm">
                    On-device inference capabilities allow for diagnosis even in areas with limited 
                    connectivity, with cloud synchronization when available.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-900">Contextual Recommendations</h4>
                  <p className="text-gray-600 text-sm">
                    Treatment suggestions tailored to the Sri Lankan context, considering locally 
                    available solutions and weather conditions.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold text-gray-900">User-Friendly Interface</h4>
                  <p className="text-gray-600 text-sm">
                    Designed for farmers with limited technical expertise, featuring support for 
                    Sinhala and Tamil languages and minimal data entry requirements.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.pexels.com/photos/3473569/pexels-photo-3473569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Mobile app for papaya disease detection" 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h4 className="font-bold text-xl mb-2">Flutter-based Mobile Application</h4>
                  <p className="text-sm">
                    The PapayaBuddy app runs on both Android and iOS devices, with a focus on performance 
                    and usability in field conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;