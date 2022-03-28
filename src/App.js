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

//prie about me mygtukas Download cv
//padaryt animacija, kad po raide graziai rasytu, o ne per puse ir pan

//About me - sumazint nuotrauka - tekstas be tasku, plain, 
//normaliai isdestytas. Hobiai pavaizduoti kaip nors piesinukais ar 
//zodziai skirtingo dydzio


//skills - animated, percentages, black - gali but be uzsikrovimo


//contact 
//per didelis tarpas po pavadinimo
//pilnavidures ikonas idet

//toolbar - scroll paziuret, kazkas ne taip, ne visa graziai atskrolina

//cv pasirasyti anglsika + lietuviska


