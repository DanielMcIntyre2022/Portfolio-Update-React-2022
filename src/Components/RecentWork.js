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
      autoplaySpeed: 3000,
      cssEase: "linear"
    };

return (
    <section id="recent-work">
        <div className="recent-work-wrapper">
            <h2>Recent Work</h2>
                <div className="work-carousel">
                <Slider {...settings}>
                <div className='work-example-one-container'>
                    <div className="work-example-pic">
                        <a href="https://video-diary.netlify.app/"><img src={workpic1} alt="example one"/></a>
                        </div>
                    </div>
                        <div className="work-example-two-container">
                            <div className="work-example-pic">
                            <a href="https://giphy-sentiment-39.netlify.app/"><img src={workpic2} alt="" /></a>
                            </div>
                    </div>
                    <div className="work-example-three-container">
                        <div className="work-example-pic">
                            <a href="https://eager-curran-c5f5e6.netlify.app/"><img src={workpic3} alt="" /></a>
                            </div>
                    </div>                
                    </Slider>
                </div>
                
        </div>
        </section>
)
    
}

export default RecentWork;