import React from 'react';
import { AlertCircle, ArrowUpRight } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

const ResearchGap: React.FC = () => {
  const limitations = [
    {
      title: "Limited Disease Coverage",
      description: "Existing solutions typically focus on a single disease or pest rather than providing comprehensive coverage.",
      icon: <AlertCircle className="h-6 w-6 text-red-500" />
    },
    {
      title: "Laboratory Constraints",
      description: "Many current models perform well in controlled environments but fail in real-world field conditions with variable lighting and backgrounds.",
      icon: <AlertCircle className="h-6 w-6 text-red-500" />
    },
    {
      title: "Lack of Integrated Solutions",
      description: "Most approaches only identify problems without offering remedy suggestions or contextual treatment options.",
      icon: <AlertCircle className="h-6 w-6 text-red-500" />
    },
    {
      title: "Disconnected from Local Context",
      description: "Generic solutions often ignore Sri Lanka-specific growing conditions, varieties, and treatment availability.",
      icon: <AlertCircle className="h-6 w-6 text-red-500" />
    },
    {
      title: "Mobile Accessibility Barriers",
      description: "Existing models are too computationally intensive for practical deployment on affordable mobile devices used by farmers.",
      icon: <AlertCircle className="h-6 w-6 text-red-500" />
    },
    {
      title: "Maturity Assessment Limitations",
      description: "Few solutions address the crucial economic aspect of optimal harvest timing through objective maturity assessment.",
      icon: <AlertCircle className="h-6 w-6 text-red-500" />
    }
  ];

  return (
    <section id="gap" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Research Gap" 
          subtitle="Limitations in Current Approaches"
        />
        
        <div className="mt-16 mb-12 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-green-800 mb-4">
            Critical Analysis of Existing Solutions
          </h3>
          <p className="text-gray-700">
            Our comprehensive literature review identified several key limitations in current 
            approaches to papaya disease and pest detection. While significant advances have been made
            in applying computer vision to agricultural challenges, several important gaps remain that
            PapayaBuddy addresses:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {limitations.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start mb-4">
                {item.icon}
                <h4 className="ml-2 text-lg font-bold text-gray-900">{item.title}</h4>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
          <h3 className="text-xl font-bold text-green-800 mb-4">
            Justification for a Mobile-First, AI Integrated Approach
          </h3>
          <div className="space-y-4">
            <p className="text-gray-700">
              These limitations highlight the need for a comprehensive solution specifically designed for 
              the Sri Lankan agricultural context. An integrated approach combining multiple specialized
              deep learning models with contextual remedy suggestions can address the full spectrum of 
              papaya cultivation challenges.
            </p>
            <p className="text-gray-700">
              Mobile accessibility is particularly crucial in Sri Lanka, where 94% of farmers have access 
              to smartphones but limited connectivity to agricultural extension services. By delivering 
              advanced AI capabilities through a mobile application, PapayaBuddy democratizes access to 
              cutting-edge agricultural technology for smallholder farmers.
            </p>
            <div className="mt-6">
              <a 
                href="#solution" 
                className="inline-flex items-center text-green-700 font-medium hover:text-green-800"
              >
                See how our solution addresses these gaps
                <ArrowUpRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchGap;