import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Home, Login, Services } from "./Components/Navbar/Home";
import NavBar from "./Components/Navbar/Navbar";

function App() {
  return <BrowserRouter>
  <NavBar />
    <div>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/about-us" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/login" element={<Login />} />
    </Routes>
    </div>
    
  </BrowserRouter>;
}

export default App;
