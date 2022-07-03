
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
import AdminNavbar from "./pages/Admin/AdminNavbar";
import ScrollToTop from "./components/ScrollToTop";
import { useSelector } from "react-redux";
import DownloadData from "./pages/Admin/DownloadData";



function App() {
 
     const showAdminNav= useSelector(state=>state.showAdminNav);


  const token = localStorage.getItem('token');
  console.log(token)

  // if(!token) {
  //   return <AdminLogin />
  // }

 
    return (
    <>
    {/* <DownloadData/> */}
    <BrowserRouter>
    <ScrollToTop />

    {showAdminNav ? <AdminNavbar/> : <Navbar/>}
    
    <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/languageSelection" element={<QuestionBankLanguage />} />
        <Route path="/levels/:lev" element={<QuestionBankLevel />} />
        <Route path="/code/:lev/:type/" element={<QuestionBankCode />}/>
        <Route path="/question/:lev/:type/:id" element={<QuestionBankQuestions />}/>

        <Route path="/register" element={<Register />} />
        <Route path="/expertise" element={<Experiment />} />
        <Route path="/level/:type" element={<Level />} />
        <Route path="/codeRead/:type/:option" element={<Read />} />
        <Route path="/quiztime/:type/:test" element={<Questions />} />
        
    </Routes> 
    <Footer/> 
    </BrowserRouter>

    </>
  );
}

export default App;
