import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import { FaArrowCircleRight, FaArrowCircleLeft, FaUserGraduate } from "react-icons/fa";

const Testimonials = ({ heading, subheading }) => {
    const testimonialsData = [
        {
            id: 1,
            name: 'John Doe',
            college: 'ABC University',
            from: 'New York, USA',
            feedback: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mattis risus. Donec vitae nunc eu ex eleifend scelerisque. Integer ac velit felis. Nullam vulputate semper felis id ultrices.',
            image: ''
        },
        {
            id: 2,
            name: 'Jane Smith',
            college: 'XYZ College',
            from: 'London, UK',
            feedback: 'Vivamus consequat mi quis justo volutpat, at interdum ex tincidunt. Nam auctor mauris sit amet fringilla dapibus. Ut sed ex malesuada, vehicula lacus et, dignissim justo. Cras eget eros ac dui eleifend faucibus.',
            image: ''
        },
        {
            id: 3,
            name: 'David Brown',
            college: '123 Institute',
            from: 'Sydney, Australia',
            feedback: 'Fusce fermentum, nulla vel finibus luctus, eros risus malesuada mi, at varius nisi nisi non felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
            image: ''
        },
        {
            id: 4,
            name: 'Emily Johnson',
            college: '456 University',
            from: 'Toronto, Canada',
            feedback: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ultricies dolor a sapien pellentesque tempus. Ut sit amet ligula quam.',
            image: ''
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [numberOfSlides, setNumberOfSlides] = useState(2);

    useEffect(() => {
        const handleResize = () => {
            const newNumberOfSlides = window.innerWidth < 800 ? 1 : 2;
            setNumberOfSlides(newNumberOfSlides);
        };

        handleResize(); // Call initially to set the initial state

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleNext = () => {
        setCurrentIndex(currentIndex === testimonialsData.length - numberOfSlides ? 0 : currentIndex + 1);
    };

    const handlePrev = () => {
        setCurrentIndex(currentIndex === 0 ? testimonialsData.length - numberOfSlides : currentIndex - 1);
    };

    return (
        <>
            <div className='heading'>
                <h2 className="testimonialHeading">{heading ? heading : ''}</h2>
                <p className="testimonialSubHeading">{subheading ? subheading : ''}</p>
            </div>
            <div className='testimonials'>
                <FaArrowCircleLeft className='back-btn' onClick={handlePrev} />
                <div className={`${numberOfSlides === 2 ? 'slider' : 'slider1'}`}>
                    {testimonialsData.slice(currentIndex, currentIndex + numberOfSlides).map(testimonial => (
                        <div key={testimonial.id} className="slide">
                            <div className='user-info'>
                                {testimonial.image ? <img src={testimonial.image} alt=''/> : <FaUserGraduate/>}
                                <div>
                                    <h3>{testimonial.name}</h3>
                                    <span>{testimonial.college}</span>
                                    <p>{testimonial.from}</p>
                                </div>
                            </div>
                            <div className="feedback">
                                <p>{testimonial.feedback}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <FaArrowCircleRight className='next-btn' onClick={handleNext} />
            </div>
        </>
    );
};

export default Testimonials;
