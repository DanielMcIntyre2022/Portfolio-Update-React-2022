import { ImLocation } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';

function ContactSection() {

    return (
        <section id="contact-me-section">
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
                                <div className="location logo"><ImLocation/></div><p>Toronto,ON</p>
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
                    </form>
                </div>
                </div>
            </div>
        </section>
)}

export default ContactSection;