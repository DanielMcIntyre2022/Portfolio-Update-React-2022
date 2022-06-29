import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from 'react-icons/fa';

function SocialsComponent() {

    return (
        <section id="socials">
            <div className="socials-container">
                <div className="socials-list">
            <a href="https://github.com/DanielMcIntyre2022" target="_blank" rel="noreferrer"><FaGithub/></a>
            <a href="https://www.linkedin.com/in/daniel-mcintyre-2404a827/" target="_blank" rel="noreferrer"><FaLinkedin/></a>
            <a href="https://twitter.com/DanielMcIntyree" target="_blank" rel="noreferrer"><FaTwitter/></a>
            <a href="https://medium.com/@daniel-mcintyre" target="_blank" rel="noreferrer"><FaMedium/></a>
                </div>
            </div>
        </section>
)

}

export default SocialsComponent;