import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assests/logoflcs.jpeg';
import { Link } from 'react-router-dom';
import { AiOutlineMenuFold } from "react-icons/ai";

const Navbar = () => {
    const[mobileMenu, setMobileMenu] = useState(false)
    const toggleMenu = () =>{
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
    }
    return (
        <nav className='dark-nav'>
            <img src={logo} alt='logo' className='logo' />
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/allprograms">Programs</Link></li>
                <li><Link to="/">Campus</Link></li>
                <li><Link to="/">Testimonials</Link></li>
                <li><Link to="/">Vlogs</Link></li>
                <li><Link to="/">About Us</Link></li>
            </ul>
            <Link to="/contact">
                <button className="button">
                    Get Free Consultancy
                </button>
            </Link>
            <AiOutlineMenuFold className='menu-icon' onClick={toggleMenu}/>
        </nav>
    );
}

export default Navbar;
