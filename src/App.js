import { HashRouter, Route, Routes } from "react-router-dom";
import Magna from "./components/pages/Magna";
import SobreProjeto from "./components/pages/SobreProjeto";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import React from "react";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/magna" element={<Magna />} />
        <Route path="/sobreoprojeto" element={<SobreProjeto />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
