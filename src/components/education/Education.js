import React from 'react';
import './education.css'
import { useContext } from 'react';
import { MyContext } from '../../context/MyContext';
import { GiDiploma } from 'react-icons/gi'
import EducationItems from './EducationItems';

const Education = () => {
    const { toEducation } = useContext(MyContext)
    const data = [{
        title: "Bachelor Of Applied Mathematics And Finance",
        year: "2013-2017",
        school: "Kaunas University Of Technology"
    },
    {
        title: "Programming | Front-end Course",
        year: "2021-2022",
        school: "CodeAcademy"
    }
    ]

    return (
        <div ref={toEducation}>
            <div className='d-flex justify-center align-center'>
                <GiDiploma style={{ fontSize: "3rem" }} />
                <h2>Education </h2>
            </div>
            {data.length > 0 &&
                <div className="timeline-container d-flex column">
                    {data.map((item, i) => (
                        <EducationItems item={item} key={i} />
                    ))}
                </div>}
        </div>
    );
};

export default Education;
