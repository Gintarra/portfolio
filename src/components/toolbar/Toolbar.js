import React, { useState } from 'react';
import './toolbar.css'
import { useContext } from 'react';
import { MyContext } from '../../context/MyContext';
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { TiThMenu } from 'react-icons/ti'

const Toolbar = () => {
  const { toEducation, toAbout, toContact, toProjects, toSkills } = useContext(MyContext)
  const [menuActive, setMenuActive] = useState(false)

  function scrollToEducation() {
    setMenuActive(false)
    toEducation.current.scrollIntoView({ behavior: "smooth" });
  }
  function scrollToSkills() {
    setMenuActive(false)
    toSkills.current.scrollIntoView({ behavior: "smooth" });
  }
  function scrollToAbout() {
    setMenuActive(false)
    toAbout.current.scrollIntoView({ behavior: "smooth" });
  }
  function scrollToContact() {
    setMenuActive(false)
    toContact.current.scrollIntoView({ behavior: "smooth" });
  }
  function scrollToProjects() {
    setMenuActive(false)
    toProjects.current.scrollIntoView({ behavior: "smooth" });
  }
  function handleMenu() {
    setMenuActive(!menuActive)
  }
  return (
    <div className='sm-toolbar align-center sm-d-flex '>
      <TiThMenu onClick={handleMenu} className='sm-d-flex d-none menu-icon' style={{ fontSize: "2rem" }} />
      <div className={menuActive ? 'sm-d-flex sm-column sm-toolbar-box' : 'toolbar d-flex sm-d-none space-ev align-center'}>
        <h3 className='h3toolbar' onClick={scrollToAbout}>ABOUT</h3>
        <h3 className='h3toolbar' onClick={scrollToEducation}>EDUCATION</h3>
        <h3 className='h3toolbar' onClick={scrollToSkills}>SKILLS</h3>
        <h3 className='h3toolbar' onClick={scrollToProjects}>MY PROJECTS</h3>
        <h3 className='h3toolbar' onClick={scrollToContact}>CONTACT</h3>
        <div>
          <a href={'https://www.linkedin.com/in/gintar%C4%97-raud%C5%BEi%C5%ABt%C4%97-6860801bb/'} className='h3toolbar sm-d-none mr-20' >
            <BsLinkedin style={{ fontSize: "2rem", color: "white" }} />
          </a>
          <a href={'https://github.com/Gintarra'} className='h3toolbar sm-d-none'>
            <BsGithub style={{ fontSize: "2rem", color: "white" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;