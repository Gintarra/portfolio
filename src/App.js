import './App.css';
import Toolbar from './components/toolbar/Toolbar';
import Introduction from './components/introduction/Introduction';
import About from './components/about/About';
import Education from './components/education/Education';
import Skills from './components/skills/Skills';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
import Projects from './components/projects/Projects';
import { useRef } from 'react';
import { MyContext } from './context/MyContext'


function App() {
  const toEducation = useRef()
  const toAbout = useRef()
  const toContact = useRef()
  const toProjects = useRef()
  const toSkills = useRef()

  return (
    <div>
      <MyContext.Provider value={{ toEducation, toAbout, toContact, toProjects, toSkills }}>

        <Toolbar />
        <Introduction />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Contacts />
        <Footer />

      </MyContext.Provider>
    </div>
  );
}

export default App;




