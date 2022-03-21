import React from 'react';
import { GiSkills } from 'react-icons/gi'
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';

const Skills = () => {
    const { toSkills } = useContext(MyContext)
    return (
        <div ref={toSkills}>
            <div className='d-flex justify-center align-center'>  <GiSkills style={{ fontSize: "3rem" }} /> <h2>Skills</h2></div>
            <div className='d-flex'>
                <div className='card grow1'>
                    <div className="d-flex space-btw" style={{ width: "85%" }}>
                        <span>HTML</span>
                        <span>85%</span>
                    </div>
                    <div className="bar-grey">
                        <div className="bar-container text-center" style={{ width: "85%" }}></div>
                    </div>
                    <div className="d-flex space-btw" style={{ width: "85%" }}>
                        <span>CSS</span>
                        <span>85%</span>
                    </div>
                    <div className="bar-grey">
                        <div className="bar-container text-center" style={{ width: "85%" }}></div>
                    </div>
                    <div className="d-flex space-btw" style={{ width: "85%" }}>
                        <span>Javascript</span>
                        <span>85%</span>
                    </div>
                    <div className="bar-grey">
                        <div className="bar-container text-center" style={{ width: "85%" }}></div>
                    </div>
                    <div className="d-flex space-btw" style={{ width: "85%" }}>
                        <span>ReactJS</span>
                        <span>85%</span>
                    </div>
                    <div className="bar-grey">
                        <div className="bar-container text-center" style={{ width: "85%" }}></div>
                    </div>
                </div>
                <div className='card grow1'>
                    <div className="d-flex space-btw" style={{ width: "85%" }}>
                        <span>NodeJS</span>
                        <span>85%</span>
                    </div>
                    <div className="bar-grey">
                        <div className="bar-container text-center" style={{ width: "85%" }}></div>
                    </div>
                    <div className="d-flex space-btw" style={{ width: "85%" }}>
                        <span>GitHub</span>
                        <span>85%</span>
                    </div>
                    <div className="bar-grey">
                        <div className="bar-container text-center" style={{ width: "85%" }}></div>
                    </div>
                    <div className="d-flex space-btw" style={{ width: "85%" }}>
                        <span>MongoDB</span>
                        <span>85%</span>
                    </div>
                    <div className="bar-grey">
                        <div className="bar-container text-center" style={{ width: "85%" }}></div>
                    </div>
                    <div className="d-flex space-btw" style={{ width: "85%" }}>
                        <span>TypeScript</span>
                        <span>85%</span>
                    </div>
                    <div className="bar-grey">
                        <div className="bar-container text-center" style={{ width: "85%" }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;