import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "../src/component/Nav";
import Home from "./pages/Home";
import ClaimList from "./pages/ClaimList";
import About from './pages/About';
import Loading from './pages/Loading';
import './App.css';
import Poke from './pages/Poke';
import PokemonDetails from './component/PokemonDetails';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, );

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Nav />
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/claimlist" element={<ClaimList />} />
          <Route path="/about" element={<About />} />
          <Route path="/pokemon/*" element={<PokemonRoutes />} />
        </Routes>
      )}
    </>
  );
}

const PokemonRoutes = () => {
  
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Poke />} />
          <Route path=":id" element={<PokemonDetails />} />
        </Routes>
      
    </>

  );
}

export default App;
