import React from 'react'
import '../css/nav.css'
import { Link } from 'react-router-dom'


function Nav() {
    return (
        <div className="navbar navbar-expand-sm fs-2">
            <div className="container-fluid " >
                <Link className="navbar-brand fs-1 al" to="/"><img src="" alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/"><><h1>Home</h1></></Link>
                        <Link className="nav-link" to="/claimlist"><><h1>ClaimList</h1></></Link>
                        <Link className="nav-link" to="/about"><><h1>About</h1></></Link>


                    </div>
                </div>
            </div>

        </div>

    )
}

export default Nav