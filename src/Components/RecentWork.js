import Slider from 'react-slick';
import giphy1 from '../assets/video-diary-gif.gif';
import giphy2 from '../assets/giphy-final-example.gif';
import giphy3 from '../assets/movie-mood-gif.gif';
import { SiCss3, SiJavascript, SiSass, SiFirebase, SiReact } from 'react-icons/si'
import { ImHtmlFive } from 'react-icons/im';
import { useEffect, useRef } from 'react';

function RecentWork(props) {

    const workRef = useRef();

    useEffect(() => {

        if (workRef) {
            props.refW(workRef)
        }
    });

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
        <section ref={workRef} id="my-work">
            <div className="recent-work-wrapper">
                <h2>Recent Work</h2>
                <div className="work-carousel">
                    <Slider {...settings}>

                        <div className="work-example-container">
                            <div className="work-example-pic">
                                <a href="https://video-diary.netlify.app/" target="_blank" rel="noreferrer"><img src={giphy1} alt="" /></a>
                                <div className="work-example">
                                    <h1><a href="https://video-diary.netlify.app/" target="_blank" rel="noreferrer">Video Diary</a></h1>
                                    <p>An application built in React, Video Diary uses Google's YouTube API and firebase. Fetches and displays the current global trending videos on YouTube. Users can also search for their desired video and also save them to view later or delete from the page. </p>
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
                                                <li><h3><a href="https://github.com/DanielMcIntyre2022/Daniel-McIntyre-Project-Three" target="_blank" rel="noreferrer">Github Repository</a></h3></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="work-example-container">
                            <div className="work-example-pic">
                                <a href="https://giphy-sentiment-39.netlify.app/" target="_blank" rel="noreferrer"><img src={giphy2} alt="" /></a>
                                <div className="work-example">
                                    <h1><a href="https://giphy-sentiment-39.netlify.app/" target="_blank" rel="noreferrer">Giphy Sentiment</a></h1>
                                    <p>An application built in React, Giphy Sentiment utlizes the Giphy API and Firebase. Users can search for Giphys that matches their mood and save their desried gifs to view at a later time. Built with <a href="https://www.linkedin.com/in/kevzhang-dev/" target="_blank" rel="noreferrer">Kevin Zhang</a> and <a href="https://www.linkedin.com/in/david-benitez-878974236/" target="_blank" rel="noreferrer">David Benitez.</a></p>
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
                                            <li><h3><a href="https://github.com/DanielMcIntyre2022/project-4-giphy-sentiment" target="_blank" rel="noreferrer">Github Repository</a></h3></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="work-example-container">
                            <div className="work-example-pic">
                                <a href="https://eager-curran-c5f5e6.netlify.app/" target="_blank" rel="noreferrer"><img src={giphy3} alt="" /></a>
                                <div className="work-example">
                                    <h1><a href="https://eager-curran-c5f5e6.netlify.app/" target="_blank" rel="noreferrer">Movie Mood</a></h1>
                                    <p>An application built using HTML, CSS, SASS, JavaScript and the MovieDB REST API, MovieMood fetches movies the user can watch based on their input of genre and time period for the last 100 years. Made in collaboration with <a href="https://www.kimberleycodes.com/" target="_blank" rel="noreferrer">Kimberly Schubert.</a></p>
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
                                            <li><h3><a href="https://github.com/DanielMcIntyre2022/MovieMood" target="_blank" rel="noreferrer">Github Repository</a></h3></li>
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