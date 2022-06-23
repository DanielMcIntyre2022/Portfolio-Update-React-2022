import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from 'react-icons/fa';

function SocialsComponent() {

    return (
        <section id="socials">
            <div className="socials-container">
                <div className="socials-list">
            <a href="https://github.com/DanielMcIntyre2022"><FaGithub/></a>
            <a href="https://www.linkedin.com/in/daniel-mcintyre-2404a827/"><FaLinkedin/></a>
            <a href="https://twitter.com/DanielMcIntyree"><FaTwitter/></a>
            <a href="https://medium.com/@daniel-mcintyre"><FaMedium/></a>
                </div>
            </div>
        </section>
)

}

export default SocialsComponent;