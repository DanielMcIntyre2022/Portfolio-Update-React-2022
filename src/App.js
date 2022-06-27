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

function App() {
  return (
    <div className="App">
      < NavBar />
      < Header />
      < SkillsSection />
      < MyWorkDivider />
      < AboutMeSection />
      < TestimonalsSection />
      < RecentWork />
      < SocialsComponent />
      < ContactSection />

    </div>
  );
}

export default App;
