import React from 'react';
import { RefreshCw, Globe, TrendingUp, Users } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

const FutureWork: React.FC = () => {
  const commercializationSteps = [
    {
      title: "Deployment Scaling",
      description: "Expanding infrastructure to support nationwide deployment with 10,000+ concurrent users.",
      timeline: "Q3 2025",
      status: "Planning"
    },
    {
      title: "Field Trials Extension",
      description: "Controlled deployment to 500 farmers across all agricultural zones in Sri Lanka.",
      timeline: "Q4 2025",
      status: "Scheduled"
    },
    {
      title: "Agricultural Extension Integration",
      description: "Partnership with Department of Agriculture to incorporate into official advisory services.",
      timeline: "Q1 2026",
      status: "Initial discussions"
    },
    {
      title: "Public Release",
      description: "General availability through app stores with freemium access model.",
      timeline: "Q2 2026",
      status: "Planned"
    }
  ];

  const futureResearch = [
    {
      title: "Expand to Additional Crops",
      description: "Adapt and retrain models for other economically significant crops including mango, banana, and coconut.",
      icon: <Globe className="h-6 w-6 text-green-600" />
    },
    {
      title: "Incorporate Satellite Imagery",
      description: "Integrate multispectral satellite data to enable large-scale monitoring and early warning systems for disease outbreaks.",
      icon: <RefreshCw className="h-6 w-6 text-green-600" />
    },
    {
      title: "Develop Predictive Analytics",
      description: "Create forecasting models to predict disease outbreaks based on historical patterns and environmental conditions.",
      icon: <TrendingUp className="h-6 w-6 text-green-600" />
    },
    {
      title: "Community Knowledge Platform",
      description: "Build a collaborative platform for farmers to share experiences and contribute to a growing knowledge base.",
      icon: <Users className="h-6 w-6 text-green-600" />
    }
  ];

  return (
    <section id="future" className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Commercialization & Future Work" 
          subtitle="Expanding Impact and Research Directions"
        />
        
        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-6">
              Commercialization Roadmap
            </h3>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-green-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                      Phase
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                      Timeline
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {commercializationSteps.map((step, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{step.title}</div>
                        <div className="text-sm text-gray-500">{step.description}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-gray-900">{step.timeline}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          {step.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-10 bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-green-800 mb-4">
                Commercial Impact Potential
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500 mt-1"></div>
                  <div className="ml-4">
                    <p className="text-gray-700">
                      <strong>Economic Benefits:</strong> Potential to increase papaya production value by 
                      approximately 200-300 million LKR annually through reduced losses and improved yields.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500 mt-1"></div>
                  <div className="ml-4">
                    <p className="text-gray-700">
                      <strong>Environmental Impact:</strong> Targeted interventions could reduce pesticide 
                      usage by up to 40%, decreasing environmental contamination and promoting sustainable 
                      farming practices.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500 mt-1"></div>
                  <div className="ml-4">
                    <p className="text-gray-700">
                      <strong>Food Security:</strong> Improving disease management in a key food crop 
                      contributes directly to Sri Lanka's food security objectives and helps stabilize 
                      market prices for consumers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-6">
              Future Research Directions
            </h3>
            
            <div className="space-y-6">
              {futureResearch.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start">
                    <div className="mt-1">{item.icon}</div>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-700 mt-1">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 bg-yellow-100 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-yellow-800 mb-4">
                Challenges & Opportunities
              </h4>
              
              <div className="space-y-4">
                <p className="text-gray-800">
                  <strong>Technical Challenges:</strong> Maintaining model accuracy across diverse 
                  environmental conditions and papaya varieties remains a significant challenge. Future 
                  work will focus on continuous model improvement through active learning approaches.
                </p>
                
                <p className="text-gray-800">
                  <strong>Adoption Barriers:</strong> Digital literacy among older farmers presents an 
                  adoption challenge. We're exploring simplified user interfaces and community-based 
                  training programs to address this barrier.
                </p>
                
                <p className="text-gray-800">
                  <strong>Research Opportunities:</strong> The dataset collected during this project 
                  represents one of the largest labeled collections of tropical crop disease images, 
                  creating opportunities for broader research in agricultural AI applications for 
                  developing regions.
                </p>
                
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <p className="text-green-800 font-medium text-center">
                    "PapayaBuddy represents a significant step toward democratizing advanced 
                    agricultural technology for smallholder farmers, with potential applications 
                    extending far beyond its current scope."
                  </p>
                  <p className="text-right text-sm text-gray-600 mt-2">
                    — Dr. Kamal Perera, Agricultural Research Institute
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

export default FutureWork;