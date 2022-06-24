import workpic from '../assets/gihpy-project-example.png';

function RecentWork() {

return (
    <section id="recent-work">
        <div className="recent-work-wrapper">
            <h2>Recent Work</h2>
            <div className="work-container">
                <div className="work-carousel">
                    <div className="work-image">
                        <img src={workpic} alt="" />
                    </div>
                </div>
            </div>
        </div>
        </section>
)
    
}

export default RecentWork;