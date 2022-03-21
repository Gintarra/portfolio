import React from 'react';
import { GiLaptop } from 'react-icons/gi'
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import OneProject from './OneProject';
import data from '../assets/data.json'

const Projects = () => {
    const { toProjects } = useContext(MyContext)
    return (
        <div className=' pad-20' ref={toProjects}>
            <div className='d-flex justify-center align-center'>
                <GiLaptop style={{ fontSize: "3rem" }} />
                <h2 className='title'>My Projects</h2>
            </div>
            <div className='d-flex wrap justify-center '>
                {data.map((x, i)=> 
                    <OneProject key={i} index={i} />
                )}           
            </div>
        </div>
    );
};

export default Projects;