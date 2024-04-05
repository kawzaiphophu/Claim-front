import React, { useState, useEffect } from 'react';
import Slide from '../component/Slide';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/home.css'
import hill1 from '../img/hill1.png'
import hill2 from '../img/hill2.png'
import hill3 from '../img/hill3.png'
import hill4 from '../img/hill4.png'
import hill5 from '../img/hill5.png'
import leaf from '../img/leaf.png'
import plant from '../img/plant.png'
import tree from '../img/tree.png'
import claims from '../img/claims.png'
import pokemon from '../img/pokemon.png'
import kaw from '../img/kaw.png'
import SendEmail from '../component/SendEmail';

function Home() {
  AOS.init();

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
  const isMobile = window.innerWidth <= 768;
  return (
    <>
      {/* home */}
      <div className="grid-sm" >
        <section id='home' className='parallax home'>
          <img src={hill1} alt="hill1" style={isMobile ? null : { top: `${scrollY * 1}px`, transition: 'top 1s' }} />
          <img src={hill2} alt="hill2" />
          <img src={hill3} alt="hill3" />
          <img src={hill4} alt="hill4" style={isMobile ? null : { left: `${scrollY * -1.5}px`, transition: 'left 1s' }} />
          <img src={hill5} alt="hill5" style={isMobile ? null : { left: `${scrollY * 1.5}px`, transition: 'left 1s' }} />
          <img src={tree} alt="tree" />
          <div className="typing" style={isMobile ? null : { marginTop: `${scrollY * 2.5}px`, transition: 'margin-top 1s' }}>
            <h2 className="text-uppercase">Welcome&nbsp;To&nbsp;Website</h2>
          </div>
          <img src={plant} alt="plant" />
          <img src={leaf} alt="leaf" style={isMobile ? null : { top: `${scrollY * -1.5}px`, transition: 'top 1s' }} />

        </section>
        {/* about me */}
        <section id='about' className='about'
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500">
          <main className="page-main ">
            <div className="content animate__animated animate__fadeInUp">
              <div className='container-sm section'>
                <h1 className='sub-header py-1'>About Me</h1>
                <div className='img d-flex h-50'>
                  <div className="w-25 d-flex flex-column-reverse align-items-end py-5 ">
                    <h6>Html</h6>
                    <h6>CSS</h6>
                    <h6>JavaScript</h6>
                    <h6>Bootstrap 5</h6>
                    <h6>React</h6>
                    <h5>Front-end</h5>
                  </div>
                  <div className="merged-image w-50">
                    <img className='img-1' src="https://th.portal-pokemon.com/play/resources/pokedex/img/pokemon_bg.png" alt="" />
                    <img className='img-2 rounded-circle ' src={kaw} alt="Aspect ratio" />
                  </div>
                  <div className="w-25 d-flex flex-column-reverse align-items-start py-5 ">
                    <h6>JavaScript</h6>
                    <h6>NodeJS</h6>
                    <h6>Express</h6>
                    <h6>MongoDB</h6>
                    <h6>Mongoose</h6>
                    <h5>Back-end</h5>
                  </div>
                </div>
                <Link to="https://github.com/kawzaiphophu"><h4 className='btn btn-light'>My github : https://github.com/kawzaiphophu</h4>
                </Link>
                <h2 className='d-flex '>My Name Is Kaw </h2>
                <p className='d-flex p-2 ps-5'>
                  {`My Name is Somboon Zaiphophu my Nickname is Kaw I am 25 years old. Nationality Thai. ethnicity Thai.`}
                </p>
                <Slide />
              </div>
            </div>
          </main >
        </section>
        <hr className='mt-5' />
        {/* Project */}
        <section
          id='project'
          className='project'
          data-aos="fade-up">
          <div
            className='container content '
            data-aos="fade-up"
            data-aos-duration="1500">
            <div id="carouselExampleIndicators" className="carousel slide " data-bs-ride="carousel">
              <div className="carousel-indicators ">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner bg-light" style={{ width: '100%', height: '200px', margin: 'auto', marginRight: 'auto' }}>
                <div className="carousel-item active ">
                  <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="https://media.istockphoto.com/id/1303088024/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%8F%E0%B8%B4%E0%B8%A7%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%B4%E0%B8%88%E0%B8%B4%E0%B8%97%E0%B8%B1%E0%B8%A5.jpg?s=2048x2048&w=is&k=20&c=DPxor3wASuZoJk2AfJFU_v225Ae1ffANNXX_tJSVUn8=" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="https://images.unsplash.com/photo-1569748130764-3fed0c102c59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <h1 className='pb-5 '>MY ProJect</h1>
            <div className='container'>
              <div className="row row-cols-1 row-cols-md-2 g-4">
                <Link to={"/ClaimList"}
                  className='nav-link'
                  data-aos="fade-left">
                  <div className="col mx-3">
                    <div className="card">
                      <img src={claims} className="card-img-top p-2 "
                        alt="claims" />
                      <div className="card-body">
                        <h5 className="card-title">Claims</h5>
                        <p className="card-text">
                          This project is used to fill in customer information and store it in a database. You can add, delete, and edit product claim information from every branch.
                        </p>
                        <hr />
                        <h6>HTML CSS JavaScript react bootstrap nodeJs Express MongoDB</h6>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to={"/pokemon"} className='nav-link'
                  data-aos="fade-right">
                  <div className="col mx-3">
                    <div className="card">
                      <img src={pokemon} className="card-img-top p-2 h-auto"
                        alt="pokemon" />
                      <div className="card-body">
                        <h5 className="card-title">Pokemon</h5>
                        <p className="card-text">
                          Pokemon Project Created to fetch all pokemon and can be searched by name and by type to show API management from pokeapi and can view details of each pokemon.
                        </p>
                        <hr />
                        <h6>HTML CSS JavaScript react bootstrap pokeapi</h6>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <hr className='m-5' />
        </section>
        {/* footer */}
        <section id='contacts' className="page-footer w-100 mx-1 px-5 d-flex justify-content-between">
          <div className='contacts w-100'>
            <h1 className='mb-2 w-100'>contacts</h1>
            <p>Tel : 0972577932</p>
            <p>line : 0972577932</p>
            <p>Email : kawzaiphophu@gmail.com</p>
            <p>Address : Charan 53, Bang Yi Khan, Bang Phlat, Bangkok </p>
          </div>
          <div className='d-flex justify-content-center contacts w-100 mb-5'>
            <div className='w-100'>
              <h1 className='mb-2 mt-5'>Send Email TO Me</h1>
              <SendEmail />

            </div>
          </div>
        </section>
      </div >
    </>
  )
}

export default Home