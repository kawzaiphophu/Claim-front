import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from "react"
import { Routes, Route } from "react-router-dom";
import Home from"./component/Home"
import ClaimList from"./component/ClaimList"
import FormClaim from"./component/FormClaim"



const App = ()=>{
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/claimlist" element={<ClaimList />} />
        <Route path="/formclaim" element={<FormClaim />} />
      </Routes>
    </>
  )
  
}

export default App;
