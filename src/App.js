import './Sass-Styles/sass/styles.scss';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import SkillsSection from './Components/SkillsSection';
import MyWorkDivider from './Components/MyWorkDivider';
import AboutMeSection from './Components/AboutMeSection';
import SocialsComponent from './Components/SocialsComponent';
import RecentWork from './Components/RecentWork';
import TestimonalsSection from './Components/TestimonalsSection';
import ContactSection from './Components/ContactSection';
import { useState } from 'react';

function App() {

  const [skillsRef, setSkillsRef] = useState('');

  const [aboutRef, setAboutRef] = useState('');

  const [workRef, setWorkRef] = useState('');

  const [contactRef, setContactRef] = useState('')


  const handleSkillRef = (e) => {
    setSkillsRef(e)
  }

  const handleAboutRef = (e) => {
    setAboutRef(e)
  }

  const handleWorkRef = (e) => {
    setWorkRef(e)
  }

  const handlecontactRef = (e) => {
    setContactRef(e)
  }

  return (
    <div className="App">
      < NavBar skillsRef={skillsRef} aboutRef={aboutRef} workRef={workRef} contactRef={contactRef} />
      < Header />
      < SkillsSection refS={handleSkillRef}/>
      < MyWorkDivider />
      < AboutMeSection refA={handleAboutRef}/>
      < TestimonalsSection />
      < RecentWork refW={handleWorkRef}/>
      < SocialsComponent />
      < ContactSection refC={handlecontactRef}/>
    </div>
  );
}

export default App;
