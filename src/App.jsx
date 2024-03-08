
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import React from "react"
import { Routes, Route } from "react-router-dom";
import Home from"./pages/Home"
import ClaimList from"./pages/ClaimList"
import About from './pages/About';
import './App.css';

const App = ()=>{
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/claimlist" element={<ClaimList />} />
        <Route path="about" element={<About/>}/>
      </Routes>
    </>
  )
  
}

export default App;
