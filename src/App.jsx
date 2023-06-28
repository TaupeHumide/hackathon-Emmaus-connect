import "./App.css";
import Estimate from "./components/Estimate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Form from "./components/Form";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/estimate' element={<Estimate />} />
        <Route path='/form' element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
