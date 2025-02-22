import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot } from 'react-icons/fa';

const AILoadingSimulation = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="absolute inset-0 bg-gray-900/80  flex flex-col items-center justify-center rounded-2xl z-10"
    >
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-blue-400 text-5xl"
      >
        <FaRobot />
      </motion.div>
      <div className="mt-4 flex gap-2">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
          className="w-3 h-3 bg-blue-500 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
          className="w-3 h-3 bg-blue-500 rounded-full"
        />
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
          className="w-3 h-3 bg-blue-500 rounded-full"
        />
      </div>
      <p className="text-white text-sm mt-4">Processing AI Model...</p>
    </motion.div>
  );

export default AILoadingSimulation