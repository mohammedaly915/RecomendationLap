// ReviewPage.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import AILoadingSimulation from '../Loading/AILoadingSimulation';



const ReloadModal = ({ onContinue, onCancel }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed h-[100vh] w-[100%] z-[999] inset-0 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center "
  >
    <div className="bg-gray-800 rounded-xl p-6 shadow-2xl max-w-sm w-full">
      <h2 className="text-xl font-semibold text-white mb-4">
        Are you sure you want to Back?
      </h2>
      <p className="text-gray-300 mb-6">
        Your current progress will be lost.
      </p>
      <div className="flex gap-4 justify-center">
        <motion.button
          onClick={onContinue}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-600 text-white px-4 py-2 rounded-xl shadow-md hover:bg-indigo-700 transition-all duration-300"
        >
          Continue (Go to back)
        </motion.button>
        <motion.button
          onClick={onCancel}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gray-600 text-white px-4 py-2 rounded-xl shadow-md hover:bg-gray-700 transition-all duration-300"
        >
          Cancel 
        </motion.button>
      </div>
    </div>
  </motion.div>
);


const ReviewItem = ({ label, value }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-md rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
  >
    <span className="text-gray-300 font-medium sm:w-1/2">{label}</span>
    <span className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-white font-semibold px-4 py-2 rounded-lg sm:w-1/2 text-center shadow-[0_0_10px_rgba(79,70,229,0.2)]">
      {value}
    </span>
  </motion.div>
);

const ReviewPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const RecommendationData = location.state?.formData;
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
    const [showReloadModal, setShowReloadModal] = useState(false);
  

  // useEffect(()=>{
  //   const BeforeUnLoad=(e)=>{
  //     const isFormedFilled = Object.values(RecommendationData).some(value=>value !=="")
  //     if (isFormedFilled){
  //       navigate('/')

  //     };
  //   };

  //   window.addEventListener("beforeunload",BeforeUnLoad);

  //   // Cleanup listener on component unmount
  //   return () => {
  //     window.removeEventListener("beforeunload", BeforeUnLoad);
  //   };

  // },[RecommendationData])


//   useEffect(() => {
//     // Function to handle page load/reload
//     const handleLoad = () => {
//         const isFormFilled = Object.values(RecommendationData).some(value => value !== "");
//         if (isFormFilled) {
//             navigate('/');
//         }
//     };

//     // Check on initial load
//     handleLoad();

//     // Optionally, you can still keep the beforeunload for warning
//     const handleBeforeUnload = (e) => {
//         const isFormFilled = Object.values(RecommendationData).some(value => value !== "");
//         if (isFormFilled) {
//             e.preventDefault();
//             e.returnValue = ''; // Shows a confirmation dialog
//         }
//     };

//     window.addEventListener('beforeunload', handleBeforeUnload);

//     // Cleanup
//     return () => {
//         window.removeEventListener('beforeunload', handleBeforeUnload);
//     };
// }, [RecommendationData, navigate]);


const handleContinueReload = () => {
    setShowReloadModal(false);
    navigate("/");
  };

  const handleCancelReload = () => {
    setShowReloadModal(false);
  };

useEffect(() => {
  const handleBeforeUnload = (e) => {
      const isFormFilled = Object.values(RecommendationData).some(value => value !== "");
      if (isFormFilled) {
          // This triggers the browser's confirmation dialog
          e.preventDefault();
          e.returnValue = 'Are you sure you want to reload?'; // Custom message (some browsers might ignore this)
      }
  };

  // Add listener for beforeunload
  window.addEventListener('beforeunload', handleBeforeUnload);

  // Handle the actual navigation after confirmation
  const handleUnload = () => {
      const isFormFilled = Object.values(RecommendationData).some(value => value !== "");
      if (isFormFilled) {
          navigate('/'); // Navigate to home after reload is confirmed
      }
  };

  // Note: We can't directly catch the confirmation result,
  // so we need to handle navigation on next load
  window.addEventListener('unload', handleUnload);

  // Cleanup both listeners
  return () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
    window.removeEventListener('unload', handleUnload);
  };
}, [RecommendationData, navigate]);

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("https://abdelrahman12012-dr-helmy.hf.space/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(RecommendationData),
      });

      if (!res.ok) throw new Error("API request failed");

      const data = await res.json();
      setResponse(data);
      navigate('/result', { state: { result: data } });
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 py-12 px-4 flex items-center justify-center">
      {showReloadModal && (
          <ReloadModal onContinue={handleContinueReload} onCancel={handleCancelReload} />
        )}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl bg-gray-800/70 backdrop-blur-xl rounded-2xl p-8 shadow-2xl"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent text-center">
          Review Your Responses
        </h1>

        <section className="mb-10">
        
        {isLoading && <AILoadingSimulation />}

          <h2 className="text-2xl font-semibold text-white mb-6 pb-2">General Information</h2>
          <div className="space-y-4">
            <ReviewItem label="Country" value={RecommendationData?.country} />
            <ReviewItem label="Experience" value={RecommendationData.experience} />
            <ReviewItem label="Role" value={RecommendationData.role} />
            <ReviewItem label="AI Familiarity" value={RecommendationData.ai_familiarity} />
            <ReviewItem label="AI Usage" value={RecommendationData.ai_usage} />
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-6 pb-2">Challenges to AI Implementation</h2>
          <div className="space-y-4">
            <ReviewItem label="Financial Constraints" value={RecommendationData.financial_constraints} />
            <ReviewItem label="Ethical Concerns" value={RecommendationData.ethical_concerns} />
            <ReviewItem label="Staff Resistance" value={RecommendationData.staff_resistance} />
            <ReviewItem label="Lack of Training" value={RecommendationData.lack_of_training} />
            <ReviewItem label="Regulatory Compliance" value={RecommendationData.regulatory_compliance} />
          </div>
        </section>

        <div className="flex flex-col sm:flex-row gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "Submitting..." : "Get AI Recommendation"}
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 px-6 bg-gray-700/80 text-white font-semibold rounded-xl shadow-md hover:bg-gray-700 transition-all duration-300"
            onClick={() =>setShowReloadModal(true)}
          >
            Back to Recommend to AI
          </motion.button>
        </div>

        {error && (
          <div className="mt-6 p-4 bg-red-500/20 rounded-xl text-red-200 shadow-md">
            {error}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ReviewPage;