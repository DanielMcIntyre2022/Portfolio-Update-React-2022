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
            <h1>"</h1>
            <p>Daniel is a pleasure to work with! He's reliable, dependable and an asset for on any team! - Kevin Zhang, Front-End Web Developer</p>
                    <img src="" alt="" />
                </div>
                <div className="testimonals-two-container">
                    <h1>"</h1>
            <p>Daniel has been great working with so far. In the short time that we have worked in a professional setting, Daniel has been an active participant in the non-technical conversations and has taken charge of the technical aspects of our project. He is knowledgeable about his field and is able to effectively work in a team setting and complete deliverables on time. - Bryan Jok, Product Manager, Co.Lab </p>
                    <img src={headshot1} alt="" />
                </div>
            </Slider>
        </div>
   ) 

}

export default TestimonalsSection; 