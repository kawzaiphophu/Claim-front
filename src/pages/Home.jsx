import React from 'react'
import Nav from '../component/Nav'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
function Home() {
  return (
    <>
        <Nav/>
      <div className='jumbotron'>Home</div>
      <canvas></canvas>
     </>)
}

export default Home