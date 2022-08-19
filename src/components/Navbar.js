import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <div><nav className="navbar navbar-expand-lg bg-white py-3 shadow-sm">
            <div className="container">
                <NavLink to='/' className="navbar-brand text-dark fw-bold fs-4 " >RJ COLLECTION</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link text-dark" >Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/home' className="nav-link active text-dark" aria-current="page" href="#">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='products' className="nav-link text-dark" >Product</NavLink>
                        </li>                        
                        <li className="nav-item">
                            <NavLink to='/contact' className="nav-link text-dark" >Contact</NavLink>
                        </li>


                    </ul>

                </div>
            </div>
        </nav></div>
    )
}

export default Navbar