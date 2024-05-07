import React, { useState } from 'react';
import './Banner.css';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import bannervideo from '../../assests/bannervideo.mp4';
import { useSelector, useDispatch } from 'react-redux';
import Universities from './CourseDetail.json';
import { setSearchQuery, setSearchOption } from '../../Redux/Actions/actions'; // Import action creators

const Banner = () => {
  const [searchQuery, setSearchQueryLocal] = useState('');
  const [searchOption, setSearchOptionLocal] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setSearchQueryLocal(e.target.value);
    dispatch(setSearchQuery(e.target.value)); 
  };

  const handleSearchOptionChange = (e) => {
    setSearchOptionLocal(e.target.value);
    setSearchQueryLocal('');
    dispatch(setSearchOption(e.target.value));
  };

  const reduxSearchQuery = useSelector(state => state.searchQuery); 
  const reduxSearchOption = useSelector(state => state.searchOption); 

//   const filteredUniversities = Universities.universities.filter((university) => {
//     const name = university.name.toLowerCase();
//     const courses = university.bachelors.concat(university.masters).concat(university.phd).concat(university.medical).map(course => course.course.toLowerCase());
//     const degrees = ['Bachelor', 'Master', 'PhD', 'Medical'];
    
//     if (reduxSearchOption === 'University') {
//       return name.includes(reduxSearchQuery.toLowerCase());
//     } else if (reduxSearchOption === 'Course') {
//       return courses.includes(reduxSearchQuery.toLowerCase());
//     } else if (reduxSearchOption === 'Degree') {
//       return degrees.includes(reduxSearchQuery);
//     }
//     return true;
//   });

  return (
    <div className='banner'>
      <video className='video' src={bannervideo} muted autoPlay loop type='video/mp4'></video>
      <div className='overlayDiv'></div>

      <div className='homeContent container'>
        <div className='textDiv'>
          <span className='smallText'>Study in Italy</span>
          <div className='homeTitle'>Better Opportunity for better World</div>
          <p className='homeDescription'>Unlock the door to your future by studying in Italy with our consultancy. We provide comprehensive assistance to students, guiding them through the entire process from application to enrollment. Explore our packages today and start planning your journey towards a bright academic future in Italy.</p>
        </div>
        <br />
        <div className='filter-banner'>
          <select value={reduxSearchOption} onChange={handleSearchOptionChange} className='filter-dropdown' placeholder='Search By'>
            <option value=''>Search By</option>
            <option value='University'>University</option>
            <option value='Course'>Course</option>
            <option value='Degree'>Degree</option>
          </select>
          <input type='text' placeholder='Search...' value={reduxSearchQuery} onChange={handleSearch} className='filter-text-input'/>
          <Link to={`/allprograms`} >
            <button className="button" >Search</button>
          </Link>
        </div>
        <ScrollLink to="contact" smooth={true} duration={500} offset={-250}>
          <button className="button">Explore More</button>
        </ScrollLink>
        <div className="university-list">
          {/* <ul>
              {filteredUniversities.map((university, index) => (
                  <li key={index}>{university.name}</li>
              ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Banner;
