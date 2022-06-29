
function NavBar(props) {


  const handleSkills = () => {
    
    if (props.skillsRef) {
      props.skillsRef.current.scrollIntoView()
    }
  }

  const handleAbout = () => {

    if (props.aboutRef) {
      props.aboutRef.current.scrollIntoView()
    }
  }

  const handleWork = () => {

    if (props.workRef) {
      props.workRef.current.scrollIntoView()
    }
  }

   const handleContact = () => {

    if (props.contactRef) {
      props.contactRef.current.scrollIntoView()
    }
  }

    return (

 <div className="nav-container">
            <div className="name-logo">
                <span>DM</span>
            </div>
        <nav className="nav-bar">
          <ul>
            <li>
              <button onClick={handleSkills}>Skills</button>
            </li>
            <li>
              <button onClick={handleAbout}>About</button>
            </li>
            <li>
              <button onClick={handleWork}>Work</button>
            </li>
            <li>
              <button onClick={handleContact}>Contact</button></li>
          </ul>
         </nav>
        </div>
    )
}

export default NavBar;