import Enquiry from "./pages/Enquiry";
import About from "./pages/About";
import LandingPage from "./pages/LandingPage";
import { Route, Routes } from "react-router-dom";
const App = () => {
    
  return (
    <div className="mx-auto max-w-screen-xl">
    <Routes >
       <Route path="/" element={<LandingPage/>} />
       <Route path="/aboutUs" element={<About/>} />
       <Route path="/enquiry" element={<Enquiry/>} />
    </Routes>
    </div>
  );
};

export default App;
