import React from 'react';
import { Users, ExternalLink, GraduationCap, Leaf } from 'lucide-react';
import SectionTitle from './common/SectionTitle';
import vikum from '../assets/vikum.jpeg';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Kamal Perera",
      role: "Lead Researcher",
      expertise: "Computer Vision, Deep Learning",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      links: [
        { platform: "LinkedIn", url: "#" },
        { platform: "ResearchGate", url: "#" },
        { platform: "GitHub", url: "#" }
      ]
    },
    {
      name: "Anushka Silva",
      role: "ML Engineer",
      expertise: "Model Optimization, TensorFlow",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      links: [
        { platform: "LinkedIn", url: "#" },
        { platform: "GitHub", url: "#" }
      ]
    },
    {
      name: "Vikum Viraj",
      role: "Undergraduate Researcher",
      image: vikum,
      links: [
        { platform: "LinkedIn", url: "https://www.linkedin.com/in/vikum-viraj/" },
        { platform: "GitHub", url: "https://github.com/Vikum-Viraj" }
      ]
    },
    {
      name: "Dilini Jayawardena",
      role: "Agriculture Expert",
      expertise: "Plant Pathology, Crop Management",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      links: [
        { platform: "LinkedIn", url: "#" },
        { platform: "ResearchGate", url: "#" }
      ]
    }
  ];

  const supervisors = [
    {
      name: "Dr. Pradeep Weerasinghe",
      title: "Research Supervisor",
      department: "Faculty of Computing, SLIIT",
      expertise: "Artificial Intelligence, Machine Learning",
      image: "https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Dr. Samanthi Bandara",
      title: "Co-Supervisor",
      department: "Department of Agriculture",
      expertise: "Plant Diseases, Tropical Agriculture",
      image: "https://images.pexels.com/photos/7642000/pexels-photo-7642000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Research Team" 
          subtitle="Meet the People Behind PapayaBuddy"
        />
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center justify-center">
            <Users className="mr-2 text-yellow-500" />
            Student Researchers
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-xl text-gray-900">{member.name}</h4>
                  <p className="text-green-700 font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.expertise}</p>
                  
                  <div className="flex space-x-2">
                    {member.links.map((link, lIndex) => (
                      <a 
                        key={lIndex} 
                        href={link.url}
                        className="text-green-600 hover:text-green-800 text-sm flex items-center"
                      >
                        {link.platform}
                        <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <h3 className="text-2xl font-bold text-green-800 mt-16 mb-6 flex items-center justify-center">
            <GraduationCap className="mr-2 text-yellow-500" />
            Research Supervisors
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {supervisors.map((supervisor, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md overflow-hidden flex">
                <div className="w-1/3">
                  <img 
                    src={supervisor.image} 
                    alt={supervisor.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-2/3 p-6">
                  <h4 className="font-bold text-xl text-gray-900">{supervisor.name}</h4>
                  <p className="text-green-700 font-medium">{supervisor.title}</p>
                  <p className="text-gray-500 text-sm mb-3">{supervisor.department}</p>
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">Expertise:</span> {supervisor.expertise}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-green-50 p-8 rounded-lg max-w-4xl mx-auto">
            <h4 className="text-xl font-bold text-green-800 mb-4 text-center">
              Institutional Support
            </h4>
            
            <p className="text-gray-700 text-center mb-6">
              This research was conducted at the Sri Lanka Institute of Information Technology 
              with support from the Department of Agriculture, Sri Lanka.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="text-center">
                <div className="h-24 w-24 bg-white p-4 rounded-full shadow-sm mx-auto flex items-center justify-center">
                  <div className="font-bold text-green-800 text-2xl">SLIIT</div>
                </div>
                <p className="mt-2 text-sm text-gray-600">Sri Lanka Institute of Information Technology</p>
              </div>
              
              <div className="text-center">
                <div className="h-24 w-24 bg-white p-4 rounded-full shadow-sm mx-auto flex items-center justify-center">
                  <Leaf className="h-12 w-12 text-green-600" />
                </div>
                <p className="mt-2 text-sm text-gray-600">Department of Agriculture</p>
              </div>
              
              <div className="text-center">
                <div className="h-24 w-24 bg-white p-4 rounded-full shadow-sm mx-auto flex items-center justify-center">
                  <div className="font-bold text-green-800 text-2xl">NSF</div>
                </div>
                <p className="mt-2 text-sm text-gray-600">National Science Foundation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;