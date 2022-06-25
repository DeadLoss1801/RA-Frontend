
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AdminLogin from "./pages/Admin/AdminLogin";
import Language from "./pages/Admin/Language";
import QuestionBankCode from "./pages/Admin/QuestionBank/QuestionBankCode";
import QuestionBankLanguage from "./pages/Admin/QuestionBank/QuestionBankLanguage";
import QuestionBankLevel from "./pages/Admin/QuestionBank/QuestionBankLevel";
import QuestionBankQuestions from "./pages/Admin/QuestionBank/QuestionBankQuestions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Experiment from "./pages/Users/Experiment";
import Home from "./pages/Users/Home";
import Level from "./pages/Users/Level";
import Questions from "./pages/Users/Questions";
import Read from "./pages/Users/Read";
import Register from "./pages/Users/Register";




function App() {
  return (
    <>
    <Navbar/>

    {/* <Home/> */}

    {/* <Register/> */}
      {/* <Experiment/> */}
    {/* <Read/> */}
   <Level/>
     {/* <Questions/>  */}

    {/* Admin Pages  */}

    {/* <AdminLogin/> */}
    {/* <Language/> */}

    

    
    {/* <QuestionBankCode/> */}
    {/* <QuestionBankLanguage/> */}
    {/* <QuestionBankLevel/> */}
    {/* <QuestionBankQuestions/> */}
    {/* <BrowserRouter>
     <Routes>
         <Route path="/level" element={<QuestionBankLevel/>} />
         <Route path="/" element={<QuestionBankLanguage/>} />
         <Route path="/code" element={<QuestionBankCode/>}/>
         <Route path="/question" element={<QuestionBankQuestions/>}/>
         </Routes>
     </BrowserRouter> */}

     


    <Footer/> 


    </>
    
  );
}

export default App;
