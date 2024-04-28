import React, { useState } from 'react';
import './Programs.css';
import bachlors from '../../assests/bachlors-1.jpg';
import masters from '../../assests/masters-1.jpg';
import phd from '../../assests/phd.avif';
import doctor from '../../assests/doc-1.jpg';
import { FaQuestionCircle } from 'react-icons/fa';
import { RxCross1 } from "react-icons/rx";
const Programs = ({ heading, subheading }) => {
    const ProgramsData = [
        {
            id: 1,
            imagesrc: bachlors,
            title: 'Graduate Degree',
            logosrc: '',
        },
        {
            id: 2,
            imagesrc: masters,
            title: 'Masters Degree',
            logosrc: '',
        },
        {
            id: 3,
            imagesrc: phd,
            title: 'Post Graduation',
            logosrc: '',
        },
        {
            id: 4,
            imagesrc: doctor,
            title: 'Doctorate Degree',
            logosrc: '',
        }
    ];
    const commonRequirements = [
        '10th Marksheet & Passing Certificate',
        '12th Marksheet & Passing Certificate',
        'Diploma Transcript',
        'Diploma Degree',
        'Bachelor Transcript',
        'Bachelor Provisional (ongoing course)',
        'Bachelor Degree',
        'Master Transcript',
        'Master Provisional (ongoing)',
        'Master Degree',
        'LOR (most recent organization)',
        'MOI / IELTS',
        'Entrance Test (TOLC)',
        'Offer Letter',
        'Experience Letter'
    ];
    const [selectedProgram, setSelectedProgram] = useState(null);
    const openDialog = (program) => {
        setSelectedProgram(program);
    };
    const closeDialog = () => {
        setSelectedProgram(null);
    };
    console.log(selectedProgram, 'selected program')
    return (
        <>
            <div className='heading'>
                <h2 className="programsHeading">{heading ? heading : ''}</h2>
                <p className="programsSubHeading">{subheading ? subheading : ''}</p>
            </div>
            <div className="programs">
                {ProgramsData.map(program => (
                    <div key={program.id} className="program">
                        <div className="programImage">
                            <img src={program.imagesrc} alt={program.title} />
                            <div className="overlay">
                                <span className="questionMarkIcon" onClick={() => openDialog(program)}><FaQuestionCircle />Requirements</span></div>
                            <h3 className="programTitle">{program.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
            {selectedProgram && (
                <div className="dialog">
                    <div className="dialogContent">
                        <br/>
                        <h3>{selectedProgram.title}</h3>
                        <ul>
                            {commonRequirements.map((requirement, index) => (
                                <li key={index}>{requirement}</li>
                            ))}
                        </ul>
                        <button onClick={closeDialog}>Close</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Programs;
