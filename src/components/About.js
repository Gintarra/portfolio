import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs'
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';

const About = () => {
    const { toAbout } = useContext(MyContext)

    return (
        <div className='pad-20' ref={toAbout}>
            <div className='d-flex justify-center align-center'>
                <BsFillPersonFill style={{ fontSize: "3rem" }} />
                <h2 className='title'>About me</h2>
            </div>
            <div className='d-flex card'>
                <div className='grow1 d-flex justify-center'>
                    <img className='img-me' src={'images/me2.jpg'} alt="" />
                </div>
                <div className='grow2 about-text'>
                    <ul>
                        <li>I am Front-end Developer.</li>
                        <li>I had studied Applied Maths and Finance at Kaunas University of Technology and Programming at CodeAcademy.</li>
                        <li>I am ambitious, fast-learning, inspired by programming and life.</li>
                        <li>I decided to change my career path because I want more challenges. I hope to get new experience and use all my knowledge from studies.</li>
                    </ul>
                    <p>Age: 28</p>
                    <p>Hobbies: running, walking, cats, reading, cooking</p>
                    <a href={'docs/test.pdf'} download >DOWNLOAD CV</a>
                </div>
            </div>

        </div>
    );
};

export default About;