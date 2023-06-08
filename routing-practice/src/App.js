import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import DisplayText from "./components/display-text";
import DisplayColorWord from "./components/display-color-word";
import "./App.css";

function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
      
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/:text' element={<DisplayText />} />
          <Route path='/:word/:wordColor/:backgroundColor' element={<DisplayColorWord />} />
        </Routes>
        
      
    </div>
    </BrowserRouter>
  );
}

export default App;
