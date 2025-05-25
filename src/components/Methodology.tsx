import React from "react";
import { Code, Database, FlaskConical, Camera } from "lucide-react";
import SectionTitle from "./common/SectionTitle";

const Methodology: React.FC = () => {
  const architectures = [
    {
      name: "EfficientNet B3",
      application: "Binary Classification",
      description:
        "Utilized for initial binary classification of healthy vs. diseased papaya images.",
      performance: "98.2% accuracy",
    },
    {
      name: "Vision Transformer (ViT)",
      application: "Leaf disease detection",
      description:
        "Used for Cercospora and Mosaic Virus detection, optimized for local features.",
      performance: "99% accuracy",
    },
    {
      name: "Custom CNN",
      application: "Fruit disease Detection",
      description:
        "Used for PRSV and Powdery Mildew detection, optimized for local features.",
      performance: "99% accuracy",
    },
    {
      name: "Densenet",
      application: "Pest disease Detection",
      description:
        "Used for Mite and Mealy detection, optimized for local features.",
      performance: "99% accuracy",
    },
    {
      name: "MobileNetV3",
      application: "Fruit maturity detection",
      description: "Optimized for mobile deployment with minimal latency.",
      performance: "99% accuracy",
    },
  ];

  const dataProcessing = [
    {
      title: "Data Collection",
      description:
        "Over 15,000 papaya images were collected across various regions of Sri Lanka, representing different varieties, growing conditions, and disease stages.",
    },
    {
      title: "Annotation",
      description:
        "Expert agricultural scientists from the University of Peradeniya manually annotated images to create a high-quality labeled dataset.",
    },
    {
      title: "Augmentation",
      description:
        "Implemented extensive data augmentation techniques including rotation, scaling, flipping, and color adjustments to improve model robustness.",
    },
    {
      title: "Validation",
      description:
        "Used 5-fold cross-validation to ensure model generalizability across different farm environments and conditions.",
    },
  ];

  const tools = [
    { name: "TensorFlow 2.x", category: "ML Framework" },
    { name: "Keras", category: "API" },
    { name: "PyTorch", category: "ML Framework" },
    { name: "Flutter", category: "Mobile Development" },
    { name: "ViTs", category: "Vision Transformers" },
    { name: "MongoDB", category: "Database" },
    { name: "Docker", category: "Containerization" },
    { name: "CNNs", category: "Convolutional Neural Networks" },
    { name: "Weather API", category: "External Service" },
  ];

  return (
    <section id="methodology" className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <SectionTitle
          title="Research Methodology"
          subtitle="Technical Approach and Implementation"
        />

        <div className="mt-8 sm:mt-12 md:mt-16 grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-4 sm:mb-6 flex items-center">
              <Code className="mr-2 text-yellow-500 h-5 w-5 sm:h-6 sm:w-6" />
              Model Architectures
            </h3>

            <div className="space-y-4 sm:space-y-6">
              {architectures.map((arch, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-5 rounded-lg shadow-sm border border-gray-100"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                        {arch.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-green-700">
                        {arch.application}
                      </p>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      {arch.performance}
                    </span>
                  </div>
                  <p className="mt-2 sm:mt-3 text-gray-600 text-xs sm:text-sm">
                    {arch.description}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-green-800 mt-8 sm:mt-12 mb-4 sm:mb-6 flex items-center">
              <Database className="mr-2 text-yellow-500 h-5 w-5 sm:h-6 sm:w-6" />
              Data Processing Pipeline
            </h3>

            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-green-200"></div>

              <div className="space-y-4 sm:space-y-6">
                {dataProcessing.map((step, index) => (
                  <div key={index} className="relative pl-10 sm:pl-12">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-1.5 w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center border-2 border-green-300">
                      <span className="text-green-700 font-bold text-xs sm:text-sm">
                        {index + 1}
                      </span>
                    </div>

                    <h4 className="font-bold text-gray-900 text-sm sm:text-base">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-green-800 mb-4 sm:mb-6 flex items-center">
              <FlaskConical className="mr-2 text-yellow-500 h-5 w-5 sm:h-6 sm:w-6" />
              Techniques Employed
            </h3>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6 sm:mb-8">
              <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-3 sm:mb-4">
                Transfer Learning
              </h4>
              <p className="text-gray-700 text-xs sm:text-sm">
                Pre-trained models on ImageNet were fine-tuned on our
                specialized papaya dataset, significantly reducing training time
                and improving performance with limited data. We implemented
                progressive fine-tuning, gradually unfreezing deeper layers
                while adjusting learning rates accordingly.
              </p>

              <div className="mt-4 sm:mt-6 border-t border-gray-100 pt-3 sm:pt-4">
                <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-3 sm:mb-4">
                  Data Augmentation
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div className="bg-gray-50 p-2 sm:p-3 rounded">
                    <p className="text-xs sm:text-sm text-gray-700">
                      Geometric Transformations
                    </p>
                    <ul className="text-xs text-gray-600 mt-1 list-disc list-inside">
                      <li>Rotation (±30°)</li>
                      <li>Scaling (0.8-1.2x)</li>
                      <li>Flipping (horizontal)</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-2 sm:p-3 rounded">
                    <p className="text-xs sm:text-sm text-gray-700">
                      Color Adjustments
                    </p>
                    <ul className="text-xs text-gray-600 mt-1 list-disc list-inside">
                      <li>Brightness (±20%)</li>
                      <li>Contrast (±15%)</li>
                      <li>Hue/Saturation (±10%)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-4 sm:mt-6 border-t border-gray-100 pt-3 sm:pt-4">
                <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-3 sm:mb-4">
                  Real-time Processing
                </h4>
                <p className="text-gray-700 text-xs sm:text-sm">
                  Implemented TensorFlow Lite model conversion and quantization
                  to reduce model size by up to 75% while maintaining accuracy
                  above 95%. This enables real-time inference on mid-range
                  mobile devices with processing times under 300ms per image.
                </p>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-green-800 mt-8 sm:mt-12 mb-4 sm:mb-6 flex items-center">
              <Camera className="mr-2 text-yellow-500 h-5 w-5 sm:h-6 sm:w-6" />
              Implementation Workflow
            </h3>

            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/5926400/pexels-photo-5926400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Machine Learning workflow diagram"
                  className="rounded-lg mb-4 sm:mb-6 h-32 sm:h-48 w-full object-cover opacity-20"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-sm sm:text-lg text-gray-800 font-medium text-center px-4 sm:px-8">
                    Image → Preprocessing → Model Inference → Post-processing →
                    Recommendation
                  </p>
                </div>
              </div>

              <h4 className="font-bold text-gray-900 text-sm sm:text-base mb-2 sm:mb-3">
                Tools & Technologies
              </h4>
              <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                {tools.map((tool, index) => (
                  <span
                    key={index}
                    className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gray-100 text-gray-800 rounded-full"
                  >
                    {tool.name}
                    <span className="text-xs text-gray-500 ml-1">
                      ({tool.category})
                    </span>
                  </span>
                ))}
              </div>

              <p className="text-gray-700 text-xs sm:text-sm">
                The mobile application is built using Flutter for cross-platform
                deployment, with TensorFlow Lite for on-device inference.
                Backend services are deployed on Azure, using MongoDB for data
                storage and retrieval. Weather API integration provides
                contextual information for treatment recommendations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
