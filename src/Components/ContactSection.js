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
                        </div> 
                        <div className="contact-logos">
                            <span><ImLocation /><p>Toronto,ON</p></span>
                            
                            <span><MdEmail /><p>daniel-mcintyre@hotmail.com</p></span>
                            
                            <span><BsTelephoneFill/><p>905-965-1234</p></span>
                        </div>
                 </div>
                </div>
                <div className="contact-ride-side">
                     <form id="form" action="https://formspree.io/f/mzbogkdp" method="POST"></form>
                </div>
            </div>
        </section>
)}

export default ContactSection;