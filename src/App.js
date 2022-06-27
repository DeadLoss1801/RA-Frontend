
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
import { useState } from "react";
import AdminNavbar from "./pages/Admin/AdminNavbar";






function App() {

  // const token = localStorage.getItem('token');
  // console.log(token)

  // if(!token) {
  //   return <AdminLogin />
  // }

 
  
  return (
    // <BrowserRouter>
    <>
      {/* <Navbar /> */}

      {/* <Home/> */}

      {/* <Register/> */}
      {/* <Experiment/> */}
      {/* <Read/> */}
      {/*    <Level/> */}
      {/* <Questions/>  */}

      {/* Admin Pages  */}

      {/* <AdminLogin /> */}
      {/* <Language/> */}

      {/* <QuestionBankCode/> */}
      
      
      {/* <QuestionBankLanguage/> */}
      
      {/* <QuestionBankLevel/> */}
      {/* <QuestionBankQuestions/> */}
      {/* <AdminNavbar/> */}
      {/* <BrowserRouter>
     <Routes>
         <Route path="/level/:lev" element={<QuestionBankLevel/>} />
         <Route path="/" element={<QuestionBankLanguage/>} />
         <Route path="/code/:lev/:type" element={<QuestionBankCode/>}/>
         <Route path="/question/:lev/:type/:id" element={<QuestionBankQuestions/>}/>
         </Routes>
     </BrowserRouter> */}




      <Footer />


    </>
  );
}

export default App;
