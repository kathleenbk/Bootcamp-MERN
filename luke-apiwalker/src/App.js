import SearchForm from './components/form';
import People from './components/people';
import Planets from './components/planets';
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Link, Routes, Route, Navigate } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <SearchForm />
      <Routes>
        <Route path="/people/:id" element={<People />} />
        <Route path="/planets/:id" element={<Planets />} />
      </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;
