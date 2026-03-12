import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import "../assets/css/Header.css"

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <header className='Header'>
            <div className='brand'><img src='/image/graduate.png' className="brand-img" alt='graduate' /></div>
            <button className="toggle-btn" onClick={handleToggle}>☰</button>
            <ul className={toggle ? "nav nav-underline show" : "nav nav-underline"}>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/AboutUs">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Project">Project</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Skills">Skills</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/ContactUs">Contact Me</NavLink>
                </li>
            </ul>
        </header>
    )
}

export default Header
