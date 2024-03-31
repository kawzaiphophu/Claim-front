import '../css/nav.css'
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setPrevScrollPos(currentScrollPos);
      if (prevScrollPos >= 30) {
        setVisible(false)

      } else {
        setVisible(true)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`navbar sticky-top navbar-expand-sm fs-5 p-0  ${visible ? 'navbar--show' : 'navbar--hidden'}`}>
      <div className="container-fluid ps-1">
        <NavLink className="navbar-brand "
          to="/">
          <img src="https://cdn-icons-png.freepik.com/256/10137/10137151.png?ga=GA1.1.1207387130.1709617310&" alt="" />
        </NavLink>
        <button className="navbar-toggler"
          type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse"
          id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link ps-3" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className="nav-link ps-3" to="/" onClick={scrollToAbout}>About</NavLink>
            </li>
            <li className="nav-item dropdown ps-2">
              <NavLink className="nav-link dropdown-toggle"
                to="1" id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                ProJect
              </NavLink>
              <ul className="dropdown-menu w-25 p-3"
                aria-labelledby="navbarDropdown">
                <li><NavLink className="dropdown-item "
                  to="/ClaimList"> Claim</NavLink></li>
                <li><NavLink className="dropdown-item "
                  to="/Pokemon"> Poke</NavLink></li>
                <li><NavLink className="dropdown-item "
                  to="test"> test</NavLink></li>
                <li><hr className="dropdown-divider" /></li>
                <li><NavLink className="dropdown-item "
                  to="1">test2</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
