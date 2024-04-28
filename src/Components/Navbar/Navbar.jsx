import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assests/logoflcs.jpeg';
import { Link } from 'react-scroll';
import { AiOutlineMenuFold } from "react-icons/ai";

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 500 ? setSticky(true) : setSticky(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const[mobileMenu, setMobileMenu] = useState(false)
    const toggleMenu = () =>{
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
    }
    return (
        <nav className={`${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt='logo' className='logo' />
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li><Link to="banner" smooth={true} duration={500} offset={0}>Home</Link></li>
                <li><Link to="programs" smooth={true} duration={500} offset={-210}>Programs</Link></li>
                <li><Link to="campus" smooth={true} duration={500} offset={-250}>Campus</Link></li>
                <li><Link to="testimonials" smooth={true} duration={500} offset={-250}>Testimonials</Link></li>
                <li><Link to="vlogs" smooth={true} duration={500}>Vlogs</Link></li>
                <li><Link to="about" smooth={true} duration={500} offset={-200}>About Us</Link></li>
            </ul>
            <Link to="contact" smooth={true} duration={500} offset={-250}>
                <button className="button">Enroll</button>
            </Link>
            <AiOutlineMenuFold className='menu-icon' onClick={toggleMenu}/>
        </nav>
    );
}

export default Navbar;
