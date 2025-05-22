import React from 'react';

const technologies = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
  { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
];

const Technologies: React.FC = () => {
  return (
    <section id="technologies" className="py-20 bg-gradient-to-br from-green-50 to-green-100 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Technologies We Use</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our tech stack combines cutting-edge machine learning frameworks with robust 
            development tools to deliver a powerful and scalable solution.
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll gap-12 py-8">
            {[...technologies, ...technologies].map((tech, index) => (
              <div 
                key={`tech-${index}`}
                className="flex flex-col items-center justify-center min-w-[120px] p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
              >
                <img 
                  src={tech.logo} 
                  alt={tech.name} 
                  className="w-16 h-16 object-contain"
                />
                <span className="mt-2 text-sm font-medium text-gray-600">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-green-100 rounded-full px-6 py-3">
            <p className="text-green-800 font-medium">
              Built with modern technologies for optimal performance and scalability
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies; 