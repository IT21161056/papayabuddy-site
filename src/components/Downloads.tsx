import React from 'react';
import { FileDown, FileText, Database, Presentation } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

const Downloads: React.FC = () => {
  const resources = [
    {
      title: "Research Paper",
      description: "Complete academic paper with methodology, results and analysis",
      icon: <FileText className="h-10 w-10 text-green-600" />,
      fileType: "PDF",
      fileSize: "2.4 MB",
      link: "#"
    },
    {
      title: "Presentation Slides",
      description: "Project presentation with key findings and visual aids",
      icon: <Presentation className="h-10 w-10 text-green-600" />,
      fileType: "PPTX",
      fileSize: "18.7 MB",
      link: "#"
    },
    {
      title: "Dataset Information",
      description: "Details about the dataset collection and preprocessing methodology",
      icon: <Database className="h-10 w-10 text-green-600" />,
      fileType: "PDF",
      fileSize: "1.2 MB",
      link: "#"
    },
    {
      title: "Research Poster",
      description: "High-resolution poster presented at ICML 2024",
      icon: <FileText className="h-10 w-10 text-green-600" />,
      fileType: "PDF",
      fileSize: "5.8 MB",
      link: "#"
    }
  ];

  return (
    <section id="downloads" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Downloads" 
          subtitle="Research Materials and Resources"
        />
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-green-800 mb-8 flex items-center justify-center">
              <FileDown className="mr-2 text-yellow-500" />
              Available Resources
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 transition-all hover:shadow-md"
                >
                  <div className="p-6 flex items-center">
                    <div className="flex-shrink-0">
                      {resource.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900">{resource.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                      <div className="flex items-center mt-2 text-xs text-gray-500">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded font-medium mr-2">
                          {resource.fileType}
                        </span>
                        <span>{resource.fileSize}</span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t border-gray-200">
                    <a
                      href={resource.link}
                      className="block p-3 text-center text-green-700 hover:text-green-800 hover:bg-green-50 transition-colors font-medium"
                    >
                      <span className="flex items-center justify-center">
                        <FileDown className="h-4 w-4 mr-2" />
                        Download
                      </span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 bg-yellow-50 p-5 rounded-lg">
              <h4 className="font-bold text-gray-900 mb-2">Access Information</h4>
              <p className="text-gray-700 text-sm">
                The research materials provided here are available for academic and research purposes.
                Please cite the original publication when using these resources in your work:
              </p>
              <div className="mt-3 p-3 bg-white rounded text-sm font-mono text-gray-700">
                Perera, et al. (2024). "PapayaBuddy: A Deep Learning-Based Mobile Application for Papaya 
                Disease, Pest, and Maturity Identification." Journal of Agricultural Informatics, 14(2), 45-62.
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Request Additional Materials
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Downloads;