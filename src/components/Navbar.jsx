import React, { useState } from 'react'
import logo from '../images/logo.png';
import { Link } from 'react-scroll'

function Navbar() {

    const [nav, setNav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true)
        }
        else {
            setNav(false);
        }
    }
    window.addEventListener('scroll', changeBackground)

    return (
        <nav className={nav ? "nav active" :"nav"}>
            <Link to='#' className='logo'>
                <img src={logo} alt='' />
            </Link>
            <input type="checkbox" className='menu-btn' id='menu-btn' />
            <label for="menu-btn" className='menu-icon'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                <li><Link to='#'>Home</Link></li>
                <li><Link to='#'>Serviços</Link></li>
                <li><Link to='#'>Oferta</Link></li>
                <li><Link to='#'>Sobre</Link></li>
                <li><Link to='#'>Contato</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;