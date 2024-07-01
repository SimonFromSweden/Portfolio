import DisplayProjects from "./Components/DisplayProjects";
import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Navbar from "./Components/Navbar.jsx";
// import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
   return (
      <Router>
         <div className="App">
            <Header />
            <div className="content">
               <Routes>
                  <Route path="/" element={<DisplayProjects />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
               </Routes>
            </div>
         </div>
      </Router>
   );
}

export default App;
