import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaRobot } from 'react-icons/fa';
import { LoadingSpinner } from './ModelSelectionPage';
const ResultPage = () => {
    const location = useLocation(); 
    const navigate = useNavigate(); 
    const result = location.state?.result || { predicted_strategy: "No recommendation available" };
    const [isLoading, setIsLoading] = React.useState(true);
  
    React.useEffect(() => {
      const timer = setTimeout(() => setIsLoading(false), 1000); // Simulate loading
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 py-12 px-4 flex items-center justify-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-2xl bg-gray-800/70 backdrop-blur-xl rounded-2xl p-8 shadow-2xl"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent text-center">
            AI Recommendation
          </h1>
          {isLoading && <LoadingSpinner />}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 80 }}
            className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl p-6 shadow-lg flex items-center gap-4"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaRobot className="text-4xl text-blue-300" />
            </motion.div>
            <div>
              <p className="text-gray-300 text-sm mb-2">Based on your input, our AI suggests:</p>
              <p className="text-white text-lg font-semibold">{result.predicted_strategy}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 80 }}
            className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-xl p-6 shadow-lg flex items-center gap-4"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <FaRobot className="text-4xl text-blue-300" />
            </motion.div>
              
              <div className="text-white text-lg font-semibold">
              {Object.entries(result.probabilities).map(([key, value], index) => (
                <p key={index}>
                  {key}: {value.toFixed(2)}
                </p>
              ))}
            </div>
          </motion.div>
  
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-6 py-3 px-6 bg-gray-700/80 text-white font-semibold rounded-xl shadow-md hover:bg-gray-700 transition-all duration-300"
            onClick={() => navigate('/')}
          >
            New Recommendation
          </motion.button>
        </motion.div>
      </div>
    );
  };





