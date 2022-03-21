import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs'
import TagCloud from 'react-tag-cloud';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';

const About = () => {
    const { toAbout } = useContext(MyContext)

    return (
        <div className='pad-20 about-container' ref={toAbout}>
            <div className='d-flex justify-center align-center'>
                <BsFillPersonFill style={{ fontSize: "3rem" }} />
                <h2 className='title'>About me</h2>
            </div>
            <div className='d-flex card'>
                <div className='grow1 d-flex justify-center column align-center'>
                    <img className='img-me' src={'images/me2.jpg'} alt="" />
                    <a href={'docs/test.pdf'} download ><button>DOWNLOAD CV</button></a>
                </div>
                <div className='grow2 about-text d-flex column align-center'>
                    <ul>
                        <li>I am Front-end Developer.</li>
                        <li>I had studied Applied Maths and Finance at Kaunas University of Technology and Programming at CodeAcademy.</li>
                        <li>I am ambitious, fast-learning, inspired by programming and life.</li>
                        <li>I decided to change my career path because I want more challenges. I hope to get new experience and use all my knowledge from studies.</li>
                    </ul>
                 <h3>Hobbies</h3>
                        <TagCloud style={{
                             fontFamily: 'Lato',
                              fontSize: 30,
                              fontWeight: 'bold',
                              fontStyle: 'italic',
                              color: 'black',
                              padding: 3, 
                              width: '70%',
                              height: '200px'
                        }}>
                            <div style={{ fontSize: 30 }} >Running</div>
                            <div style={{fontStyle: 'normal', fontSize: 24}}>Walking</div>
                            <div rotate={90}>Cats</div>
                            <div >Reading</div>
                            <div>Cooking</div>
                            <div style={{ fontSize: 26 }}>Do it yourself</div>
                            <div>Board games</div>
                            <div  style={{ fontSize: 18 }}>Meditation</div>
                            <div>Watching movies</div>
                            <div  style={{fontStyle: 'normal'}}>Cycling</div>
                             <div style={{ fontSize: 18 }}>Ice skating</div>
                        </TagCloud>
                </div>
            </div>
        </div>
    );
};

export default About;