import './Sass-Styles/sass/styles.scss';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import SkillsSection from './Components/SkillsSection';
import MyWorkDivider from './Components/MyWorkDivider';
import AboutMeSection from './Components/AboutMeSection';

function App() {
  return (
    <div className="App">
      < NavBar />
      < Header />
      < SkillsSection />
      < MyWorkDivider />
      < AboutMeSection />
    </div>
  );
}

export default App;
