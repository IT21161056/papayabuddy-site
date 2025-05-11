import React from 'react';
import { Award, TrendingUp, BarChart } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

const Achievements: React.FC = () => {
  const accuracyData = [
    { model: "EfficientNet B3", task: "Cercospora Leaf Spot", accuracy: 98.7 },
    { model: "Custom CNN", task: "Papaya Mosaic Virus", accuracy: 97.2 },
    { model: "Vision Transformer", task: "PRSV Classification", accuracy: 99.1 },
    { model: "DenseNet121", task: "Powdery Mildew", accuracy: 98.4 },
    { model: "YOLOv5", task: "Pest Detection", accuracy: 96.5 },
    { model: "MobileNetV3", task: "Maturity Classification", accuracy: 97.9 }
  ];

  const contributions = [
    {
      title: "Novel Data Augmentation Pipeline",
      description: "Developed a specialized data augmentation technique that simulates variable field conditions, improving model robustness by 12%.",
      icon: <TrendingUp className="h-6 w-6 text-yellow-500" />
    },
    {
      title: "Multi-stage Transfer Learning",
      description: "Implemented a progressive fine-tuning approach that achieved state-of-the-art accuracy with 40% less training data than comparable studies.",
      icon: <TrendingUp className="h-6 w-6 text-yellow-500" />
    },
    {
      title: "Weather-Aware Recommendation Engine",
      description: "Created a context-sensitive treatment suggestion system that adapts based on local weather conditions, improving treatment efficacy.",
      icon: <TrendingUp className="h-6 w-6 text-yellow-500" />
    },
    {
      title: "Optimized On-Device Inference",
      description: "Developed model optimization techniques that reduced inference time by 68% while maintaining >95% of original accuracy.",
      icon: <TrendingUp className="h-6 w-6 text-yellow-500" />
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Research Achievements" 
          subtitle="Results and Contributions"
        />
        
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
              <Award className="mr-2 text-yellow-500" />
              Performance Benchmarks
            </h3>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4 bg-green-50">
                <h4 className="font-bold text-gray-900">Model Accuracy Results</h4>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {accuracyData.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <div>
                          <span className="text-gray-800 font-medium">{item.model}</span>
                          <span className="text-gray-500 text-sm ml-2">({item.task})</span>
                        </div>
                        <span className="text-green-700 font-bold">{item.accuracy}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-green-600 h-2.5 rounded-full" 
                          style={{ width: `${item.accuracy}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 bg-yellow-50 p-4 rounded-lg">
                  <p className="text-gray-700 text-sm">
                    <span className="font-bold">Note:</span> All models were evaluated using 5-fold cross-validation 
                    on an independent test dataset collected from 12 different farms across Sri Lanka, 
                    ensuring robust performance metrics across varied environmental conditions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-xl font-bold text-green-800 mb-4 flex items-center">
                <BarChart className="mr-2 text-yellow-500" />
                Field Testing Results
              </h4>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-green-700">92%</p>
                    <p className="text-gray-600 text-sm">Detection Accuracy in Field Conditions</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-green-700">87%</p>
                    <p className="text-gray-600 text-sm">Effective Treatment Recommendations</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-green-700">68%</p>
                    <p className="text-gray-600 text-sm">Reduction in Response Time</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-green-700">5.3x</p>
                    <p className="text-gray-600 text-sm">Improved Early Detection Rate</p>
                  </div>
                </div>
                
                <p className="text-gray-700 text-sm">
                  Field testing was conducted with 65 farmers in North Central Province over a 
                  period of 6 months, comparing traditional detection methods with the PapayaBuddy 
                  application. Results demonstrate significant improvements in early detection, 
                  response time, and treatment efficacy.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-6">
              Key Contributions
            </h3>
            
            <div className="space-y-6">
              {contributions.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
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
            
            <div className="mt-10 bg-gradient-to-br from-green-50 to-yellow-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-green-800 mb-4">
                Student Research Achievements
              </h4>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-medium text-gray-900">Best Undergraduate Research Project</p>
                  <p className="text-gray-600 text-sm">Awarded by the Sri Lanka Institute of Information Technology, 2024</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-medium text-gray-900">Innovation in Agriculture Award</p>
                  <p className="text-gray-600 text-sm">National Science Foundation of Sri Lanka</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-medium text-gray-900">Publication in Computers and Electronics in Agriculture</p>
                  <p className="text-gray-600 text-sm">Research paper: "Deep Learning Approaches for Papaya Disease Detection in Resource-Constrained Environments"</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-medium text-gray-900">Presentation at International Conference on Computer Vision in Agriculture</p>
                  <p className="text-gray-600 text-sm">Selected for oral presentation in the emerging technologies track</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-100 rounded-lg">
                <p className="text-green-800 text-sm">
                  The project has led to an ongoing collaboration with the Department of Agriculture, 
                  Sri Lanka to explore wider deployment of the application across different agricultural 
                  extension services in the country.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;