import React from 'react'
import { useSelector } from 'react-redux';
import {BrowserRouter as Router ,NavLink} from "react-router-dom";
 const Navbar = () => {
     const state = useSelector((state) => state.handleCart)
  return (
    <div>
    <Router>
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
    <div className='container'>
        <NavLink className="navbar-brand fw-bold fs-4" to="/">LaCOLLECTION</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
                <li className="nav-item active">
                <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/products">Product</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                </li>
            </ul>
        <div className='buttons'>
            <NavLink to="/login" type="button" class="btn btn-outline-dark">
                <i className='fa fa-sign-in me-1'></i>Login
            </NavLink>
            <NavLink to="/registar" type="button" class="btn btn-outline-dark ms-2">
                <i className='fa fa-user-plus me-1'></i>Registar
            </NavLink>
            <NavLink to="/cart" type="button" class="btn btn-outline-dark ms-2">
                <i className='fa fa-shopping-cart me-1'></i>Cart ({state.length})
            </NavLink>
        </div>
        </div>
    </div>
    </nav>

    </Router>

</div>
  )
}
export default Navbar;