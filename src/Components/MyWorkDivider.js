
function MyWorkDivider(props) {

  const handleWork = () => {

    if (props.workRef) {
      props.workRef.current.scrollIntoView()
    }
  }

    return (
    
      <div className="my-work-divider-container">
            <h2>My Work</h2>
              <div className="my-work-button-container">
          <button onClick={handleWork}className="my-work-button">My Work</button>
                </div>
        </div>
)

}

export default MyWorkDivider; 