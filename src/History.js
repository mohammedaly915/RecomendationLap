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