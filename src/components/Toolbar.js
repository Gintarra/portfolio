import React from 'react';
import { useContext } from 'react';
import { MyContext } from '../context/MyContext';
import { BsLinkedin } from 'react-icons/bs'

const Toolbar = () => {
  const { toEducation, toAbout, toContact, toProjects, toSkills } = useContext(MyContext)

  function scrollToEducation() {
    toEducation.current.scrollIntoView({ behavior: "smooth" });
  }
  function scrollToSkills() {
    toSkills.current.scrollIntoView({ behavior: "smooth" });
  }
  function scrollToAbout() {
    toAbout.current.scrollIntoView({ behavior: "smooth" });
  }
  function scrollToContact() {
    toContact.current.scrollIntoView({ behavior: "smooth" });
  }
  function scrollToProjects() {
    toProjects.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className='toolbar d-flex space-ev align-center'>
      <h3 className='h3toolbar' onClick={scrollToAbout}>ABOUT</h3>
      <h3 className='h3toolbar' onClick={scrollToEducation}>EDUCATION</h3>
      <h3 className='h3toolbar' onClick={scrollToSkills}>SKILLS</h3>
      <h3 className='h3toolbar' onClick={scrollToProjects}>MY PROJECTS</h3>
      <h3 className='h3toolbar' onClick={scrollToContact}>CONTACT</h3>
      <a href={'https://www.linkedin.com/in/gintar%C4%97-raud%C5%BEi%C5%ABt%C4%97-6860801bb/'} className='h3toolbar' >
        <BsLinkedin style={{ fontSize: "2rem", color: "white" }} />
      </a>
    </div>
  );
};

export default Toolbar;