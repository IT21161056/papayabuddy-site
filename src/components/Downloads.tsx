import React from 'react';
import { FileDown, FileText, Database, Presentation } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

const Downloads: React.FC = () => {
  const resources = [
    {
      title: "Final Report",
      description: "Comprehensive guide to identifying and treating common papaya diseases",
      icon: <FileText className="h-10 w-10 text-green-600" />,
      fileType: "PDF",
      fileSize: "4.2 MB",
      link: "/downloads/Final Report.pdf"
    },
    {
      title: "Pest Management Manual",
      description: "Detailed manual for managing papaya pests and insects",
      icon: <FileText className="h-10 w-10 text-green-600" />,
      fileType: "PDF",
      fileSize: "3.8 MB",
      link: "/downloads/pest-management-manual.pdf"
    },
    {
      title: "Harvesting Guide",
      description: "Complete guide to papaya harvesting and post-harvest handling",
      icon: <FileText className="h-10 w-10 text-green-600" />,
      fileType: "PDF",
      fileSize: "2.9 MB",
      link: "/downloads/harvesting-guide.pdf"
    },
    {
      title: "Growing Best Practices",
      description: "Best practices for papaya cultivation and maintenance",
      icon: <FileText className="h-10 w-10 text-green-600" />,
      fileType: "PDF",
      fileSize: "5.1 MB",
      link: "/downloads/growing-best-practices.pdf"
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
            
            <a href='https://drive.google.com/drive/u/2/folders/1CBjoVimDPPi_X4175uJX0w4_fmh3wKIc'>
            Research Resources
            </a>
            
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