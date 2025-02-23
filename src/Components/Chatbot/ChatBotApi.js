// ChatBot.jsx
import { useState, useEffect, useRef } from "react";
import { FiMessageSquare, FiX, FiSend } from "react-icons/fi";
import { motion } from "framer-motion";
import { Client } from "@gradio/client";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [gradioClient, setGradioClient] = useState(null);
  const messagesEndRef = useRef(null);

  // Initialize Gradio Client
  useEffect(() => {
    const initializeClient = async () => {
      try {
        const client = await Client.connect("abdelrahman12012/labchatbot");
        setGradioClient(client);
      } catch (error) {
        console.error("Failed to initialize Gradio client:", error);
        setMessages((prev) => [
          ...prev,
          { text: "⚠️ Error: Unable to connect to Gradio service.", isBot: true, isError: true },
        ]);
      }
    };
    initializeClient();
  }, []);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle message submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim() || !gradioClient) return;

    setMessages((prev) => [...prev, { text: message, isBot: false }]);
    setMessage("");
    setIsLoading(true);

    try {
      const result = await gradioClient.predict("/chat", [message]);
      const botReply = result.data[0]; // Adjust based on your Gradio API response
      setMessages((prev) => [...prev, { text: botReply, isBot: true }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: `⚠️ Error: ${error.message}`, isBot: true, isError: true },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? "scale-0" : "scale-100"
        } hover:shadow-xl`}
        whileHover={{ scale: 1.15, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
      >
        <FiMessageSquare size={24} />
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 50, scale: isOpen ? 1 : 0.9 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`absolute bottom-20 right-0 w-96 h-[600px] bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white p-4 flex justify-between items-center rounded-t-2xl">
          <h3 className="font-semibold text-lg">AI Chat Bot</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-blue-700 transition-all duration-200"
          >
            <FiX size={20} />
          </button>
        </div>

        <div className="h-[calc(100%-112px)] p-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-4 flex ${msg.isBot ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-xs p-3 rounded-xl shadow-md ${
                  msg.isError
                    ? "bg-red-500/90 text-white"
                    : msg.isBot
                    ? "bg-white text-gray-800"
                    : "bg-blue-600 text-white"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-xs p-3 rounded-xl bg-white/90 text-gray-800 shadow-md flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "100ms" }}></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "200ms" }}></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="p-4 bg-gray-700/80 backdrop-blur-md rounded-b-2xl">
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-2 bg-gray-900/80 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
              disabled={isLoading || !gradioClient}
            />
            <motion.button
              type="submit"
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-all duration-200"
              disabled={isLoading || !message.trim() || !gradioClient}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiSend size={20} />
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ChatBot;