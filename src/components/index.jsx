import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigasi from "./Navigasi";
import Portfolio from "./Portfolio";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import News from "./News";
import Login from "./Login";

const Componentscon = () => {
  return (
    <div className="App">
      <Router>
        <Navigasi />
        <Routes>
          <Route exact path="/" element={<Portfolio />} />
          <Route exact path="/news" element={<News />} />
          <Route exact path="/regis" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Componentscon;
