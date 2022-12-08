import React from 'react';

const Qualification = () => {
    return (
        <section className="qualification section">
            <h2 className="section_title">Qualification</h2>
            <span className="section_subtitle">My Personal Journey</span>
            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div className="qualification_button button_flex qualification_active" data-target="#education">
                        <i className="uil uil-graduation-cap qualification_icon"></i>
                        Education
                    </div>
                    <div className="qualification_button button_flex" data-target="#work">
                        <i className="uil uil-briefcase-alt qualification_icon"></i>
                        Work
                    </div>
                </div>
                <div className="qualification_sections">
                    <div className="qualification_content qualification_active" data-content id="education">

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">BBA IN ACCOUNTING</h3>
                                <span className="qualification_subtitle">NU - Bangladesh</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2016 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>
                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">Web Design</h3>
                                <span className="qualification_subtitle">Udemy Online</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2018 - 2019
                                </div>
                            </div>
                        </div>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Web development</h3>
                                <span className="qualification_subtitle">Udemy Online</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2019 - 2020
                                </div>
                            </div>


                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>
                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">UI/UX Design</h3>
                                <span className="qualification_subtitle">JC Design Institute</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2020 - Present
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="qualification_content" data-content id="work">

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Full Time Freelancer</h3>
                                <span className="qualification_subtitle">Online/Offline Service</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2019 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>
                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">Database Management</h3>
                                <span className="qualification_subtitle">frimware Xpart Inc.</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2020 - Present
                                </div>
                            </div>
                        </div>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Founder & Developer</h3>
                                <span className="qualification_subtitle">JC Design inc.</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2019 - 2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>
                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                            <div>
                                <h3 className="qualification_title">Content CREATOR</h3>
                                <span className="qualification_subtitle">Youtube</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2020 - Present
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Qualification;
