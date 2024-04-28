import React, { useState } from 'react';
import './About.css';
import logo from '../../assests/logoflcs.jpeg';
import admin from '../../assests/admin-kulwant.png';
import { FaCirclePlay } from "react-icons/fa6";
import { SiGooglemeet } from "react-icons/si";

const About = ({ heading, subheading }) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isCallDialogOpen, setIsCallDialogOpen] = useState(false);
    const [fullName, setFullName] = useState('');
    const [number, setNumber] = useState('');
    const [question, setQuestion] = useState('');

    const openDialog = () => {
        setIsDialogOpen(true);
    }

    const closeDialog = () => {
        setIsDialogOpen(false);
    }

    const openCallDialog = () => {
        setIsCallDialogOpen(true);
    }

    const closeCallDialog = () => {
        setIsCallDialogOpen(false);
    }

    const handleCallSubmit = (e) => {
        e.preventDefault();
        sendWhatsAppMessage()
        closeCallDialog();
        setFullName('');
        setNumber('');
        setQuestion('');
    }

    const sendWhatsAppMessage = () => {
        const message = `*Full Name:* ${fullName}\n*Number:* ${number}\n*Question:* ${question}`;
        const whatsappNumber = '393517556337';
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    }

    return (
        <div className='about-us'>
            <div className='heading'>
                <h2 className="aboutHeading">{heading ? heading : ''}</h2>
                <p className="aboutSubHeading">{subheading ? subheading : ''}</p>
            </div>
            <div className='about'>
                <div className="about-left">
                    <img src={admin} alt='Founders Image' className='about-img' />
                    <FaCirclePlay className='play-icon' onClick={openDialog} />
                </div>
                <div className='about-right'>
                    <h3>Kulwant Singh Rathore</h3>
                    <h2>Future Leading Consultancy Services</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Error a sequi laborum rem dolore beatae vitae totam, eos eveniet.
                        Maiores neque accusantium cumque expedita, consequatur dolor voluptate qui minus,
                        eaque ipsum placeat ratione quibusdam tempore.</p>
                    <br />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Error a sequi laborum rem dolore beatae vitae totam, eos eveniet.
                        Maiores neque accusantium cumque expedita, consequatur dolor voluptate qui minus,
                        eaque ipsum placeat ratione quibusdam tempore.</p>
                    <br/>
                    <button className="button" onClick={openCallDialog}>Book 1:1 Session <SiGooglemeet/></button>
                </div>
            </div>
            {isDialogOpen && (
                <div className="about-dialog">
                    <div className="about-dialogContent">
                        <button onClick={closeDialog}>Close</button>
                        <br/>
                        <br/>
                         <iframe
                            className='iframe'
                            src="https://www.youtube.com/embed/oY32PnZClSo?autoplay=1"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
            
            {isCallDialogOpen && (
                <div className="call-dialog">
                   <div className="call-dialogContent">
                    <button onClick={closeCallDialog}>Close</button>
                    <br/>
                    <form onSubmit={handleCallSubmit}>
                        <div className="form-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="number">Number</label>
                            <input
                                type="text"
                                id="number"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="question">Question?</label>
                            <textarea
                                id="question"
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="button-submit">Submit</button>
                        </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default About;
