import { ImHtmlFive, ImAccessibility } from 'react-icons/im';
import { SiCss3, SiJavascript, SiSass, SiReact, SiFirebase } from 'react-icons/si'
import { TbApi, TbCommand } from 'react-icons/tb';
import { FaGitSquare, FaGithub } from 'react-icons/fa';
import { IoIosPhonePortrait } from 'react-icons/io';

function SkillsSection() {

    return (
    
        <div className="skills-wrapper">
            <div className="skills-container">
                <h2>Skills</h2>
          <div className="skills-list">
            <div className="skills-title html">
                    <ImHtmlFive/><h4>HTML</h4>
              <p>Utilizes the latest HTML technology to create responsive multi-page websites.</p>
            </div>
            <div className="skills-title css">
                    <SiCss3/><h4>CSS</h4>
              <p>Well versed in the latest version of CSS version 3 technology and design frameworks.</p>
            </div>
            <div className="skills-title javascript">
                    <SiJavascript/><h4>Javascript</h4>
                      <p>Experienced in utilizing JavaScript in building interactive websites and applications.
              </p>
            </div>
            <div className="skills-title sass">
                    <SiSass/><h4>Sass</h4>
                      <p>Effectively implements SASS scripting language in large scale CSS projects.
              </p>
            </div>
               <div className="skills-title restapi">
                    <TbApi/><h4>Rest Apis</h4>
                    <p>Utilizes and implements REST APIs and data structures in applications.
              </p>
            </div>
            <div className="skills-title react">
                    <SiReact/><h4>React</h4>
                    <p>Builds innovative React applications. Utilizing framework packaging tools.
              </p>
            </div>
            <div className="skills-title firebase">
                    <SiFirebase/><h4>FireBase</h4>
                    <p>Develops and manages backend functionality by utilizing firebase database systems.
              </p>
            </div>
            <div className="skills-title git">
                    <FaGitSquare/><h4>Git</h4>
                      <p>Knowledge of Git workflow and file structures within applications.
              </p>
            </div>
            <div className="skills-title github">
                    <FaGithub/><h4>Github</h4>
              <p>Experience working with GitHub in collaboration with team members on large scale projects.</p>
            </div>
            <div className="skills-title cmdline">
                    <TbCommand/><h4>CMD line</h4>
              <p>Utilizes command line interface to perform to navigate effectively and efficiently through files. </p>
            </div>
            <div className="skills-title responsive">
                    <IoIosPhonePortrait/><h4>Responsive</h4>
              <p>Builds fully responsive websites for desktop, tablet and mobile devices.</p>
            </div>
            <div className="skills-title accessiblity">
                    <ImAccessibility/><h4>Accessibility</h4>
              <p>Experienced in developing user accessible website and applications.</p>
               </div>
              </div>
            </div>
        </div>
)}

export default SkillsSection;