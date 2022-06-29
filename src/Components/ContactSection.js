import { ImLocation } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { useEffect, useRef } from 'react';

function ContactSection(props) {

const contactRef = useRef();

  useEffect(() => {

    if (contactRef) {
      props.refC(contactRef)
    }
  });

    return (
        <section ref={contactRef} id="contact-me-section">
            <div className="contact-wrapper">
                <div className="contact-title">
                    <h2>Contact</h2>
                    <h4>Reach out to me</h4>
                </div>
             <div className="contact-container">
                <div className="contact-left-side">
                        <div className="contact-text">
                        <p>Thank you for taking the time to view my portfolio! If you have any questions about me or
                                my projects, please do not hesitate to reach out to me. You can either use the following
                                form or reach out via my social links above. I will get back to you as soon
                                as I can. I look forward to hearing from you!</p>
                        <div className="contact-logos">
                            <div className="location-logo-container">
                                <div className="location-logo"><ImLocation/></div><p>Toronto,ON</p>
                            </div>
                            <div className="email-logo-container">
                                <div className="email-logo"><MdEmail/></div><p>daniel-mcintyre@hotmail.com</p>
                            </div>
                            <div className="phone-logo-container">
                                <div className="phone-logo"><BsTelephoneFill /></div><p>905-965-1234</p>
                        </div>
                    </div>
                 </div>
        </div> 
                <div className="contact-right-side">
                    <form id="form" action="https://formspree.io/f/mzbogkdp" method="POST">
                        <input type="text" placeholder='Name...' />
                        <input type="email" placeholder='Email...' />
                        <input type="text" placeholder='Phone...' />
                        <textarea name="message" id="" cols="30" rows="10" placeholder='Message'>
                            </textarea>
                            <button type="submit">Send Message</button>
                    </form>
                </div>
                </div>
            </div>
            <iframe title="torontoMAp" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d184552.57289812327!2d-79.51814197994685!3d43.71815566190443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb90d7c63ba5%3A0x323555502ab4c477!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1656093403284!5m2!1sen!2sca" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <footer>
                Copyright Daniel McIntyre
            </footer>
        </section>
)}

export default ContactSection;