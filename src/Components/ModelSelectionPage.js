// RecommedPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { generalOptions, challengeOptions } from './Data';
import { useNavigate } from 'react-router-dom';
import { FaInfoCircle, FaExclamationTriangle } from 'react-icons/fa';

// Custom Select Component
const CustomSelect = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
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

// Loading Component
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