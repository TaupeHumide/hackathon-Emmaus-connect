import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Estimate from "./components/Estimate";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
<<<<<<< HEAD
import Faq from "./components/Faq";
import Popup from "./components/Popup";
=======
import Form from "./components/Form";
import MyEstimates from "./components/MyEstimates";
>>>>>>> dev

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <Navbar setIsOpen={setIsOpen} />
      {isOpen && <Popup setIsOpen={setIsOpen} />}
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Home />} />
        <Route path="/estimate" element={<Estimate />} />
        <Route path="/faq" element={<Faq />} />
=======
        <Route path='/' element={<Home />} />
        <Route path='/estimate' element={<Estimate />} />
        <Route path='/myEstimates' element={<MyEstimates />} />
        <Route path='/form' element={<Form />} />
        <Route path='/recap' element={<div></div>} />
>>>>>>> dev
      </Routes>
    </Router>
  );
}

export default App;
