import '../css/nav.css'
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <div className={`navbar sticky-top navbar-expand-sm fs-2 p-0 ${visible ? 'navbar--show' : 'navbar--hidden'}`}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src="https://cdn-icons-png.freepik.com/256/10137/10137151.png?ga=GA1.1.1207387130.1709617310&" alt="" />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/claimlist">ClaimList</NavLink>
            <NavLink className="nav-link" to="/about">About</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
