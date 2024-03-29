import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../css/home.css'

function Home() {

  return (
    <>
      <div className="grid-sm " >
        <header className="page-header py-5">
          <div className="content">
            <div className='container-sm' >
              <div className="typing">
                <h2 className="text-uppercase">Welcome&nbsp;To&nbsp;Website</h2>
              </div>
            </div>
          </div >
        </header>

        <hr className='m-5' />
        {/* /* about me */}
        <main className="page-main pt-5">
          <div className="content">
            <div className='container-sm section-1'>
              <h1 className='sub-header'>About Me</h1>
              <div className='img my-5'>
                <img className='img-1' src="https://th.portal-pokemon.com/play/resources/pokedex/img/pokemon_bg.png" alt="" />
                <img className='rounded-circle img-2' src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1710944863~exp=1710945463~hmac=b26c699633c3c26d22e17f4304db7b712897496dca5afdfeca2af8493d7f1fd6" alt="" />
              </div>
              <h2 className='d-flex p-2'>My Name Is Kaw </h2>
              <p className='d-flex p-2 ps-5'>{"My Name Is = {Somboon Zaiphophu}"}
              </p>

              <div className='container-fluid-sm w-100 d-flex justify-content-center'>
                <div className="grid-item content ">
                  <div className="content-item">
                    <div className="container mb-3 d-flex justify-content-center h-100">

                      <h2 className="card-title">Front-End Skill </h2>
                        <div className="card-body w-100">
                          <p className="card-text">
                            <p>HTML</p>
                            <p>CSS</p>
                            <p>JavaScript</p>
                            <p>React</p>
                            <p>Bootstrap 5</p>
                          </p>
                        </div>
                      </div>

                  </div>
                  <div className="content-item">
                    <div className="container mb-3 d-flex justify-content-center h-100">
                      <div className="card w-100 m-3">
                        <div className="card-body w-100">
                          <h2 className="card-title">Back-End Skill </h2>
                          <p className="card-text">
                            <p>JavaScript</p>
                            <p>NodeJs</p>
                            <p>ExpressJs</p>
                          </p>
                          <h2 className="card-title">Data Base</h2>
                          <p className="card-text">
                            <p>MongoDB</p>
                            <p>Mongoose</p>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-item">
                    <div className="container mb-3 d-flex justify-content-center h-100">
                      <div className="card w-100 m-3">
                        <div className="card-body w-100">
                          <h2 className="card-title">Other</h2>
                          <p className="card-text">
                            <p>Git</p>
                            <p>GitHub</p>
                            <p>PostMan</p>
                            <p>VScode</p>
                          </p>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="container d-flex justify-content-center">
              {/* /* my Project */}
              <div className='  container-fluid-sm w-100 d-flex justify-content-between'>
                <div className="grid-item content ">
                  <div className="content-item">
                    <div className="container my-3 d-flex justify-content-center">
                      <div className="card">
                        <img className="card-img-top" src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww" alt='' style={{ width: '100%' }} />
                        <div className="card-body">
                          <h4 className="card-title">John Doe</h4>
                          <p className="card-text"></p>
                          <a href="/" className="btn btn-primary">See Profile</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="content-item">
                      <div className="container my-3 d-flex justify-content-center">
                        <div className="card">
                          <img className="card-img-top" src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww" alt='' style={{ width: '100%' }} />
                          <div className="card-body">
                            <h4 className="card-title">John Doe</h4>
                            <p className="card-text"></p>
                            <a href="/" className="btn btn-primary">See Profile</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="content-item">
                      <div className="container my-3 d-flex justify-content-center">
                        <div className="card">
                          <img className="card-img-top" src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww" alt='' style={{ width: '100%' }} />
                          <div className="card-body">
                            <h4 className="card-title">John Doe</h4>
                            <p className="card-text"></p>
                            <a href="/" className="btn btn-primary">See Profile</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main >
        <footer className="page-footer">
          <div className="content">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner bg-light" style={{ width: '90%', height: '300px', marginLeft: 'auto', marginRight: 'auto', marginTop: '1rem' }}>
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