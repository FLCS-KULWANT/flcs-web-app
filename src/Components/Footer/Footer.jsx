import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <p>&#169; {new Date().getFullYear()} FLCS. All rights are reserved!</p>
        <span><a href='https://ayushraja.netlify.app/' target="_blank">Author: Ayush Raja </a></span>
        <ul>
            <li>Terms of Services</li>
            <li>Privacy Policy</li>
        </ul>
    </div>
  )
}

export default Footer