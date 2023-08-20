
function Header(props) {

    const handleSkills = () => {
    
    if (props.skillsRef) {
      props.skillsRef.current.scrollIntoView()
    }
  }

    return (

        <div className="header-container">
            <h1>Daniel McIntyre</h1>
            <h2>Software Developer</h2>
            <div className="button-container">
                <button onClick={handleSkills}className="header-button">Learn More</button>
                </div>
        </div>
    )

}

export default Header;