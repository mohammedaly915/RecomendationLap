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
        className={`bg-blue-600 text-white p-4 rounded-full shadow-lg transition-transform duration-300 ${
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
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 rounded-t-xl flex justify-between items-center">
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