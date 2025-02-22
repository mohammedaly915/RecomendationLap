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