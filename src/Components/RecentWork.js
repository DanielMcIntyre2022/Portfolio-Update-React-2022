import Slider from 'react-slick';
import workpic1 from '../assets/Video Diary App Example.png';
import workpic2 from '../assets/gihpy-project-example.png';
import workpic3 from '../assets/movie-mood-example.png';

function RecentWork() {

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
      autoplaySpeed: 7000,
      cssEase: "linear"
    };

return (
    <section id="my-work">
        <div className="recent-work-wrapper">
            <h2>Recent Work</h2>
                <div className="work-carousel">
                <Slider {...settings}>
                 <div className="work-example-one-container">
                        <div className="work-example-pic">
                            <a href="https://eager-curran-c5f5e6.netlify.app/"><img src={workpic1} alt="" /></a>
                             <div className="work-example">
                            <h3>Video Diary</h3>
                            <p>An application built in React, Video Diary uses Google's YouTube API and firebase. Fetches and displays the current trending videos on YouTube. Users can also search for thier desired video and also save them to view later or delete from the page. </p>
                        </div>
                            </div>
                    </div> 
                        <div className="work-example-one-container">
                        <div className="work-example-pic">
                            <a href="https://eager-curran-c5f5e6.netlify.app/"><img src={workpic2} alt="" /></a>
                             <div className="work-example">
                            <h3>Giphy Sentiment</h3>
                            <p>An application built using HTML, CSS, SASS, JavaScript and the MovieDB REST API, MovieMood fetches movies the user can watch based on thier input of genre and time period for the last 100 years. Made in collaboration with friend Kimberly Schubert.</p>
                        </div>
                            </div>
                    </div> 
                    <div className="work-example-three-container">
                        <div className="work-example-pic">
                            <a href="https://eager-curran-c5f5e6.netlify.app/"><img src={workpic3} alt="" /></a>
                             <div className="work-example">
                            <h3>Movie Mood</h3>
                            <p>An application built using HTML, CSS, SASS, JavaScript and the MovieDB REST API, MovieMood fetches movies the user can watch based on thier input of genre and time period for the last 100 years. Made in collaboration with friend Kimberly Schubert.</p>
                        </div>
                            </div>
                    </div>                
                    </Slider>
                </div>
                
        </div>
        </section>
)
    
}

export default RecentWork;