<>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 80 }}
              className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-xl p-6 shadow-xl border border-gray-700/30"
            >
              
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 80 }}
              className="mt-6 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-xl p-6 shadow-xl border border-gray-700/30"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <FaRobot className="text-4xl text-blue-400" />
                </motion.div>
                <div className="w-full">
                  <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">Prediction Probabilities</p>
                  <div className="space-y-4">
                    {Object.entries(result.probabilities).map(([key, value], index) => (
                      <div key={index} className="flex flex-col gap-1">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium text-sm">{key}</span>
                          <span className="text-blue-300 text-sm font-semibold">
                            {(value * 100).toFixed(2)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${value * 100}%` }}
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





// ChatBot.jsx
import { useState, useEffect, useRef } from "react";
import { FiMessageSquare, FiX } from "react-icons/fi";
import { motion } from "framer-motion"; // Optional for animations

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const initializeGradio = () => {
      const gradioApp = document.createElement("gradio-app");
      gradioApp.setAttribute("src", "https://abdelrahman12012-labchatbot.hf.space/"); // Your Gradio Space URL

      // Styling for the Gradio app
      gradioApp.style.width = "100%";
      gradioApp.style.height = "100%";
      gradioApp.style.borderRadius = "12px";
      gradioApp.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.2)";
      gradioApp.style.background = "#ffffff"; // White background to match chat style
      gradioApp.style.overflow = "hidden";

      containerRef.current.appendChild(gradioApp);
    };

    // Load Gradio script if not already loaded
    if (!document.querySelector("script[data-gradio-script]")) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://gradio.s3-us-west-2.amazonaws.com/5.16.0/gradio.js"; // Latest Gradio JS
      script.dataset.gradioScript = "true";
      script.onload = initializeGradio;
      document.head.appendChild(script);
    } else {
      initializeGradio();
    }

    // Cleanup on unmount or when closed
    return () => {
      if (containerRef.current) {
        const gradioApp = containerRef.current.querySelector("gradio-app");
        if (gradioApp) {
          containerRef.current.removeChild(gradioApp);
        }
      }
    };
  }, [isOpen]);

  return (
    <div className="fixed bottom-8 left-8 z-50">
      {/* Floating Chat Icon */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white p-4 rounded shadow-lg transition-transform duration-300 ${
          isOpen ? "scale-0" : "scale-100 hover:scale-110"
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FiMessageSquare size={24} />
      </motion.button>

      {/* Chat Window */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        className={`absolute bottom-[150px] left-[30px] w-80 h-[500px] bg-opacity-80 backdrop-blur-lg rounded-xl shadow-2xl transition-all duration-300 ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white p-4 rounded-t-xl flex justify-between items-center">
          <h3 className="font-semibold">AI Strategy Chatbot by Dr. Mohamed Helmy</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-blue-700 rounded-full p-1 transition-all duration-200"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Gradio Container */}
        <div
          ref={containerRef}
          className="h-[calc(100%)] w-full overflow-hidden rounded-b-xl" // Adjust height for header
        />
      </motion.div>
    </div>
  );
};

export default ChatBot;







const CustomSelect = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  
  

  return (
    <div className="relative scrollDesign w-full">
      <label className="block text-gray-300 mb-2 text-sm font-medium">{label}</label>
      <motion.div
        className="bg-gray-800/80 backdrop-blur-md rounded-xl p-3 flex items-center justify-between cursor-pointer text-gray-200 hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className={value ? "text-white" : "text-gray-400"}>
          {value || "Select an option..."}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute z-10 w-full mt-1 bg-gray-800/90 backdrop-blur-md rounded-xl shadow-xl max-h-48 overflow-y-auto"
        >
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className="px-3 py-2 text-gray-200 hover:bg-gray-700/70 cursor-pointer transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl"
            >
              {option.label}
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};



import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { generalOptions, challengeOptions } from '../Data';
import { useNavigate } from 'react-router-dom';
import { FaInfoCircle, FaExclamationTriangle, FaClock, FaBrain, FaDollarSign } from 'react-icons/fa';
import { MdScience } from 'react-icons/md';

// Custom Radio Group Component

const CustomSelect = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  
  

  return (
    <div className="relative scrollDesign w-full">
      <label className="block text-gray-300 mb-2 text-sm font-medium">{label}</label>
      <motion.div
        className="bg-gray-800/80 backdrop-blur-md rounded-xl p-3 flex items-center justify-between cursor-pointer text-gray-200 hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className={value ? "text-white" : "text-gray-400"}>
          {value || "Select an option..."}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute z-10 w-full mt-1 bg-gray-800/90 backdrop-blur-md rounded-xl shadow-xl max-h-48 overflow-y-auto"
        >
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className="px-3 py-2 text-gray-200 hover:bg-gray-700/70 cursor-pointer transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl"
            >
              {option.label}
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};
const CustomRadioGroup = ({ label, options, value, onChange, icon: Icon }) => {
  return (
    <div className="w-full">
      <label className="block text-gray-300 mb-2 text-sm font-medium flex items-center gap-2">
        <Icon className="text-indigo-400" size={20} />
        {label}
      </label>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {options.map((option) => (
          <motion.label
            key={option.value}
            className={`flex items-center gap-3 p-3 bg-gray-800/80 backdrop-blur-md rounded-xl cursor-pointer transition-all duration-300 shadow-md ${
              value === option.value
                ? 'bg-indigo-600/70 text-white'
                : 'text-gray-200 hover:bg-gray-700/70'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <input
              type="radio"
              name={label} // Unique name per group
              value={option.value}
              checked={value === option.value}
              onChange={() => onChange(option.value)}
              className="hidden"
            />
            <span className="w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center">
              {value === option.value && (
                <span className="w-3 h-3 bg-indigo-400 rounded-full"></span>
              )}
            </span>
            <span>{option.label}</span>
          </motion.label>
        ))}
      </div>
    </div>
  );
};

// Loading Spinner Component (unchanged)
export const LoadingSpinner = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center z-50"
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-12 h-12 border-4 border-t-blue-500 border-gray-700 rounded-full"
    />
  </motion.div>
);

const RecommedPage = () => {
  const [formData, setFormData] = useState({
    country: "Egypt",
    experience: "1-3 years",
    role: "Laboratory Technician or Specialist",
    ai_familiarity: "Familiar",
    ai_usage: "Limited use",
    financial_constraints: "Significant Barrier",
    ethical_concerns: "Major Barrier",
    staff_resistance: "Moderate Barrier",
    lack_of_training: "Moderate Barrier",
    regulatory_compliance: "Significant Barrier",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState("general");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate("/review", { state: { formData } });
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 py-12 px-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl bg-gray-800/70 backdrop-blur-xl rounded-2xl p-8 shadow-2xl"
      >
        {isLoading && <LoadingSpinner />}

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent text-center">
          Laboratory AI Recommendation
        </h1>

        {/* Tab Buttons */}
        <div className="flex gap-4 mb-8 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 shadow-md ${
              activeSection === "general"
                ? "bg-gradient-to-r from-blue-500 to-indigo-600"
                : "bg-gray-700/80 hover:bg-gray-700"
            }`}
            onClick={() => setActiveSection("general")}
          >
            <FaInfoCircle />
            General Info
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 shadow-md ${
              activeSection === "challenges"
                ? "bg-gradient-to-r from-blue-500 to-indigo-600"
                : "bg-gray-700/80 hover:bg-gray-700"
            }`}
            onClick={() => setActiveSection("challenges")}
          >
            <FaExclamationTriangle />
            Challenges
          </motion.button>
        </div>

        {/* Sections */}
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeSection === "general" ? (
            <section>
              <div className="space-y-6">
                <CustomSelect
                  label="In which country is your laboratory or organization based?"
                  options={generalOptions.country}
                  value={formData.country}
                  onChange={(value) => setFormData({ ...formData, country: value })}
                />
                {/* Replaced with CustomRadioGroup */}
                <CustomRadioGroup
                  label="How many years of experience do you have in your field?"
                  options={generalOptions.experience}
                  value={formData.experience}
                  onChange={(value) => setFormData({ ...formData, experience: value })}
                  icon={FaClock}
                />
                <CustomSelect
                  label="What is your role in the organization?"
                  options={generalOptions.role}
                  value={formData.role}
                  onChange={(value) => setFormData({ ...formData, role: value })}
                />
                {/* Replaced with CustomRadioGroup */}
                <CustomRadioGroup
                  label="How familiar are you with AI technologies in laboratory operations?"
                  options={generalOptions.aiFamiliarity}
                  value={formData.ai_familiarity}
                  onChange={(value) => setFormData({ ...formData, ai_familiarity: value })}
                  icon={FaBrain}
                />
                <CustomSelect
                  label="To what extent is AI currently used in your laboratory operations?"
                  options={generalOptions.aiUsage}
                  value={formData.ai_usage}
                  onChange={(value) => setFormData({ ...formData, ai_usage: value })}
                />
              </div>
            </section>
          ) : (
            <section>
              <div className="space-y-6">
                {/* Replaced with CustomRadioGroup */}
                <CustomRadioGroup
                  label="Financial constraints"
                  options={challengeOptions}
                  value={formData.financial_constraints}
                  onChange={(value) => setFormData({ ...formData, financial_constraints: value })}
                  icon={FaDollarSign}
                />
                <CustomSelect
                  label="Ethical concerns (e.g., data privacy, transparency)"
                  options={challengeOptions}
                  value={formData.ethical_concerns}
                  onChange={(value) => setFormData({ ...formData, ethical_concerns: value })}
                />
                <CustomSelect
                  label="Staff resistance to change"
                  options={challengeOptions}
                  value={formData.staff_resistance}
                  onChange={(value) => setFormData({ ...formData, staff_resistance: value })}
                />
                <CustomSelect
                  label="Lack of training and education"
                  options={challengeOptions}
                  value={formData.lack_of_training}
                  onChange={(value) => setFormData({ ...formData, lack_of_training: value })}
                />
                <CustomSelect
                  label="Regulatory compliance issues"
                  options={challengeOptions}
                  value={formData.regulatory_compliance}
                  onChange={(value) => setFormData({ ...formData, regulatory_compliance: value })}
                />
              </div>
            </section>
          )}
        </motion.div>

        {/* Submit Button */}
        <motion.button
          onClick={handleSubmit}
          disabled={isLoading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full mt-8 py-3 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 ${
            isLoading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Submitting..." : "Review Responses"}
        </motion.button>

        {error && (
          <div className="mt-6 p-4 bg-red-500/20 rounded-xl text-red-200 shadow-md">
            {error}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default RecommedPage;




// RecommedPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { generalOptions, challengeOptions } from '../Data';
import { useNavigate } from 'react-router-dom';
import { FaInfoCircle, FaExclamationTriangle } from 'react-icons/fa';

// Custom Select Component
const CustomSelect = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  
  

  return (
    <div className="relative scrollDesign w-full">
      <label className="block text-gray-300 mb-2 text-sm font-medium">{label}</label>
      <motion.div
        className="bg-gray-800/80 backdrop-blur-md rounded-xl p-3 flex items-center justify-between cursor-pointer text-gray-200 hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className={value ? "text-white" : "text-gray-400"}>
          {value || "Select an option..."}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute z-10 w-full mt-1 bg-gray-800/90 backdrop-blur-md rounded-xl shadow-xl max-h-48 overflow-y-auto"
        >
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className="px-3 py-2 text-gray-200 hover:bg-gray-700/70 cursor-pointer transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl"
            >
              {option.label}
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};



export const LoadingSpinner = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center z-50"
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-12 h-12 border-4 border-t-blue-500 border-gray-700 rounded-full"
    />
  </motion.div>  
);

const RecommedPage = () => {
  const [formData, setFormData] = useState({
    country: "Egypt",
    experience: "1-3 years",
    role: "Laboratory Technician or Specialist",
    ai_familiarity: "Familiar",
    ai_usage: "Limited use",
    financial_constraints: "Significant Barrier",
    ethical_concerns: "Major Barrier",
    staff_resistance: "Moderate Barrier",
    lack_of_training: "Moderate Barrier",
    regulatory_compliance: "Significant Barrier",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState("general");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate("/review", { state: { formData } });
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 py-12 px-4 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl bg-gray-800/70 backdrop-blur-xl rounded-2xl p-8 shadow-2xl"
      >
            {isLoading && <LoadingSpinner />}

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent text-center">
          Laboratory AI Recommendation
        </h1>

        {/* Tab Buttons */}
        <div className="flex gap-4 mb-8 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 shadow-md ${
              activeSection === "general"
                ? "bg-gradient-to-r from-blue-500 to-indigo-600"
                : "bg-gray-700/80 hover:bg-gray-700"
            }`}
            onClick={() => setActiveSection("general")}
          >
            <FaInfoCircle />
            General Info
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 shadow-md ${
              activeSection === "challenges"
                ? "bg-gradient-to-r from-blue-500 to-indigo-600"
                : "bg-gray-700/80 hover:bg-gray-700"
            }`}
            onClick={() => setActiveSection("challenges")}
          >
            <FaExclamationTriangle />
            Challenges
          </motion.button>
        </div>

        {/* Sections */}
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeSection === "general" ? (
            <section>
              <div className="space-y-6">
                <CustomSelect
                  label="In which country is your laboratory or organization based?"
                  options={generalOptions.country}
                  value={formData.country}
                  onChange={(value) => setFormData({ ...formData, country: value })}
                />


                <CustomSelect
                  label="How many years of experience do you have in your field?"
                  options={generalOptions.experience}
                  value={formData.experience}
                  onChange={(value) => setFormData({ ...formData, experience: value })}
                />

                
                <CustomSelect
                  label="What is your role in the organization?"
                  options={generalOptions.role}
                  value={formData.role}
                  onChange={(value) => setFormData({ ...formData, role: value })}
                />
                <CustomSelect
                  label="How familiar are you with AI technologies in laboratory operations?"
                  options={generalOptions.aiFamiliarity}
                  value={formData.ai_familiarity}
                  onChange={(value) => setFormData({ ...formData, ai_familiarity: value })}
                />

                
                <CustomSelect
                  label="To what extent is AI currently used in your laboratory operations?"
                  options={generalOptions.aiUsage}
                  value={formData.ai_usage}
                  onChange={(value) => setFormData({ ...formData, ai_usage: value })}
                />
              </div>
            </section>
          ) : (
            <section>
              <div className="space-y-6">
                <CustomSelect
                  label="Financial constraints"
                  options={challengeOptions}
                  value={formData.financial_constraints}
                  onChange={(value) => setFormData({ ...formData, financial_constraints: value })}
                />
                <CustomSelect
                  label="Ethical concerns (e.g., data privacy, transparency)"
                  options={challengeOptions}
                  value={formData.ethical_concerns}
                  onChange={(value) => setFormData({ ...formData, ethical_concerns: value })}
                />
                <CustomSelect
                  label="Staff resistance to change"
                  options={challengeOptions}
                  value={formData.staff_resistance}
                  onChange={(value) => setFormData({ ...formData, staff_resistance: value })}
                />
                <CustomSelect
                  label="Lack of training and education"
                  options={challengeOptions}
                  value={formData.lack_of_training}
                  onChange={(value) => setFormData({ ...formData, lack_of_training: value })}
                />
                <CustomSelect
                  label="Regulatory compliance issues"
                  options={challengeOptions}
                  value={formData.regulatory_compliance}
                  onChange={(value) => setFormData({ ...formData, regulatory_compliance: value })}
                />
              </div>
            </section>
          )}
        </motion.div>

        {/* Submit Button */}
        <motion.button
          onClick={handleSubmit}
          disabled={isLoading}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full mt-8 py-3 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 ${
            isLoading ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Submitting..." : "Review Responses"}
        </motion.button>

        {error && (
          <div className="mt-6 p-4 bg-red-500/20 rounded-xl text-red-200 shadow-md">
            {error}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default RecommedPage;



after requird
const CustomSelect = ({ label, options, value, onChange, required = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const isSelected = !!value;
  
    return (
      <div className="relative w-full">
        <label className="block text-gray-300 mb-2 text-sm font-medium">{label}</label>
        <motion.div
          className={`bg-gray-800/80 backdrop-blur-md rounded-xl p-3 flex items-center justify-between cursor-pointer text-gray-200 hover:bg-gray-800 transition-all duration-300 shadow-md ${
            required && !isSelected
              ? "border-2 border-red-500"
              : isSelected
              ? "border-2 border-indigo-500"
              : "border-2 border-transparent"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className={value ? "text-white" : "text-gray-400"}>
            {value || "Select an option..."}
          </span>
          <svg
            className={`w-4 h-4 text-gray-400 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
  
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 w-full mt-1 bg-gray-800/90 backdrop-blur-md rounded-xl shadow-xl max-h-48 overflow-y-auto scroll-design"
          >
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className="px-3 py-2 text-gray-200 hover:bg-gray-700/70 cursor-pointer transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl"
              >
                {option.label}
              </div>
            ))}
          </motion.div>
        )}
      </div>
    );
  };


// CustomRadiusSelect Component (Updated with Required/Selected Design and Icons)
const CustomRadiusSelect = ({ label, options, value, onChange, required = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectedOption = options.find((opt) => opt.value === value);
    const isSelected = !!value;
  
    return (
      <div className="custom-radius-select w-full">
        <label className="block text-gray-300 mb-2 text-sm font-medium">{label}</label>
        <motion.div
          className={`bg-gray-800/80 backdrop-blur-md rounded-custom p-3 flex items-center justify-between cursor-pointer text-gray-200 hover:bg-gray-800 transition-all duration-300 shadow-custom ${
            required && !isSelected
              ? "border-2 border-red-500"
              : isSelected
              ? "border-2 border-indigo-500"
              : "border-2 border-transparent"
          }`}
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center gap-2">
            {selectedOption?.icon && (
              <span className="text-gray-400">{selectedOption.icon}</span>
            )}
            <span className={value ? "text-white" : "text-gray-400"}>
              {selectedOption?.label || "Select an option..."}
            </span>
          </div>
          <svg
            className={`w-4 h-4 text-gray-400 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
  
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 w-full mt-1 bg-gray-800/90 backdrop-blur-md rounded-custom shadow-custom max-h-48 overflow-y-auto scroll-design"
          >
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 px-3 py-2 text-gray-200 hover:bg-gray-700/70 cursor-pointer transition-colors duration-200 first:rounded-t-custom last:rounded-b-custom"
              >
                {option.icon && <span className="text-gray-400">{option.icon}</span>}
                <span>{option.label}</span>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    );
  };