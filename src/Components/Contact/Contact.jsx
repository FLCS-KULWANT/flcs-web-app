import React, { useState } from 'react';
import './Contact.css';
import { SiGmail } from 'react-icons/si';
import { MdAddCall } from 'react-icons/md';
import { FaLocationDot, FaYoutube } from 'react-icons/fa6';
import { FaEnvelopeOpenText, FaInstagram, FaTelegramPlane, } from 'react-icons/fa';

const Contact = ({heading, subheading}) => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [course, setCourse] = useState('');
  const [interestedCourse, setInterestedCourse] = useState('');
  const [ieltsAvailable, setIeltsAvailable] = useState(false);
  const [experience, setExperience] = useState('');
  const ContactData = {
    email: '2024ksrathore@gmail.com',
    mobile: '+39 351 755 6337, +91 99278 92021',
    address: 'Tanakpur Road, Opposite Police Station, Majhola (U.S. Nagar), 262308, Uttarakhand',
    whatsappNumber : '9927892021',
    instagram : 'https://www.instagram.com/kulwant.in.italy',
    telegram : 'http://t.me/livinginitalykulwant',
    youtube : 'https://www.youtube.com/@livinginitalykulwant'
};

  const sendToWhatsApp = () => {
    const message = `Full Name: ${fullName}\nAddress: ${address}\nMobile: ${mobile}\nEmail: ${email}\nCourse: ${course}\nInterested Course: ${interestedCourse}\nIELTS Available: ${ieltsAvailable ? 'Yes' : 'No'}\nExperience: ${experience} years`;
    const whatsappNumber = ContactData.whatsappNumber;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendToWhatsApp()
    console.log('Form submitted:', { fullName, address, mobile, email, course, interestedCourse, ieltsAvailable, experience });

    setFullName('');
    setAddress('');
    setMobile('');
    setEmail('');
    setCourse('');
    setInterestedCourse('');
    setIeltsAvailable(false);
    setExperience('');
  };

  return (
    <>
      <div className='heading'>
        <h2 className="contactHeading">{heading ? heading : ''}</h2>
        <p className="contactSubHeading">{subheading ? subheading : ''}</p>
      </div>
      <div className="contact">
        <div className="contact-col">
          <h3>Send Us a Message <FaEnvelopeOpenText /></h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis placeat
            tempore tempora dolor laudantium ex aperiam debitis, saepe at, inventore
            officiis suscipit aliquam temporibus voluptatum dicta veritatis consequuntur
            nostrum officia?
          </p>
          <ul>
          <a href={`mailto:${ContactData.email}`}><li><SiGmail className="icon" /> {ContactData.email}</li></a>
          <a href={`tel:${ContactData.mobile}`}><li><MdAddCall className="icon" /> {ContactData.mobile}</li></a>
          <li><FaLocationDot className="icon" /> {ContactData.address}</li>
          <a href={ContactData.youtube} target='_blank'><li><FaYoutube className="icon"/>{ContactData.youtube.split('/').pop()}</li></a>
          <a href={ContactData.instagram} target='_blank'><li><FaInstagram className="icon"/>{ContactData.instagram.split('/').pop()}</li></a>
          <a href={ContactData.telegram} target='_blank'><li><FaTelegramPlane className="icon"/>{ContactData.telegram.split('/').pop()}</li></a>
          </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile</label>
              <input
                type="text"
                id="mobile"
                placeholder="Enter your mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="course">Course</label>
              <select id="course" value={course} onChange={(e) => setCourse(e.target.value)}>
                <option value="">Select Course</option>
                <option value="bachelors">Bachelor's</option>
                <option value="masters">Master's</option>
                <option value="doctorate">Doctorate</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="interestedCourse">Interested Course</label>
              <input
                type="text"
                id="interestedCourse"
                placeholder="Enter the course you're interested in"
                value={interestedCourse}
                onChange={(e) => setInterestedCourse(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>
                <input
                  type="checkbox"
                  checked={ieltsAvailable}
                  onChange={(e) => setIeltsAvailable(e.target.checked)}
                />
                IELTS Available
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="experience">Experience (in years)</label>
              <input
                type="number"
                id="experience"
                step="0.1"
                placeholder="Enter your experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>
            <button type="submit" className='button'>Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
