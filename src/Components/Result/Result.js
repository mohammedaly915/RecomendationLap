// ResultPage.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaChartBar, FaCheckCircle, FaList, FaRobot } from 'react-icons/fa';
import AILoadingSimulation from '../Loading/AILoadingSimulation';

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state?.result || { 
    predicted_strategy: "No recommendation available", 
    probabilities: {} 
  };
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Simulate 2 seconds of AI processing
    return () => clearTimeout(timer);
  }, []);

// Strategy implementation steps
const strategySteps = {
  "Phased Financing and Scalable Solutions": [
    {
      title: "Assess Laboratory Needs",
      description: "Identify priority areas for AI integration based on operational bottlenecks and potential return on investment (ROI)."
    },
    {
      title: "Develop a Phased Implementation Plan",
      description: "Adopt a step-by-step approach, starting with essential AI functionalities (e.g., workflow automation, data management)."
    },
    {
      title: "Choose Scalable AI Platforms",
      description: "Select modular AI systems that allow gradual expansion without significant upfront investment."
    },
    {
      title: "Explore Financing Options",
      description: "Partner with AI vendors offering flexible payment plans, grants, or public-private collaborations."
    },
    {
      title: "Monitor and Evaluate ROI",
      description: "Track cost savings, efficiency improvements, and performance metrics at each implementation stage."
    }
  ],
  "Ethical Compliance Frameworks": [
    {
      title: "Establish Data Governance Policies",
      description: "Develop clear protocols for data access, processing, and storage in line with international standards (e.g., GDPR, HIPAA)."
    },
    {
      title: "Ensure Informed Consent",
      description: "Implement mechanisms for obtaining patient consent for data use in AI-driven processes."
    },
    {
      title: "Adopt Explainable AI (XAI)",
      description: "Prioritize AI models that provide transparent, interpretable outputs."
    },
    {
      title: "Conduct Ethical Audits",
      description: "Regularly review AI systems for bias, fairness, and adherence to ethical standards."
    },
    {
      title: "Implement Data Security Measures",
      description: "Use encryption, multi-factor authentication, and access controls to protect sensitive information."
    }
  ],
  "Staff Training and Upskilling": [
    {
      title: "Conduct Awareness Campaigns",
      description: "Educate staff on AI's role in enhancing rather than replacing human expertise."
    },
    {
      title: "Develop Role-Based Training",
      description: "Tailor training programs for different roles, such as technicians, managers, and IT staff."
    },
    {
      title: "Offer Hands-On Workshops",
      description: "Provide practical, scenario-based training to build familiarity with AI systems."
    },
    {
      title: "Promote Continuous Learning",
      description: "Encourage staff to participate in ongoing AI education through webinars, courses, and certifications."
    },
    {
      title: "Monitor Progress and Address Concerns",
      description: "Regularly assess staff competency and address any concerns regarding AI adoption."
    }
  ],
  "Comprehensive Training Programs": [
      { title: "Assess Training Needs", description: "Identify skill gaps among laboratory staff through surveys and performance evaluations." },
      { title: "Design Customized Training Modules", description: "Develop programs covering AI basics, advanced functionalities, and ethical considerations." },
      { title: "Partner with AI Vendors", description: "Collaborate with AI providers to deliver expert-led workshops and hands-on training sessions." },
      { title: "Implement E-Learning Platforms", description: "Provide access to online courses and resources for flexible, self-paced learning." },
      { title: "Evaluate Training Effectiveness", description: "Use pre- and post-training assessments to measure knowledge retention and application." }
    ],
  "Data Governance and Monitoring": [
      { title: "Develop Regulatory Compliance Frameworks", description: "Align AI systems with international standards like GDPR, HIPAA, and ISO 27001." },
      { title: "Conduct Risk Assessments", description: "Identify potential compliance risks associated with AI applications in laboratory workflows." },
      { title: "Implement Automated Compliance Checks", description: "Use AI-driven monitoring systems to identify non-compliant activities in real-time." },
      { title: "Maintain Accurate Documentation", description: "Ensure thorough record-keeping for AI-driven processes, facilitating regulatory audits." },
      { title: "Conduct Regular Compliance Audits", description: "Perform periodic reviews of AI systems to ensure ongoing adherence to regulations." }
    ]
  
};
 
const currentSteps = strategySteps[result.predicted_strategy] || [];
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 py-12 px-4 flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-2xl bg-gray-800/70 backdrop-blur-xl rounded-2xl p-8 shadow-2xl relative"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent text-center">
          AI Recommendation
        </h1>

        {isLoading && <AILoadingSimulation />}

        {!isLoading && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 80 }}
              className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-xl p-6 shadow-xl "
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaRobot className="text-4xl text-blue-400" />
                </motion.div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wide">AI Recommendation</p>
                  <p className="text-white text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                    {result.predicted_strategy}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Implementation Steps for recognized strategies */}
            {currentSteps.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 80 }}
                className="mt-6 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-xl p-6 shadow-xl"
              >
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {/* <FaList className="text-4xl text-blue-400" /> */}
                  </motion.div>
                  <div className="w-full">
                    <p className="text-gray-400 text-sm uppercase tracking-wide mb-4">Implementation Steps</p>
                    <div className="space-y-4">
                      {currentSteps.map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                          className="flex items-start gap-3"
                        >
                          <FaCheckCircle className="text-blue-400 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-white font-semibold">{`${index + 1}. ${step.title}`}</p>
                            <p className="text-gray-300 text-sm">{step.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 80 }}
              className="mt-6 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-xl p-6 shadow-xl  "
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* <FaChartBar className="text-4xl text-blue-400" /> */}
                </motion.div>
                <div className="w-full">
                  <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Prediction Probabilities</p>
                  <div className="space-y-4">
                    {Object.entries(result.strategy_percentages).map(([key, value], index) => (
                      <div key={index} className="flex flex-col gap-1">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium text-sm">{key}</span>
                          <span className="text-blue-300 text-sm font-semibold">
                            {(value ).toFixed(2)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${value }%` }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                            className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full mt-6 py-3 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-gray-700 transition-all duration-300"
          onClick={() => navigate('/')}
        >
          New Recommendation
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ResultPage;