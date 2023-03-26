import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'

export default function Layout() {
    return (
        <>
            <Navbar />
            <div className='pt-5'>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

// <Portfoilo />
// <About />
// <Contact />