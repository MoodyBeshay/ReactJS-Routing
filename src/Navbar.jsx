import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-secondary  text-uppercase fixed-top" id="mainNav">
                <div className="container">
                    <NavLink className="navbar-brand js-scroll-trigger" to=" ">Start React</NavLink>
                    <button className="navbar-toggler navbar-toggler-right text-uppercase font-weight-bold bg-primary text-white rounded collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <svg className="svg-inline--fa fa-bars fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" /></svg>{/* <i class="fas fa-bars"></i> Font Awesome fontawesome.com */}
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item mx-0 mx-lg-1"><NavLink className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to={"portfolio"}>Portfolio</NavLink></li>
                            <li className="nav-item mx-0 mx-lg-1"><NavLink className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to={'about'}>About</NavLink></li>
                            <li className="nav-item mx-0 mx-lg-1"><NavLink className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" to={'contact'} >Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

<nav> </nav>
