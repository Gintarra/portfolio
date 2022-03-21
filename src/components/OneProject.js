import React, { useState } from 'react';
import data from '../assets/data.json'

const OneProject = ({ index }) => {
    const [activeImage, setActiveImage] = useState(0)
    function goToProject(){
        window.location.href=data[index].url
    }
    return (
        <div className='project-container d-flex column align-center'>
            {data.length > 0 && (
                <>
                    <h3>{data[index].title}</h3>
                    <div className="project-card">
                        <div className="d-flex align-center">
                            {data[index].img && data[index].img.length > 0 &&
                                data[index].img.map((image, i) => (
                                    <div
                                        className="project-card-image-nav d-flex column-reverse"
                                        key={i}
                                        onMouseEnter={() => setActiveImage(i)}
                                        onMouseLeave={() => setActiveImage(0)}
                                        onClick={goToProject}
                                    >
                                        {data[index].img.length > 1 && (
                                            <div
                                                className={`${i === activeImage
                                                    ? "project-card-image-slider-active"
                                                    : "project-card-image-slider"
                                                    }`}
                                            />
                                        )}
                                    </div>
                                ))}
                            <div
                                className="project-card-image"
                                style={{
                                    backgroundImage: `url(${data[index].img[activeImage]})`,
                                }}
                            />
                        </div>
                        <p>{data[index].text}</p>

                    </div>
                </>
            )}
        </div>
    );
};

export default OneProject;