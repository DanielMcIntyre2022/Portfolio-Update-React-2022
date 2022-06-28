import { Link } from 'react-router-dom';

function NavBar() {

    return (
        <div className="nav-container">
            <div className="name-logo">
                <span>DM</span>
            </div>
            <nav className="nav-bar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/mywork">Work</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
)
}

export default NavBar;