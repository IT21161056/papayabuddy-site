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
        
        <div className="mt-16 grid md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
              <Book className="mr-2 text-yellow-500" />
              Key Research Methods
            </h3>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg text-gray-900 mb-3">Convolutional Neural Networks (CNNs)</h4>
                <p className="text-gray-700">
                  CNNs have demonstrated exceptional performance in image classification tasks for plant
                  disease detection, with architectures like ResNet and VGG showing particular promise
                  for identifying visual patterns associated with papaya diseases.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg text-gray-900 mb-3">EfficientNet & Vision Transformers</h4>
                <p className="text-gray-700">
                  Recent advancements in computer vision have introduced more efficient architectures
                  that reduce computational overhead while maintaining high accuracy, making them
                  suitable for mobile deployment in agricultural applications.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg text-gray-900 mb-3">YOLO-based Object Detection</h4>
                <p className="text-gray-700">
                  For pest identification, YOLO (You Only Look Once) models have proven effective
                  in real-time detection scenarios, providing both localization and classification
                  capabilities essential for in-field applications.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold text-lg text-gray-900 mb-3">Transfer Learning Approaches</h4>
                <p className="text-gray-700">
                  Leveraging pre-trained models on large datasets and fine-tuning them for specific
                  agricultural contexts has shown promising results in overcoming limited training data
                  availability for tropical crop diseases.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
              <GraduationCap className="mr-2 text-yellow-500" />
              Influential Research
            </h3>
            
            <div className="overflow-hidden shadow-sm border border-gray-200 rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-green-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                      Paper
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                      Method
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-green-800 uppercase tracking-wider">
                      Accuracy
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {researchPapers.map((paper, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{paper.title}</div>
                        <div className="text-sm text-gray-500">{paper.authors}, {paper.year}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {paper.methodology}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {paper.accuracy}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-bold text-lg text-gray-900 mb-3">Importance of AI in Precision Farming</h4>
              <p className="text-gray-700">
                The literature consistently highlights the transformative potential of AI-driven
                solutions in agricultural contexts, particularly for smallholder farmers in developing
                regions. By integrating computer vision with expert knowledge, systems can provide
                actionable insights that were previously available only through specialized agricultural
                extension services.
              </p>
              <p className="mt-3 text-gray-700">
                PapayaBuddy builds upon this foundation by creating a comprehensive system that not
                only detects problems but also provides context-aware solutions tailored to Sri Lankan
                growing conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiteratureSurvey;