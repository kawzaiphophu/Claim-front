import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ClaimList from "./pages/ClaimList";
import About from './pages/About';
import Loading from './pages/Loading';
import './App.css';


const App = () => {
  const [loading, setLoading] = useState(true); 
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);


    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {loading ? (
        <Loading /> 
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/claimlist" element={<ClaimList />} />
          <Route path="/about" element={<About />} />
        </Routes>
      )}
    </>
  );
}

export default App;