// components/GradioChatBot.jsx
import { useEffect, useRef, useState } from 'react';
import { FiMessageSquare, FiX } from 'react-icons/fi';

const GradioChatBot = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isVisible) return;

    const initializeChatbot = () => {
      const gradioApp = document.createElement('gradio-app');
      gradioApp.setAttribute('src', 'https://abdelrahman12012-labchatbot.hf.space/');
      
      // Styling for bottom-left positioning
      gradioApp.style.position = 'fixed';
      gradioApp.style.bottom = '250px';
      gradioApp.style.left = '100px';
      gradioApp.style.width = '350px';
      gradioApp.style.height = '500px';
      gradioApp.style.borderRadius = '12px';
      gradioApp.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
      gradioApp.style.transition = 'opacity 0.3s ease';
      gradioApp.style.zIndex = '999';

      containerRef.current.appendChild(gradioApp);
    };

    if (!document.querySelector('script[data-gradio-script]')) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://gradio.s3-us-west-2.amazonaws.com/5.16.0/gradio.js';
      script.dataset.gradioScript = 'true';
      script.onload = initializeChatbot;
      document.head.appendChild(script);
    } else {
      initializeChatbot();
    }

    return () => {
      if (containerRef.current) {
        const gradioApp = containerRef.current.querySelector('gradio-app');
        if (gradioApp) {
          containerRef.current.removeChild(gradioApp);
        }
      }
    };
  }, [isVisible]);

  return (
    <div>
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-10 left-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all z-50"
        aria-label="Chatbot toggle"
      >
        {isVisible ? (
          <FiX size={24} className="transform transition-transform hover:rotate-90" />
        ) : (
          <FiMessageSquare size={24} className="transform transition-transform hover:scale-110" />
        )}
      </button>

      {/* Chatbot Container */}
      <div ref={containerRef} className="fixed bottom-[50px] left-8 z-40" />
    </div>
  );
};

export default GradioChatBot;