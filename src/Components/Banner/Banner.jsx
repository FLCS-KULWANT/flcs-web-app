import React from 'react'
import './Banner.css'
import {Link} from 'react-scroll'
import bannervideo from '../../assests/bannervideo.mp4'
const Banner = () => {
    return (
        <div className='banner'>
            <video className='video' src={bannervideo} muted autoPlay loop typeof='video/mp4'></video>
            <div className='overlayDiv'></div>

            <div className='homeContent container'>
                <div className='textDiv'>
                    <span className='smallText'>Study in Italy</span>
                    <div className='homeTitle'>Better Opportunity for better World</div>
                    <p className='homeDescription'>Unlock the door to your future by studying in Italy with our consultancy. We provide comprehensive assistance to students, guiding them through the entire process from application to enrollment. Explore our packages today and start planning your journey towards a bright academic future in Italy.</p>
                </div>
                <br/>
                <div>
                <Link to="contact" smooth={true} duration={500} offset={-250}>
                <button className="button">Explore More</button>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner