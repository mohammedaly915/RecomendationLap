import { Route, Routes } from 'react-router-dom';
import './App.scss';
import ModelSelectionPage from './Components/ModelSelectionPage';
import ReviewPage from './Components/ReviewPage';
import ChatBot from './Components/ChatBot';
import ResultPage from './Components/Result';
import GradioChatBot from './Components/GardioChatBot';
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
        {/* <ChatBotApi />   */}
        {/* <GradioChatBot */}
         

      </div> 
     
   </>
  );
}

export default App;
