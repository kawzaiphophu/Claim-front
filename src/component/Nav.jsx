import React from 'react'
import '../css/nav.css'
import { Link } from 'react-router-dom'


function Nav() {
    return (
        <div className="navbar navbar-expand-sm fs-2">
            <div className="container-fluid " >
                <Link className="navbar-brand" to="/"><img src="https://cdn-icons-png.freepik.com/256/10137/10137151.png?ga=GA1.1.1207387130.1709617310&" alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/"><>Home</></Link>
                        <Link className="nav-link" to="/claimlist"><>ClaimList</></Link>
                        <Link className="nav-link" to="/about"><>About</></Link>
                        <Link className="nav-link" to="/about"><>Test font</></Link>

                    </div>
                </div>
            </div>

        </div>

    )
}

export default Nav