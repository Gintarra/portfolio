import React, { useRef } from 'react';
import { GiSkills } from 'react-icons/gi'
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';

const Skills = () => {
    const { toSkills } = useContext(MyContext)

    function handleScroll() {

        const scrollTop = toSkills.current
        console.log(` myRef.scrollTop: ${scrollTop}`)
    }
    // function componentDidMount() {
    //     window.addEventListener('scroll', handleScroll);
    // }
    return (
        <div ref={toSkills}>
            <div onScroll={() => handleScroll} style={{height: '100px', overflow: "auto"}} className='d-flex justify-center align-center'>  <GiSkills style={{ fontSize: "3rem" }} /> <h2>Skills</h2></div>
            <div className='d-flex'>
                <div className='card grow1'>
                    <div className="d-flex space-btw" style={{ width: "90%" }}>
                        <span>HTML</span>
                        <span>90%</span>
                    </div>
                    <div className="bar-grey">
                        <div className="bar-container text-center" style={{ width: "90%" }}></div>
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
                    <div className="d-flex space-btw" style={{ width: "80%" }}>
                        <span>ReactJS</span>
                        <span>80%</span>
                    </div>
                    <div className="bar-grey">
                        <div className="bar-container text-center" style={{ width: "80%" }}></div>
                    </div>
                </div>
                <div className='card grow1'>
                    <div className="d-flex space-btw" style={{ width: "70%" }}>
                        <span>NodeJS</span>
                        <span>70%</span>
                    </div>
                    <div className="bar-grey">
                        <div className="bar-container text-center" style={{ width: "70%" }}></div>
                    </div>
                    <div className="d-flex space-btw" style={{ width: "75%" }}>
                        <span>GitHub</span>
                        <span>75%</span>
                    </div>
                    <div className="bar-grey">
                        <div className="bar-container text-center" style={{ width: "75%" }}></div>
                    </div>
                    <div className="d-flex space-btw" style={{ width: "70%" }}>
                        <span>MongoDB</span>
                        <span>70%</span>
                    </div>
                    <div className="bar-grey">
                        <div className="bar-container text-center" style={{ width: "70%" }}></div>
                    </div>
                    <div className="d-flex space-btw" style={{ width: "70%" }}>
                        <span>TypeScript</span>
                        <span>70%</span>
                    </div>
                    <div className="bar-grey">
                        <div className="bar-container text-center" style={{ width: "70%" }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;