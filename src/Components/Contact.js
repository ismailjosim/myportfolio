import React from 'react';

const Contact = () => {
    return (
        <section className="contact container contact" id="contact">
            <h2 className="section_title">Contact Me</h2>
            <span className="section_subtitle">Get in touch</span>

            <div className="contact_container container grid">
                <div>
                    <div className="contact_information">
                        <i className="uil uil-phone contact_icon"></i>
                        <div>
                            <h3 className="contact_title">Call Me</h3>
                            <span className="contact_subtitle">+088 0171 505 2808</span>
                        </div>
                    </div>

                    <div className="contact_information">
                        <i className="uil uil-envelope contact_icon"></i>
                        <div>
                            <h3 className="contact_title">Email</h3>
                            <span className="contact_subtitle">ismailjosim@yahoo.com</span>
                        </div>
                    </div>

                    <div className="contact_information">
                        <i className="uil uil-map-marker contact_icon"></i>
                        <div>
                            <h3 className="contact_title">Location</h3>
                            <span className="contact_subtitle">Charfassion, Bhola, Bangladesh</span>
                        </div>
                    </div>
                </div>
                <form action="mailto:ismailjosim99@gmail.com" className="contact_form grid">
                    <div className="contact_inputs grid">
                        <div className="contact_content">
                            <label htmlFor="name" className="contact_label">Name</label>
                            <input type="text" className="contact_input" />
                        </div>
                        <div className="contact_content">
                            <label htmlFor="email" className="contact_label">Email</label>
                            <input type="email" className="contact_input" />
                        </div>
                    </div>
                    <div className="contact_content">
                        <label htmlFor="project" className="contact_label">Project</label>
                        <input type="text" className="contact_input" />
                    </div>
                    <div className="contact_content">
                        <label htmlFor="" className="contact_label">Message</label>
                        <textarea name="message" id="" cols="0" rows="7" className="contact_input"></textarea>
                    </div>
                    <div>
                        <a href="mailto:ismailjosim99@gmail.com" className="button button-flex">
                            Send Message
                            <i className="uil uil-message button_icon"></i>
                        </a>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
