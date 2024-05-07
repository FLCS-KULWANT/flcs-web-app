import React, { useState } from 'react';
import './Vlogs.css';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';

const Vlogs = ({ heading, subheading }) => {
    const YtVideoId = [
        "wnF9ompKP6o",
        "Sc5mNTD49mk",
        "IyKeiD9tFAI",
        "pCznOb12nGM",
        "VMi_8J9LvGo"
    ];

    const [showAllVideos, setShowAllVideos] = useState(false);

    const initialVideos = YtVideoId.slice(0, 3);
    const videosToShow = showAllVideos ? YtVideoId : initialVideos;

    const handleSeeMore = () => {
        setShowAllVideos(true);
    };

    return (
        <div className='vlogs-section'>
            <div className='heading'>
                <h2 className="vlogsHeading">{heading ? heading : ''}</h2>
                <p className="vlogsSubHeading">{subheading ? subheading : ''}</p>
            </div>
            <div className='videos'>
                {videosToShow.map(videoId => (
                    <div className='videosCard' key={videoId}>
                        <iframe
                            className='iframe'
                            width="360"
                            height="315"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                ))}
            </div>
            {!showAllVideos && (
                <Link className="button" to="https://www.youtube.com/@livinginitalykulwant" target='blank'>See more.. <FaArrowRightLong/></Link>
            )}
        </div>
    )
}

export default Vlogs;
