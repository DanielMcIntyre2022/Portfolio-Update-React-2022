import Slider from 'react-slick';
import giphy1 from '../assets/video-diary-gif.gif';
import giphy2 from '../assets/giphy-final-example.gif';
import giphy3 from '../assets/movie-mood-gif.gif';
import { SiCss3, SiJavascript, SiSass, SiFirebase, SiReact } from 'react-icons/si'
import { ImHtmlFive} from 'react-icons/im';

function RecentWork() {

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
      autoplaySpeed: 8000,
      cssEase: "linear"
    };

return (
    <section id="my-work">
        <div className="recent-work-wrapper">
            <h2>Recent Work</h2>
                <div className="work-carousel">
                <Slider {...settings}>
                   
                 <div className="work-example-container">
                        <div className="work-example-pic">
                            <a href="https://eager-curran-c5f5e6.netlify.app/"><img src={giphy1} alt="" /></a>
                             <div className="work-example">
                            <h1>Video Diary</h1>
                            <p>An application built in React, Video Diary uses Google's YouTube API and firebase. Fetches and displays the current global trending videos on YouTube. Users can also search for thier desired video and also save them to view later or delete from the page. </p>
                              <div className="made-with">
                                    <h3>Made With</h3>
                                    <div className="made-with-icons">
                                    <ul>
                                        <li><ImHtmlFive /></li>
                                        <li><SiCss3 /></li>
                                        <li><SiSass /></li>
                                            <li><SiJavascript /></li>
                                             <li><SiReact /></li>
                                        <li><SiFirebase /></li>
                                        </ul>
                                        </div>
                                <div className="project-links">
                                    <ul>
                                        <li><h3><a href="https://github.com/DanielMcIntyre2022/MovieMood">Github Repository</a></h3></li>
                                    </ul>
                                </div>
                             </div>
                        </div>
                        </div>
                    </div> 
                        <div className="work-example-container">
                        <div className="work-example-pic">
                            <a href="https://eager-curran-c5f5e6.netlify.app/"><img src={giphy2} alt="" /></a>
                             <div className="work-example">
                            <h1>Giphy Sentiment</h1>
                            <p>An application built in React, Giphy Sentiment utlizes the Giphy API and Firebase. Users can search for Giphys that matches thier mood and save thier desried gifs to view at a later time. Built with friends Kevin Zhang and David Benitez.</p>
                            <div className="made-with">
                                    <h3>Made With</h3>
                                    <div className="made-with-icons">
                                    <ul>
                                        <li><ImHtmlFive /></li>
                                        <li><SiCss3 /></li>
                                        <li><SiSass /></li>
                                            <li><SiJavascript /></li>
                                            <li><SiReact /></li>
                                            <li><SiFirebase /></li>
                                        </ul>
                                        </div>
                                </div>
                                <div className="project-links">
                                    <ul>
                                        <li><h3><a href="https://github.com/kwzhang62/project-4-giphy-sentiment">Github Repository</a></h3></li>
                                    </ul>
                                </div>
                                
                            </div>
                             </div>
                    </div> 
                    <div className="work-example-container">
                        <div className="work-example-pic">
                            <a href="https://eager-curran-c5f5e6.netlify.app/"><img src={giphy3} alt="" /></a>
                             <div className="work-example">
                            <h1>Movie Mood</h1>
                                <p>An application built using HTML, CSS, SASS, JavaScript and the MovieDB REST API, MovieMood fetches movies the user can watch based on thier input of genre and time period for the last 100 years. Made in collaboration with friend Kimberly Schubert.</p>
                                <div className="made-with">
                                    <h3>Made With</h3>
                                    <div className="made-with-icons">
                                        <ul>
                                        <li><ImHtmlFive /></li>
                                        <li><SiCss3 /></li>
                                        <li><SiSass /></li>
                                        <li><SiJavascript /></li>
                                        <li><SiFirebase /></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="project-links">
                                    <ul>
                                        <li><h3><a href="https://github.com/DanielMcIntyre2022/MovieMood">Github Repository</a></h3></li>
                                    </ul>
                                </div>
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