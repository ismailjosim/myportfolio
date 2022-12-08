import React from 'react';

const Projects = () => {
    return (
        <section className="project section">
            <div className="project_bg">
                <div className="project_container container grid">
                    <div className="project_data">
                        <h2 className="project_title">You have a new project</h2>
                        <p className="project_description">Contact me now and get a 30% discount on your new project.</p>
                        <a href="#contact" className="button button-flex button-white">
                            Contact Me
                            <l className="uil uil-message project_icon button_icon"></l>
                        </a>
                    </div>

                    <img src="assets/img/project.png" alt="Project_image" className="project_img" />

                </div>
            </div>
        </section>
    );
};

export default Projects;
