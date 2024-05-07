import React from 'react';
import './Campus.css';
import milan from '../../assests/milan.jpg';
import marche from '../../assests/marche.jpg';
import cassino from '../../assests/cassino.jpg';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const universities = [
  {
    id: 1,
    name: 'University of Milan',
    image: milan,
    ranking: 'Top 100 in the world',
    setup: 'Founded in 1924',
    faculties: ['Engineering', 'Medicine', 'Arts', 'Business'],
    placement: 'High placement rate'
  },
  {
    id: 2,
    name: 'University of Marche',
    image: marche,
    ranking: 'Top 200 in the world',
    setup: 'Founded in 1959',
    faculties: ['Science', 'Law', 'Education', 'Economics'],
    placement: 'Excellent job opportunities'
  },
  {
    id: 3,
    name: 'University of Cassino',
    image: cassino,
    ranking: 'Top 300 in the world',
    setup: 'Founded in 1979',
    faculties: ['Computer Science', 'Engineering', 'bussiness'],
    placement: 'Internationally recognized graduates'
  }
];

const Campus = ({ heading, subheading }) => {
  return (
    <div className='campus-section'>
      <div className='heading'>
        <h2 className="campusHeading">{heading ? heading : ''}</h2>
        <p className="campusSubHeading">{subheading ? subheading : ''}</p>
      </div>
      <div className="campus">
        {universities.map(university => (
          <div key={university.id} className="campusCard">
            <img src={university.image} alt={university.name} />
            <div className="overlay"></div>
            <div className="campusDetails">
              <h3 className="campusTitle">{university.name}</h3>
              <p>Ranking: {university.ranking}</p>
              <p>Setup: {university.setup}</p>
              <p>Faculties: {university.faculties.join(', ')}</p>
              <p>Placement: {university.placement}</p>
            </div>
          </div>
        ))}
      </div>
      <Link to='/allprograms'>
      <button className="button">See more.. <FaArrowRightLong/></button>
      </Link>
    </div>
  );
}

export default Campus;
