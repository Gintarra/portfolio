import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import {MdArrowDropDownCircle} from 'react-icons/md'

const Introduction = () => {
    const { toAbout } = useContext(MyContext)
    function scrollToAbout() {
        toAbout.current.scrollIntoView({ behavior: "smooth" });
      }
    return (
        <div className='intro align-center d-flex justify-center column'>
            <div className="intro-box d-flex column align-center justify-center">
                <div className='name-container'>
                    <h2>
                        <Typewriter
                            words={['Hello', 'I am Gintarė Raudžiūtė']}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </h2>
                </div>
                <h2 className='text-center name-container'> Front-end Developer </h2>
            </div>
            <div className='align-end mb-40 cursor sm-d-none' onClick={scrollToAbout}><MdArrowDropDownCircle style={{color: "black", fontSize: "3em"}}/></div>
        </div>
    );
};

export default Introduction;


