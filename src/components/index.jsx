import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigasi from "./Navigasi";
import Portfolio from "./Portfolio";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import News from "./News";
import Login from "./Login";
import Redux from "./Redux";

const Componentscon = () => {
  return (
    <div className="App">
      <Router>
        {/* <Navigasi /> */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Portfolio />
                <Navigasi />
              </>
            }
          />
          {/* <Route exact path="/" element={<Portfolio />} /> */}
          <Route exact path="/news" element={<News />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/redux" element={<Redux />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Componentscon;
