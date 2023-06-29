import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Estimate from "./components/Estimate";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Faq from "./components/Faq";
import Popup from "./components/Popup";
import Form from "./components/Form";
import MyEstimates from "./components/MyEstimates";
import LaptopForm from "./components/LaptopForm";
import TabletForm from "./components/TabletForm";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <Navbar setIsOpen={setIsOpen} />
      {isOpen && <Popup setIsOpen={setIsOpen} />}
      <Routes>
        <Route path="/faq" element={<Faq />} />
        <Route path="/" element={<Home />} />
        <Route path="/estimate" element={<Estimate />} />
        <Route path="/myEstimates" element={<MyEstimates />} />
        <Route path="/form" element={<Form />} />
        <Route path="/laptopForm" element={<LaptopForm />} />
        <Route path="/tabletForm" element={<TabletForm />} />
        <Route path="/recap" element={<div></div>} />
      </Routes>
    </Router>
  );
}

export default App;
