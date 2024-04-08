import '../css/nav.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navs = document.querySelectorAll(".navbar-nav li a");
    const intersectionHandler = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          const navLink = document.querySelector('.navbar-nav li a[data-id="' + id + '"]');
          if (navLink) {
            navs.forEach(nav => nav.classList.remove('active'));
            navLink.classList.add('active');
          } else {
            navs.forEach(nav => nav.classList.remove('active'));
          }
        }
      });
    };

    const observer = new IntersectionObserver(intersectionHandler, {
      rootMargin: '-120px 120px -80% 0px',
    });
    sections.forEach(sec => {
      observer.observe(sec);
    });
    return () => {
      observer.disconnect();
    };
  }, [scrollY]);


  const scrollTo = (path) => {
    const section = document.getElementById(path);
    if (section) {
      const offset = section.offsetTop - 70;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };
  const closeNavbar = () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    navbarToggler.classList.add('collapsed');
    navbarCollapse.classList.remove('show');
  };


  return (
    <div className={`navbar fixed-top navbar-expand-lg fs-5 m-0 p-0`}>
      <div className="container-fluid ps-3">
        <Link className="navbar-brand py-2" to="/">
          <img src="https://cdn-icons-png.freepik.com/256/10137/10137151.png?ga=GA1.1.1207387130.1709617310&" alt="" />
        </Link>
        <button className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <nav className="collapse navbar-collapse"
          id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-lg-0">
            <li className="nav-item">
              <Link data-id="home" className="nav-link mx-3 active" to="/" onClick={() => { scrollTo('home'); closeNavbar(); }}>Home</Link>
            </li>
            <li >
              <Link data-id="about" className="nav-link mx-3" to="/" onClick={() => { scrollTo('about'); closeNavbar(); }}>About</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link mx-3"
                data-id="project"
                to="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                onClick={() => { scrollTo('project'); }}>
                Project
              </Link>
              <ul className="dropdown-menu w-25 px-3 "
                aria-labelledby="navbarDropdown">
                <li ><Link className="dropdown-item py-2"
                  to="/ClaimList"
                  onClick={()=>{closeNavbar(); }}> Claim</Link></li>
                <li><Link className="dropdown-item py-2"
                  to="/Pokemon"
                  onClick={()=>{closeNavbar(); }}> Poke</Link></li>
              </ul>
            </li>
            <li >
              <Link data-id="contacts" className="nav-link mx-3" to="/" onClick={() => { scrollTo('contacts'); closeNavbar(); }}>Contacts</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
