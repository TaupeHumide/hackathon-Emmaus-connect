import "./App.css";
import Estimate from "./components/Estimate";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/home";
import Form from "./components/Form";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/estimate" element={<Estimate />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
