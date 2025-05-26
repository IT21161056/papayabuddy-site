import React from 'react';
import { Book, GraduationCap } from 'lucide-react';
import SectionTitle from './common/SectionTitle';

const LiteratureSurvey: React.FC = () => {
  const researchPapers = [
    {
      title: "Deep Learning for Plant Disease Detection",
      authors: "Kumar et al.",
      year: 2021,
      journal: "IEEE Access",
      methodology: "CNN, Transfer Learning",
      accuracy: "94.5%"
    },
    {
      title: "Vision Transformers for Precision Agriculture",
      authors: "Ramachandran et al.",
      year: 2022,
      journal: "Agriculture Research",
      methodology: "ViT, EfficientNet",
      accuracy: "97.2%"
    },
    {
      title: "YOLO-based Pest Detection in Tropical Crops",
      authors: "Perera et al.",
      year: 2020,
      journal: "Computer Vision in Agriculture",
      methodology: "YOLOv5",
      accuracy: "91.8%"
    },
    {
      title: "Mobile Applications for Agricultural Disease Management",
      authors: "Fernando et al.",
      year: 2022,
      journal: "Mobile Computing Applications",
      methodology: "Flutter, TensorFlow Lite",
      accuracy: "89.3%"
    }
  ];
  
  return (
    <section id="literature" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Literature Survey" 
          subtitle="Research Foundation and Key References"
        />
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div>
            <h3 className="text-xl lg:text-2xl font-bold text-green-800 mb-4 lg:mb-6 flex items-center justify-center">
              <Book className="mr-2 text-yellow-500" />
              Key Research Methods
            </h3>
            
            <div className="space-y-4 lg:space-y-6">
              <div className="bg-gray-50 p-4 lg:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 className="font-bold text-base lg:text-lg text-gray-900 mb-2 lg:mb-3">Convolutional Neural Networks (CNNs)</h4>
                <p className="text-sm lg:text-base text-gray-700">
                  CNNs have demonstrated exceptional performance in image classification tasks for plant
                  disease detection, with architectures like ResNet and VGG showing particular promise
                  for identifying visual patterns associated with papaya diseases.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 lg:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 className="font-bold text-base lg:text-lg text-gray-900 mb-2 lg:mb-3">EfficientNet & Vision Transformers</h4>
                <p className="text-sm lg:text-base text-gray-700">
                  Recent advancements in computer vision have introduced more efficient architectures
                  that reduce computational overhead while maintaining high accuracy, making them
                  suitable for mobile deployment in agricultural applications.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 lg:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 className="font-bold text-base lg:text-lg text-gray-900 mb-2 lg:mb-3">YOLO-based Object Detection</h4>
                <p className="text-sm lg:text-base text-gray-700">
                  For pest identification, YOLO (You Only Look Once) models have proven effective
                  in real-time detection scenarios, providing both localization and classification
                  capabilities essential for in-field applications.
                </p>
              </div>
              
              <div className="bg-gray-50 p-4 lg:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <h4 className="font-bold text-base lg:text-lg text-gray-900 mb-2 lg:mb-3">Transfer Learning Approaches</h4>
                <p className="text-sm lg:text-base text-gray-700">
                  Leveraging pre-trained models on large datasets and fine-tuning them for specific
                  agricultural contexts has shown promising results in overcoming limited training data
                  availability for tropical crop diseases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiteratureSurvey;