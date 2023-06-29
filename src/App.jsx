import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Estimate from "./components/Estimate";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Faq from "./components/Faq";
import Popup from "./components/Popup";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <Navbar setIsOpen={setIsOpen} />
      {isOpen && <Popup setIsOpen={setIsOpen} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/estimate" element={<Estimate />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;
