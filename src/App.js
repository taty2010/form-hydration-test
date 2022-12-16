import React from "react";
import './App.css';
import {Routes, Route, Link} from "react-router-dom";
import Success from "./success";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Link to="/success">Success</Link>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/success" element={<Success/>} />
      </Routes>
    </div>
  );
}

export default App;
