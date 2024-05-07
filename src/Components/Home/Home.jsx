import React from 'react'
import About from '../About/About';
import Banner from '../Banner/Banner';
import Campus from '../Campus/Campus';
import Contact from '../Contact/Contact';
import Programs from '../Programs/Programs';
import Testimonials from '../Testimonials/Testimonials';
import Vlogs from '../Vlogs/Vlogs';
import NavbarHome from '../Navbar/NavbarHome';
export const Home = () => {
    return (
        <div>
            <NavbarHome />
            <Banner />
            <Programs heading='Our Programs' subheading='Explore our range of degree programs to achieve your academic goals.' />
            <Campus heading='Top Italian Universities' subheading='Discover the leading universities in Italy and their exceptional offerings.' />
            <Testimonials heading='Hear from our students' subheading='Don’t trust us? Hear from our students' />
            <Vlogs heading='Explore Italy with Me' subheading='Follow my YouTube channel for regular updates.' />
            <About heading='Know about Us' subheading='Learn more about our institution and our mission.' />
            <Contact heading='Get in Touch' subheading='Let us know how we can help you.' />
        </div>
    )
}
