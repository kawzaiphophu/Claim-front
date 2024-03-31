import React, { useState, useEffect } from 'react';
import Slide from '../component/Slide';
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
import 'animate.css';

function Home() {
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

  return (
    <>
      <div className="grid-sm" >
        <section className='parallax'>
          <img src={hill1} alt="hill1" style={{ top: `${scrollY * 1}px` }} />
          <img src={hill2} alt="hill2" />
          <img src={hill3} alt="hill3" />
          <img src={hill4} alt="hill4" style={{ left: `${scrollY * -1.5}px` }} />
          <img src={hill5} alt="hill5" style={{ left: `${scrollY * 1.5}px` }} />
          <img src={tree} alt="tree" />
          <div className="typing" style={{ marginTop: `${scrollY * 2.5}px` }}>
            <h2 className="text-uppercase">Welcome&nbsp;To&nbsp;Website</h2>
          </div>
          <img src={plant} alt="plant" />
          <img src={leaf} alt="leaf" style={{ top: `${scrollY * -1.5}px` }} />
        </section>

        {/* /* about me */}
        <section id='about' className='py-3'></section>
        <main className="page-main ">
          <div className="content">
            <div className='container-sm section-1'>
              <h1 className='sub-header'>About Me</h1>
              <div className='img my-5'>
                <img className='img-1' src="https://th.portal-pokemon.com/play/resources/pokedex/img/pokemon_bg.png" alt="" />
                <img className='rounded-circle img-2' src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1710944863~exp=1710945463~hmac=b26c699633c3c26d22e17f4304db7b712897496dca5afdfeca2af8493d7f1fd6" alt="" />
              </div>
              <h2 className='d-flex p-2'>My Name Is Kaw </h2>
              <p className='d-flex p-2 ps-5'>
                {`My Name is Somboon Zaiphophu my Nickname is Kaw I am 25 years old. Nationality Thai. ethnicity Thai. My Github :`}
              </p>
              <Slide/>
            </div>
            <hr />
            <h1 className='my-5'>MY ProJect</h1>
           
          </div>
        </main >
        <footer className="page-footer">
          <div className="content">
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
          </div>
        </footer>
      </div >
    </>
  )
}

export default Home