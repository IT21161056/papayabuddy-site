import React from 'react';
import { FileDown, FileText, Database, } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

const Downloads: React.FC = () => {
  const resources = [
    {
      title: "Topic Assessment",
      description: "Initial assessment and analysis of the papaya disease identification project",
      icon: <FileText className="h-10 w-10 text-green-600" />,
      fileType: "PDF",
      link: "/downloads/topic-assessment.pdf"
    },
    {
      title: "Project Charter",
      description: "Official project charter outlining objectives, scope, and stakeholders",
      icon: <FileText className="h-10 w-10 text-green-600" />,
      fileType: "PDF",
      link: "/downloads/project-charter.pdf"
    },
    {
      title: "Project Proposal",
      description: "Detailed proposal for the papaya disease identification system",
      icon: <FileText className="h-10 w-10 text-green-600" />,
      fileType: "PDF",
      link: "https://drive.google.com/drive/folders/1U3g03Evre3sCnhd9YI_OtRippX7lOsQ_?usp=sharing"
    },
    {
      title: "Status Documents I",
      description: "First set of project status reports and progress updates",
      icon: <FileText className="h-10 w-10 text-green-600" />,
      fileType: "PDF",
      link: "/downloads/status-documents-i.pdf"
    },
    {
      title: "Status Documents II",
      description: "Second set of project status reports and progress updates",
      icon: <FileText className="h-10 w-10 text-green-600" />,
      fileType: "PDF",
      link: "/downloads/status-documents-ii.pdf"
    },
    {
      title: "Research Paper",
      description: "Academic research paper on papaya disease identification using deep learning",
      icon: <FileText className="h-10 w-10 text-green-600" />,
      fileType: "PDF",
      link: "/downloads/research-paper.pdf"
    },
    {
      title: "Final Report",
      description: "Comprehensive final report of the papaya disease identification project",
      icon: <FileText className="h-10 w-10 text-green-600" />,
      fileType: "PDF",
      link: "/downloads/final-report.pdf"
    }
  ];

  return (
    <section id="documents" className="py-20 bg-gray-50">
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {resources.map((resource, index) => (
                <div 
                  key={index} 
                  className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:border-green-200 hover:-translate-y-1"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-green-50 p-3 rounded-lg group-hover:bg-green-100 transition-colors">
                      {resource.icon}
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between items-start">
                        <h4 className="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                          {resource.title}
                        </h4>
                        <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                          {resource.fileType}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                        {resource.description}
                      </p>
                      <div className="mt-4 flex justify-end">
                        <a
                          href={resource.link}
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all duration-200 hover:shadow-md"
                          download
                        >
                          <FileDown className="mr-2 h-4 w-4" />
                          Download
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* <a href='https://drive.google.com/drive/u/2/folders/1CBjoVimDPPi_X4175uJX0w4_fmh3wKIc'>
            Research Resources
            </a>
            
            <div className="mt-10 bg-yellow-50 p-6 rounded-xl border border-yellow-100">
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Downloads;