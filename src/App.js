
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
import Timer from "./components/Timer";

// import { TimeContext } from "./timeContext/checkTime";
// import { useReducer } from "react";
// import { ReadContext } from "./timeContext/checkTime";

// const initialState =  "false";

// const reducer = (state, action) => {
//   console.log(action); 
//     if(action === "true") {
//         return "true";
//     }
//     else {
//         return initialState;
//     }
// }

// const initialState1 = -1;
  
// const reducer1 = (state, action) => {
    
//   console.log(action);
//   if(action !== state.read) {
      
//         return action;
//     }
//     else {
        
//         return initialState1;
//     }

// }

function App() {

  // const [time, dispatch] = useReducer(reducer, initialState );
  // const [read, read_dispatch] = useReducer(reducer1, initialState1 );
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    {/* <ReadContext.Provider value={{counterRead: read, counterReadDispatch: read_dispatch}}>
    <TimeContext.Provider value={{counterTime: time, counterDispatch: dispatch}}> */}
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/expertise" element={<Experiment />} />
        <Route path="/level/:type" element={<Level />} />

        
        <Route path="/codeRead/:type/:option" element={<Read />} />
        {/* <Route path="/aaaa" element={<Timer />} /> */}
        <Route path="/quiztime/:type/:test" element={<Questions />} />
        
    </Routes>
    {/* </TimeContext.Provider>
    </ReadContext.Provider> */}
    {/* <Home/> */}

    {/* <Register/> */}
      {/* <Experiment/> */}
    {/* <Read/> */}
{/*    <Level/> */}
     {/* <Questions/>  */}

    {/* Admin Pages  */}

    {/* <AdminLogin/> */}
    {/* <Language/> */}    

    {/* <BrowserRouter>
     <Routes>
         <Route path="/level" element={<QuestionBankLevel/>} />
         <Route path="/" element={<QuestionBankLanguage/>} />
         <Route path="/code" element={<QuestionBankCode/>}/>
         <Route path="/question" element={<QuestionBankQuestions/>}/>
         </Routes>
     </BrowserRouter> */}


    <Footer/> 
    </BrowserRouter>

    </>
    
  );
}

export default App;
