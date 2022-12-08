import React from 'react';

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section_title">About Me</h2>
            <span className="section_subtitle">My Introduction</span>

            <div className="about_container container grid">
                <img src="assets/img/about.jpg" alt="about_image" className="about_img" />

                <div className="about_data">
                    <p className="about_description">Web developer, with extensive knowledge and more than 3 years of
                        experience, working in
                        web technologies and Ui / Ux design,
                        delivering quality work.</p>
                    <div className="about_info">
                        <div>
                            <span className="about_info-title">03+</span>
                            <span className="about_info-name">Years <br />experience</span>
                        </div>
                        <div>
                            <span className="about_info-title">50+</span>
                            <span className="about_info-name">Completed <br /> project</span>
                        </div>
                        <div>
                            <span className="about_info-title">08+</span>
                            <span className="about_info-name">Companies <br /> worked</span>
                        </div>
                    </div>

                    <div className="about_buttons">
                        <a download="" href="assets/pdf/Alexa-Cv.pdf" className="button button-flex">
                            Download CV <i className="uil uil-download-alt button_icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
