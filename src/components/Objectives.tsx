import React from 'react';
import { CheckCircle, Target } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

const Objectives: React.FC = () => {
  const mainObjectives = [
    {
      title: "Develop Accurate Disease Detection Models",
      description: "Create and optimize deep learning models for the identification of key papaya diseases with >95% accuracy in field conditions.",
      subObjectives: [
        "Implement transfer learning using EfficientNet for Cercospora Leaf Spot detection",
        "Develop custom CNN architecture for Papaya Mosaic Virus identification",
        "Create ensemble methods to improve detection robustness across variable conditions"
      ]
    },
    {
      title: "Design Effective Pest Identification System",
      description: "Build specialized object detection models to recognize and locate papaya pests with precise localization capabilities.",
      subObjectives: [
        "Adapt YOLOv5 architecture for real-time mite detection on mobile devices",
        "Implement instance segmentation for mealy bug population density estimation",
        "Develop pest lifecycle stage recognition for targeted treatment timing"
      ]
    },
    {
      title: "Create Maturity Classification Solution",
      description: "Develop reliable computer vision system for determining optimal harvest timing based on visual papaya maturity indicators.",
      subObjectives: [
        "Train models to classify 5 distinct ripeness stages with 97%+ accuracy",
        "Create algorithms for ripeness estimation under variable lighting conditions",
        "Implement size and quality grading capabilities for market optimization"
      ]
    },
    {
      title: "Develop Remedy Recommendation Engine",
      description: "Build an intelligent system to provide contextual, weather-aware treatment recommendations based on detection results.",
      subObjectives: [
        "Create a database of Sri Lanka-specific treatment protocols for each condition",
        "Implement a rule-based system for treatment selection based on severity and context",
        "Develop weather integration to modify recommendations based on forecast conditions"
      ]
    },
    {
      title: "Build Integrated Mobile Application",
      description: "Develop a user-friendly mobile interface that makes advanced technology accessible to farmers with varied technical literacy.",
      subObjectives: [
        "Create intuitive UI/UX design with minimal text input requirements",
        "Implement bilingual support for Sinhala and Tamil languages",
        "Develop offline functionality for use in areas with limited connectivity"
      ]
    }
  ];

  return (
    <section id="objectives" className="py-20 bg-gradient-to-br from-green-50 to-green-100">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Research Objectives" 
          subtitle="Key Goals and Milestones"
        />
        
        <div className="mt-16 flex flex-col items-center">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Target className="h-8 w-8 text-green-700" />
            <h3 className="text-2xl font-bold text-green-800">
              Primary Research Objective
            </h3>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-16 max-w-4xl text-center">
            <p className="text-xl text-green-900 font-medium leading-relaxed">
              To develop an accessible, comprehensive mobile solution that enables Sri Lankan papaya farmers 
              to accurately identify diseases, pests, and maturity levels using deep learning technologies, 
              and receive contextually relevant treatment recommendations to improve crop yields and reduce losses.
            </p>
          </div>
          
          <h3 className="text-2xl font-bold text-green-800 mb-8 flex items-center">
            <CheckCircle className="mr-2 text-yellow-500" />
            Specific Objectives
          </h3>
          
          <div className="space-y-8 w-full">
            {mainObjectives.map((objective, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="bg-green-700 py-3 px-6">
                  <h4 className="text-white font-bold">{objective.title}</h4>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">{objective.description}</p>
                  
                  <h5 className="font-medium text-green-800 mb-3">Sub-objectives:</h5>
                  <ul className="space-y-2">
                    {objective.subObjectives.map((sub, sIndex) => (
                      <li key={sIndex} className="flex items-start">
                        <span className="text-yellow-500 mr-2">•</span>
                        <span className="text-gray-600">{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 max-w-4xl">
            <h4 className="font-bold text-lg text-gray-900 mb-3">Success Criteria</h4>
            <p className="text-gray-700">
              The project will be considered successful upon meeting the following criteria:
            </p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-gray-700">
                  Detection models achieve ≥95% accuracy in field conditions (not just laboratory settings)
                </span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-gray-700">
                  Mobile application successfully deployed with compatibility for devices running Android 6.0+ (covering 94% of Sri Lankan farmer smartphones)
                </span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-gray-700">
                  Field testing with at least 50 farmers demonstrates significant improvement in early disease detection rates
                </span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-gray-700">
                  Remedy recommendation engine provides appropriate solutions in ≥90% of test cases
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Objectives;