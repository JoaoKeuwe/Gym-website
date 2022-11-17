import React, { useState } from 'react'
import logo from '../images/logo.png';
import { Link } from 'react-scroll'

function Navbar() {
    const [nav, setNav] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true)
        }
        else{
            setNav(false);
        }
    }
    window.addEventListener('scroll', changeBackground)
    return (
        <nav className={nav ? "nav active" :"nav"}>
            <Link to='#' className='logo'>
                <img src={logo} alt="" />
            </Link>
        </nav>
    )
}

export default Navbar