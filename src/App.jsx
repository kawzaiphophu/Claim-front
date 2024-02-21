import './App.css';
import React from "react"
import { Routes, Route } from "react-router-dom";
import Home from"./pages/Home"
import ClaimList from"./pages/ClaimList"
import ClaimFormPage from './pages/ClaimFormPage';
import './css/claimlist.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

const App = ()=>{
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>} />
        <Route path="/claimlist" element={<ClaimList />} />
        <Route path="/formclaim" element={<ClaimFormPage />} />
      </Routes>
    </>
  )
  
}

export default App;
