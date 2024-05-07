import React, { useEffect, useRef, useState } from 'react';
import './AllPrograms.css';
import { useSelector } from 'react-redux';
import data from '../Banner/CourseDetail.json';
import Navbar from '../Navbar/Navbar';

const AllPrograms = () => {
  const courseSectionRef = useRef(null); 
  const reduxSearchQuery = useSelector(state => state.searchQuery);
  const reduxSearchOption = useSelector(state => state.searchOption); 
  useEffect(() => {
    // Fetch data based on reduxSearchQuery and reduxSearchOption
    // Example:
    // fetchData(reduxSearchQuery, reduxSearchOption);
  }, [reduxSearchQuery, reduxSearchOption]);
 return (
    <div className="all-programs-container">
      <Navbar/>
      <h1>All Programs</h1>
      <h4>{reduxSearchOption + reduxSearchQuery}</h4>
      {data.universities.map((university, index) => (
        <div key={index} className="university-card">
          <h2>{university.name} <p className='university-location'>Location: {university.location}</p></h2>

          <div className='degree-section'>
            <h3>Bachelor's Courses</h3>
          </div>
          <div className="course-section" ref={courseSectionRef}>
            {university.bachelors.map((course, index) => (
              <div key={index} className="course-card">
                <h4>{course.course}</h4>
                <p>Deadline: {course.deadline}</p>
                <a href={course.link} target="_blank" rel="noopener noreferrer">More Info</a>
              </div>
            ))}
          </div>

          <div className='degree-section'>
            <h3>Master's Courses</h3>
          </div>
          <div className="course-section">
            {university.masters.map((course, index) => (
              <div key={index} className="course-card">
                <h4>{course.course}</h4>
                <p>Deadline: {course.deadline}</p>
                <a href={course.link} target="_blank" rel="noopener noreferrer">More Info</a>
              </div>
            ))}
          </div>

          <div className='degree-section'>
          <h3>PhD Courses</h3>
          </div>
          <div className="course-section">
            {university.phd.map((course, index) => (
              <div key={index} className="course-card">
                <h4>{course.course}</h4>
                <p>Deadline: {course.deadline}</p>
                <a href={course.link} target="_blank" rel="noopener noreferrer">More Info</a>
              </div>
            ))}
          </div>

          <div className='degree-section'>
            <h3>Medical Courses</h3>
          </div>
          <div className="course-section">
            {university.medical.map((course, index) => (
              <div key={index} className="course-card">
                <h4>{course.course}</h4>
                <p>Deadline: {course.deadline}</p>
                <a href={course.link} target="_blank" rel="noopener noreferrer">More Info</a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllPrograms;
