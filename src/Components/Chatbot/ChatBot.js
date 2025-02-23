// ChatBot.jsx
import { useState, useEffect, useRef } from "react";
import { MdChat, MdClose } from "react-icons/md"; // Updated icons
import { motion } from "framer-motion"; // Optional for animations

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
      const selectRef = useRef(null); // Ref to track the component's DOM node
  
  // useEffect(() => {
  //     const handleClickOutside = (event) => {
  //       if (selectRef.current && !selectRef.current.contains(event.target)) {
  //         setIsOpen(false);
  //       }
  //     };
  
  //     if (isOpen) {
  //       document.addEventListener('mousedown', handleClickOutside);
  //     }
  
  //     return () => {
  //       document.removeEventListener('mousedown', handleClickOutside);
  //     };
  //   }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const initializeGradio = () => {
      const gradioApp = document.createElement("gradio-app");
      gradioApp.setAttribute("src", "https://abdelrahman12012-labchatbot.hf.space/"); // Your Gradio Space URL

      gradioApp.style.width = "100%";
      gradioApp.style.height = "100%";
      gradioApp.style.borderRadius = "12px";
      gradioApp.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.2)";
      gradioApp.style.background = "#ffffff";
      gradioApp.style.overflow = "hidden";

      containerRef.current.appendChild(gradioApp);
    };

    if (!document.querySelector("script[data-gradio-script]")) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://gradio.s3-us-west-2.amazonaws.com/5.16.0/gradio.js";
      script.dataset.gradioScript = "true";
      script.onload = initializeGradio;
      document.head.appendChild(script);
    } else {
      initializeGradio();
    }

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
    <div className="fixed bottom-[50px] left-8 z-50 " ref={selectRef}>
      {/* Updated Floating Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={` text-white p-3 rounded shadow-lg hover:bg-blue-700 transition-all duration-300 ${
          isOpen ? 'scale-100 bg-blue-700' : ' bg-gradient-to-r from-blue-500 to-indigo-600'
        }`}
        whileHover={{ scale: isOpen? 1 :1.2 }}
        whileTap={{ scale: 0.5 }}
      >
        <MdChat size={28} />
      </motion.button>

      {/* Chat Window */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
        transition={{ duration: 0.3 }}
        className={`absolute bottom-[80px] left-[15px] w-[400px] h-[500px] bg-white bg-opacity-90 backdrop-blur-md rounded shadow-xl transition-all duration-300 ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Updated Header */}
        <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white p-3 rounded-t-xl flex justify-between items-center shadow-md">
            <div>
          <div className="flex items-center space-x-2">
            <MdChat size={24} className="text-indigo-200" />
            <h3 className="text-sm font-medium tracking-wide">
              AI Strategy Chatbot <span className="text-indigo-200">by Dr. Mohamed Helmy</span>
            </h3>
            </div>
            
            
              
            <p className="text-xs text-indigo-200">
                  Ask me anything about AI strategies for labs, brought to you by Dr. Mohamed Helmy’s research!
                </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-indigo-200 hover:text-white hover:bg-indigo-800 p-1 rounded-full transition-all duration-200"
          >
            <MdClose size={22} />
          </button>
        </div>

        {/* Gradio Container */}
        <div
          ref={containerRef}
          className="h-[calc(100%-0px)] w-full overflow-hidden rounded-b-xl" // Adjusted height for new header
        />
      </motion.div>
    </div>
  );
};

export default ChatBot;