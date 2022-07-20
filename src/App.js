import React, { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"; //Router,
import './assets/App.css';
import Home from './pages/Home';
import Car from './pages/Car';

const App =  () => {


  return (
    <>
    <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/car" element={<Car/>}/>
        </Routes>
    </Router>
     </>  
  );
}

export default App;
