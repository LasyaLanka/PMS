import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/home"; // Capitalize Home to match the component file
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import AboutUs from "./Components/AboutUs"; // Correct import for AboutUs component
 // Make sure you want to add this route
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* This will be the main entry point */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about-us" element={<AboutUs />} />
      
      </Routes>
    </Router>
  );
}

export default App;
