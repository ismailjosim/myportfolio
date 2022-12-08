import React from 'react';

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className="section_title">Skills</h2>
            <span className="section_subtitle">My Technical level</span>
            <div className="skills_container container grid">
                <div>
                    <div className="skills_content skills_open">
                        <div className="skills_header">
                            <i className="uil uil-brackets-curly skills_icon"></i>

                            <div>
                                <h1 className="skills_title">Frontend Developer</h1>
                                <span className="skills_subtitle">More than 3 years</span>
                            </div>

                            <i className="uil uil-angle-down skills_arrow"></i>
                        </div>

                        <div className="skills_list grid">

                            <div className="skills_data">
                                <div className="skills_titles">
                                    <h3 className="skills_name">HTML</h3>
                                    <span className="skills_number">90%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_html"></span>
                                </div>
                            </div>

                            <div className="skills_data">
                                <div className="skills_titles">
                                    <h3 className="skills_name">CSS</h3>
                                    <span className="skills_number">85%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_css"></span>
                                </div>
                            </div>

                            <div className="skills_data">
                                <div className="skills_titles">
                                    <h3 className="skills_name">JavaScript</h3>
                                    <span className="skills_number">60%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_js"></span>
                                </div>
                            </div>

                            <div className="skills_data">
                                <div className="skills_titles">
                                    <h3 className="skills_name">jQUERY</h3>
                                    <span className="skills_number">85%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_jquery"></span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="skills_content skills_close">
                        <div className="skills_header">
                            <i className="uil uil-servers skills_icon"></i>

                            <div>
                                <h1 className="skills_title">Backend Developer</h1>
                                <span className="skills_subtitle">More than 2 years</span>
                            </div>
                            <i className="uil uil-angle-down skills_arrow"></i>

                        </div>
                        <div className="skills_list grid">

                            <div className="skills_data">
                                <div className="skills_titles">
                                    <h3 className="skills_name">PHP</h3>
                                    <span className="skills_number">80%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_php"></span>
                                </div>
                            </div>

                            <div className="skills_data">
                                <div className="skills_titles">
                                    <h3 className="skills_name">Node Js</h3>
                                    <span className="skills_number">70%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_node"></span>
                                </div>
                            </div>

                            <div className="skills_data">
                                <div className="skills_titles">
                                    <h3 className="skills_name">Firebase</h3>
                                    <span className="skills_number">90%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_firebase"></span>
                                </div>
                            </div>

                            <div className="skills_data">
                                <div className="skills_titles">
                                    <h3 className="skills_name">Python</h3>
                                    <span className="skills_number">55%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_python"></span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div>

                    <div className="skills_content skills_close">
                        <div className="skills_header">
                            <i className="uil uil-swatchbook skills_icon"></i>

                            <div>
                                <h1 className="skills_title">Designer</h1>
                                <span className="skills_subtitle">More than 2.5 years</span>
                            </div>
                            <i className="uil uil-angle-down skills_arrow"></i>
                        </div>

                        <div className="skills_list grid">

                            <div className="skills_data">
                                <div className="skills_titles">
                                    <h3 className="skills_name">Figma</h3>
                                    <span className="skills_number">90%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_figma"></span>
                                </div>
                            </div>

                            <div className="skills_data">
                                <div className="skills_titles">
                                    <h3 className="skills_name">Sketch</h3>
                                    <span className="skills_number">85%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_sketch"></span>
                                </div>
                            </div>

                            <div className="skills_data">
                                <div className="skills_titles">
                                    <h3 className="skills_name">Photoshop</h3>
                                    <span className="skills_number">80%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_photoshop"></span>
                                </div>
                            </div>

                            <div className="skills_data">
                                <div className="skills_titles">
                                    <h3 className="skills_name">Adobe XD</h3>
                                    <span className="skills_number">90%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage skills_xd"></span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
