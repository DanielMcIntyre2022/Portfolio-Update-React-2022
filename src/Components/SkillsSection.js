import { ImHtmlFive} from 'react-icons/im';
import { SiCss3, SiJavascript, SiSass, SiReact, SiFirebase, SiExpress, SiHeroku, SiNetlify, SiMongodb, SiBootstrap, SiMinutemailer, SiRedux, SiMeteor, SiMaterialui, SiStripe, SiGraphql, SiTailwindcss, SiGooglecloud, SiExpo, SiAngular, SiIonic} from 'react-icons/si'
import { TbApi, TbBrandNextjs } from 'react-icons/tb';
import { FaGitSquare, FaNodeJs, FaVuejs } from 'react-icons/fa';
import { IoIosPhonePortrait } from 'react-icons/io';
import { useEffect, useRef } from 'react';

function SkillsSection(props) {

  const skillsRef = useRef(); 

  useEffect(() => {

    if (skillsRef) {
      props.refS(skillsRef)
    }
  });

  return (
    
      <div ref={skillsRef} className="skills-wrapper ">
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
                    <SiJavascript/><h4>Javascript / Typescript</h4>
                      <p>Experienced in utilizing JavaScript and Typescript in building interactive websites and applications.
              </p>
          </div>
          <div className="skills-title react">
                    <SiReact/><h4>React / React Native</h4>
                    <p>Builds innovative React web applications and large-scale full-stack mobile applications using React Native.
              </p>
            </div>
            <div className="skills-title vue">
                    <FaVuejs/><h4>Vue</h4>
                    <p>Builds innovative Vue web applications and large-scale full-stack mobile applications using React Native.
              </p>
            </div>
            <div className="skills-title angular">
                    <SiAngular/><h4>Angular</h4>
                    <p>Builds innovative React web applications and large-scale full-stack mobile applications using Angular.
              </p>
            </div>
            <div className="skills-title NextJS">
                    <TbBrandNextjs/><h4>Next JS</h4>
                    <p>Experienced in building innovative NextJS web applications.
              </p>
            </div>
            <div className="skills-title redux">
                    <SiMeteor/><h4>Meteor JS</h4>
                    <p>Experienced in building large-scale projects ulitizing the full-stack Meteor JS framework.
              </p>
          </div>
          <div className="skills-title ionic">
                    <SiIonic/><h4>Ionic</h4>
                    <p>Experienced in building large-scale mobile projects ulitizing Ionic.
              </p>
          </div>
               <div className="skills-title restapi">
                    <TbApi/><h4>Rest Apis</h4>
                    <p>Utilizes and implements REST APIs and data structures in applications.
              </p>
          </div>
           <div className="skills-title graphql">
            <SiGraphql/><h4>GraphQL</h4>
            <p>Experienced in utilizing GraphQL in large-scale projects with complex API client requests.</p>
          </div>   
            
          <div className="skills-title redux">
                    <SiRedux/><h4>Redux</h4>
                    <p>Utilizes Redux effectively with the React front-end framework. 
              </p>
          </div>
          
            <div className="skills-title firebase">
                    <SiFirebase/><h4>FireBase</h4>
                    <p>Develops and manages backend functionality by utilizing firebase database systems.
              </p>
          </div>
          <div className="skills-title nodejs">
            <FaNodeJs /><h4>Node JS</h4>
            <p>Develops server-side applications seemlessly sending data from the back-end to the front end and vice-versa.</p>
          </div>
          <div className="skills-title express">
            <SiExpress /><h4>Express</h4>
            <p>Utilizes the express backend framework with nodejs to build powerful large-scale full-stack applications.</p>
          </div>
          <div className="skills-title mongodb">
            <SiMongodb /><h4>MongoDB</h4>
            <p>Utilizes MongoDB and MongoDB Atltas to build MERN stack applications. </p>
          </div>
          <div className="skills-title sass">
                    <SiSass/><h4>Sass</h4>
                      <p>Effectively implements SASS scripting language in large scale CSS projects.
              </p>
            </div>
          <div className="skills-title bootstrap">
            <SiBootstrap /><h4>Bootstrap</h4>
            <p>Experience implmenting the CSS framework Bootstrap in web and mobile-first applications.</p>
          </div>
          <div className="skills-title bootstrap">
            <SiTailwindcss/><h4>Tailwind CSS</h4>
            <p>Experience implmenting the CSS framework Tailwind in web and mobile-first applications.</p>
          </div>
          <div className="skills-title bootstrap">
            <SiMaterialui /><h4>Material UI</h4>
            <p>Experience implmenting the CSS library Material UI in web and mobile-first applications.</p>
          </div>
          <div className="skills-title sendgrid">
            <SiMinutemailer /><h4>SendGrid</h4>
            <p>Experienced in utilizes SendGrid's API system along with server-side capabilities to send user/client emails.</p>
          </div>
          <div className="skills-title sendgrid">
            <SiStripe /><h4>Stripe</h4>
            <p>Experienced in utilizes Stripe's API system along with server-side capabilities to authorize user/client payments.</p>
          </div>
          <div className="skills-title netlify">
            <SiNetlify /><h4>Netlify</h4>
            <p>Effectively utilizes Netlify's cloud-based platform to deploy production ready front-end applications.</p>
          </div>
          <div className="skills-title heroku">
            <SiHeroku /><h4>Heroku</h4>
            <p>Effectively utilizes Heroku's cloud-based platform to deploy production ready server-side applcations.</p>
          </div>
          <div className="skills-title react">
                    <SiExpo/><h4>Expo</h4>
                    <p> Utilizes the Expo toolset to create, test and deploy mobile applications.
              </p>
            </div>
           <div className="skills-title netlify">
            <SiGooglecloud /><h4>Google Cloud</h4>
            <p>Experienced in ultizing Google's cloud platform to in order to utilize thier APIs and enabling Google OAuth functions with applications.</p>
          </div>
          
            <div className="skills-title git">
                    <FaGitSquare/><h4>Git / Github</h4>
                      <p>Knowledge of Git workflow and file structures within applications and experience working with GitHub in collaboration with team members on large scale projects.
              </p>
            </div>
            <div className="skills-title responsive">
                    <IoIosPhonePortrait/><h4>Responsive</h4>
              <p>Builds fully responsive websites for desktop, tablet and mobile devices.</p>
          </div>
              </div>
        </div>
      </div>
     
)}

export default SkillsSection;