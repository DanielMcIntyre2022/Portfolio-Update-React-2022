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
            <p>"Daniel has been great to work with. He is an active participant in non-technical conversations and has taken charge of the technical projects. He is knowledgeable about his field and is able to effectively work in a team" - <a href="https://www.linkedin.com/in/bryan-jok-ab87a497/">Bryan Jok, Product Manager, Co.Lab</a> </p>
                    <img src={headshot1} alt="" />
                </div>
                <div className="testimonals-two-container">
            <p>"Daniel is a pleasure to work with! He's reliable, dependable and an asset for on any team!" - <a href="https://www.linkedin.com/in/kevzhang-dev/">Kevin Zhang, Application Developer</a></p>
                    <img src={headshot1} alt="" />
                </div>
            </Slider>
        </div>
   ) 

}

export default TestimonalsSection; 