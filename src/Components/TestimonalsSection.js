import Slider from 'react-slick';
import headshot1 from '../assets/bryan-pic.jpg';
import headshot2 from '../assets/koki-headshot.png';
import headshot3 from '../assets/alvin-headshot.jpg';
import unknownheadshot from '../assets/unknown-person.jpg';

function TestimonalsSection() {

      const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
      autoplaySpeed: 6000,

    };

    return (
       
        <div className="testimonals-container">
            <Slider {...settings}>
                <div className="testimonals-one-container">
            <p>"Daniel is great to work with. He is an active participant in non-technical conversations and has taken charge of technical projects. He is knowledgeable about his field and is able to effectively work in a team" - <a href="https://www.linkedin.com/in/bryan-jok-ab87a497/" target="_blank" rel="noreferrer">Bryan Jok, Product Manager, Co.Lab</a> </p>
                    <img src={headshot1} alt="" />
                </div>
                 <div className="testimonals-three-container">
            <p>"Daniel's eagerness to learn and his commitment to writing better, more efficient code, paired with his welcoming and positive attitude, make him a very valuable asset." - <a href="https://www.linkedin.com/in/koki-vasileski/" target="_blank" rel="noreferrer">Koki Vasileski, Front-End Developer</a></p>
                    <img src={headshot2} alt="" />
                </div>
                 <div className="testimonals-three-container">
            <p>"Daniel is a forward thinking, intelligent, and a motivated web developer who excels in understanding new concepts. He is not afraid to ask for help when he needs it nor does he refuse to help when you ask." - <a href="https://www.linkedin.com/in/alvinwchou/" target="_blank" rel="noreferrer">Alvin Chou, Front-End Developer</a></p>
                    <img src={headshot3} alt="" />
                </div>
                <div className="testimonals-four-container">
            <p>"Daniel is a pleasure to work with! He's reliable, dependable and an asset for on any team!" - <a href="https://www.linkedin.com/in/kevzhang-dev/" target="_blank" rel="noreferrer">Kevin Zhang, Application Developer</a></p>
                    <img src={unknownheadshot} alt="" />
                </div>
            </Slider>
        </div>
   ) 

}

export default TestimonalsSection; 