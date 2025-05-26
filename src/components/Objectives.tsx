import React from "react";
import { CheckCircle, Target } from "lucide-react";
import SectionTitle from "./common/SectionTitle";

const Objectives: React.FC = () => {
  const mainObjectives = [
    {
      title: "Develop Accurate Disease Detection Models",
      description:
        "Create and optimize deep learning models for the identification of key papaya diseases with >95% accuracy in field conditions.",
      subObjectives: [
        "Implement transfer learning using EfficientNet and ViTs for Cercospora Leaf Spot and Mosaic Virus detection",
        "Develop custom CNN architecture for Papaya Ringspot Virus and  Powdery Mildew identification",
        "Create ensemble methods to improve detection robustness across variable conditions",
      ],
    },
    {
      title: "Design Effective Pest Identification System",
      description:
        "Build specialized object detection models to recognize and locate papaya pests with precise localization capabilities.",
      subObjectives: [
        "Adapt Densenet model to mite and mealy detection on mobile devices",
        "Implement augmentation techniques to improve model performance",
        "Develop a user-friendly mobile interface for pest identification",
      ],
    },
    {
      title: "Create Maturity Classification Solution",
      description:
        "Develop reliable computer vision system for determining optimal harvest timing based on visual papaya maturity indicators.",
      subObjectives: [
        "Train models to classify 4 distinct ripeness stages",
        "Create algorithms for ripeness estimation under variable lighting conditions",
        "Implement size and quality grading capabilities for market optimization",
      ],
    },
    {
      title: "Develop Remedy Recommendation Engine",
      description:
        "Build an intelligent system to provide contextual, weather-aware treatment recommendations based on detection results.",
      subObjectives: [
        "Create a database of Sri Lanka-specific treatment protocols for each condition",
        "Implement a rule-based system for treatment selection based on severity and context",
        "Develop weather integration to modify recommendations based on forecast conditions",
      ],
    },
    {
      title: "Build Integrated Mobile Application",
      description:
        "Develop a user-friendly mobile interface that makes advanced technology accessible to farmers with varied technical literacy.",
      subObjectives: [
        "Create intuitive UI/UX design with minimal text input requirements",
        "Support for English language",
        "Develop offline functionality for use in areas with limited connectivity",
      ],
    },
  ];

  return (
    <section
      id="objectives"
      className="py-12 sm:py-16 md:py-24 bg-gradient-to-br from-green-50 via-white to-green-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Research Objectives"
          subtitle="Key Goals and Milestones"
        />

        <div className="mt-12 sm:mt-16 md:mt-20 max-w-5xl mx-auto">
          <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-8 sm:mb-12">
            <Target className="h-8 w-8 sm:h-10 sm:w-10 text-green-600" />
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Primary Research Objective
            </h3>
          </div>

          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 mb-12 sm:mb-16 md:mb-20 text-center">
            <p className="text-base sm:text-lg md:text-xl text-gray-800 font-medium leading-relaxed">
              To develop an accessible, comprehensive mobile solution that
              enables Sri Lankan papaya farmers to accurately identify diseases,
              pests, and maturity levels using deep learning technologies, and
              receive contextually relevant treatment recommendations to improve
              crop yields and reduce losses.
            </p>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12 flex items-center justify-center">
            <CheckCircle className="mr-2 sm:mr-3 h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
            Specific Objectives
          </h3>

          <div className="grid gap-4 sm:gap-6 md:gap-8">
            {mainObjectives.map((objective, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200"
              >
                <div className="bg-gradient-to-r from-green-600 to-green-700 py-3 sm:py-4 px-4 sm:px-8">
                  <h4 className="text-white font-bold text-base sm:text-lg">
                    {objective.title}
                  </h4>
                </div>
                <div className="p-4 sm:p-6 md:p-8">
                  <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                    {objective.description}
                  </p>

                  <h5 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base">
                    Sub-objectives:
                  </h5>
                  <ul className="space-y-2 sm:space-y-3">
                    {objective.subObjectives.map((sub, sIndex) => (
                      <li key={sIndex} className="flex items-start">
                        <span className="text-green-600 mr-2 sm:mr-3 mt-1">
                          •
                        </span>
                        <span className="text-sm sm:text-base text-gray-600 leading-relaxed">
                          {sub}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 md:mt-20 bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
            <h4 className="font-bold text-lg sm:text-xl text-gray-900 mb-3 sm:mb-4">
              Success Criteria
            </h4>
            <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
              The project will be considered successful upon meeting the
              following criteria:
            </p>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Detection models achieve ≥99% accuracy in field conditions
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Mobile application successfully deployed with compatibility
                  for devices
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Field testing with farmers demonstrates
                  significant improvement in early disease detection rates
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Remedy recommendation engine provides appropriate solutions
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
