import Slider from 'react-slick';
import headshot1 from '../assets/bryan-pic.jpg';

function TestimonalsSection() {

      const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
      autoplaySpeed: 9000,

    };

    return (
       
        <div className="testimonals-container">
            <Slider {...settings}>
                <div className="testimonals-one-container">
            <p>"Daniel has been great to work with. He is an active participant in non-technical conversations and has taken charge of the technical projects. He is knowledgeable about his field and is able to effectively work in a team" - Bryan Jok, Product Manager, Co.Lab </p>
                    <img src={headshot1} alt="" />
                </div>
                <div className="testimonals-two-container">
            <p>"Daniel is a pleasure to work with! He's reliable, dependable and an asset for on any team!" - Kevin Zhang, Front-End Web Developer</p>
                    <img src={headshot1} alt="" />
                </div>
            </Slider>
        </div>
   ) 

}

export default TestimonalsSection; 