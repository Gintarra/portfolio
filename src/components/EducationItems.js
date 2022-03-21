import React from 'react';

const EducationItems = ({ item }) => {
    return (
            <div className="timeline-item d-flex">
                <div className="timeline-item-content d-flex column">
                    <time>{item.year}</time>
                    <h3>{item.title}</h3>
                    <p>{item.school}</p>
                    <span className="circle" />
                </div>
            </div>
    );
};

export default EducationItems;