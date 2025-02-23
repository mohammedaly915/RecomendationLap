import { Route, Routes } from 'react-router-dom';
import './App.scss';
import ModelSelectionPage from './Components/ModelRecommend/ModelSelectionPage';
import ReviewPage from './Components/Review/ReviewPage';
import ChatBot from './Components/Chatbot/ChatBot';
import ResultPage from './Components/Result/Result';
import { useEffect } from 'react';
// import GradioChatBot from './Components/GardioChatBot';
// import ChatBotApi from './Components/ChatBotApi';


function App() {

  
  return (
   <>
    <div className="min-h-screen  bg-primeColor flex flex-col">
        <main className="">
          <Routes>
            <Route path="/" element={<ModelSelectionPage />} />
            
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/result" element={<ResultPage />} />
          </Routes> 
        </main>
        <ChatBot />  

         

      </div> 
     
   </>
  );
}

export default App;
