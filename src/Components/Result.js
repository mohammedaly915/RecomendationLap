// ResultPage.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaRobot } from 'react-icons/fa';
import AILoadingSimulation from './Loading/AILoadingSimulation';

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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 80 }}
              className="mt-6 bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-xl p-6 shadow-xl  "
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
        )}

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

export default ResultPage;