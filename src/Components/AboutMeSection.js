import headshot from '../assets/daniel-mcintyre-headshot.jpg';
import resume from '../assets/Daniel_McIntyre_Resume_2022.pdf';
import { useEffect, useRef } from 'react';

function AboutMeSection(props) {

const aboutRef = useRef();

  useEffect(() => {

    if (aboutRef) {
      props.refA(aboutRef)
    }
  });


    return (
        <section ref={aboutRef} id="about-me">
         <h2>About Me</h2>
        <div className="about-me-container">
            <div className="about-pic">
                <img src={headshot} alt=""/>
            </div>
            <div className="about-wrapper">
                <div class="about-text">
                        <p><span id="capitlized">M</span>y name is Daniel McIntyre and I am a Web Developer!</p>
                        <p>My tech-stack includes HTML5,
                            CSS/SCSS, JavaScript (ES6)
                            and React as well as experience implementing REST APIs and Firebase databases in
                            applications. I also have
                            proficiency and experience in git
                            collaboration with team members.
                        </p>
                        <p>In addition to my technical background, I have over a decade of experience in the media and
                            communications industry
                            where I excelled in leading internal and external teams in completing communication and
                            media-based projects. This
                            experience has provided transferable leadership and team-work skills, in addition to the
                            attention to detail required in
                            a web-developer role.</p>
                        <p>I thrive in challenging environments, and I am extremely passionate about furthering my
                            skills in web development. This
                            includes building innovative and exciting solutions in a collaborative team environment.</p>
                        <div className="about-me-button">
                        <button>
                            <a href={resume} target="_blank" rel="noreferrer">
                                View Resume</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default AboutMeSection;