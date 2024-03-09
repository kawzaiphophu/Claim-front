import { NavLink } from 'react-router-dom';
import '../css/nav.css'

function Nav() {
    return (
        <>
                <div className="navbar sticky-top navbar-expand-sm fs-2">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/">
                            <img src="https://cdn-icons-png.freepik.com/256/10137/10137151.png?ga=GA1.1.1207387130.1709617310&" alt="" />
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink className="nav-link" activeClassName="active" exact to="/" >Home</NavLink>
                                <NavLink className="nav-link" activeClassName="active" to="/claimlist" >ClaimList</NavLink>
                                <NavLink className="nav-link" activeClassName="active" to="/about" >About</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}

export default Nav;
