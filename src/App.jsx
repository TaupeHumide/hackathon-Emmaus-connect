import "./App.css";
import Estimate from "./components/Estimate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Form from "./components/Form";
import MyEstimates from "./components/MyEstimates";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/estimate' element={<Estimate />} />
        <Route path='/myEstimates' element={<MyEstimates />} />
        <Route path='/form' element={<Form />} />
        <Route path='/recap' element={<div></div>} />
      </Routes>
    </Router>
  );
}

export default App;
