import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className="navbar navbar-expand-sm navbar-light bg-light fs-2">
            <div className="container-fluid " >
                <Link className="navbar-brand fs-1" to="/">KKawz</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link" to="/claimlist">ClaimList</Link>
                        <Link className="nav-link" to="/formclaim">FormClaim</Link>
                        <Link className="nav-link" to="/#" tabIndex="-1" aria-disabled="true">about</Link>
                    </div>
                </div>
            </div>
            
        </nav>
        
    )
}

export default Nav