import React from 'react';

const Testimonials = () => {
    return (
        <section className="testimonial section">
            <h2 className="section_title">Testimonial</h2>
            <span className="section_subtitle">What my clients say</span>

            <div className="testimonial_container container swiper-container">
                <div className="swiper-wrapper">
                    <div className="testimonial_content swiper-slide">
                        <div className="testimonial_data">
                            <div className="testimonial_header">
                                <img src="assets/img/testimonial1.jpg" alt="Testimonial_image" className="testimonial_img" />

                                <div>
                                    <h3 className="testimonial_name">Sara Smith</h3>
                                    <span className="testimonial_client">Client</span>
                                </div>
                            </div>
                            <div>
                                <i className="uil uil-star testimonial_icon-star"></i>
                                <i className="uil uil-star testimonial_icon-star"></i>
                                <i className="uil uil-star testimonial_icon-star"></i>
                                <i className="uil uil-star testimonial_icon-star"></i>
                                <i className="uil uil-star testimonial_icon-star"></i>
                            </div>

                        </div>
                        <p className="testimonial_description">I get a good impression, I carry out my project with all the
                            possible quality and attention and support 24 hours a day.</p>
                    </div>
                    <div className="testimonial_content swiper-slide">
                        <div className="testimonial_data">
                            <div className="testimonial_header">
                                <img src="assets/img/testimonial2.jpg" alt="Testimonial_image" className="testimonial_img" />

                                <div>
                                    <h3 className="testimonial_name">Matt Robinson</h3>
                                    <span className="testimonial_client">Client</span>
                                </div>
                            </div>
                            <div>
                                <i className="uil uil-star testimonial_icon-star"></i>
                                <i className="uil uil-star testimonial_icon-star"></i>
                                <i className="uil uil-star testimonial_icon-star"></i>
                                <i className="uil uil-star testimonial_icon-star"></i>
                                <i className="uil uil-star testimonial_icon-star"></i>
                            </div>

                        </div>
                        <p className="testimonial_description">I get a good impression, I carry out my project with all the
                            possible quality and attention and support 24 hours a day.</p>
                    </div>
                    <div className="testimonial_content swiper-slide">
                        <div className="testimonial_data">
                            <div className="testimonial_header">
                                <img src="assets/img/testimonial3.jpg" alt="Testimonial_image" className="testimonial_img" />

                                <div>
                                    <h3 className="testimonial_name">John Steve</h3>
                                    <span className="testimonial_client">Client</span>
                                </div>
                            </div>
                            <div>
                                <i className="uil uil-star testimonial_icon-star"></i>
                                <i className="uil uil-star testimonial_icon-star"></i>
                                <i className="uil uil-star testimonial_icon-star"></i>
                                <i className="uil uil-star testimonial_icon-star"></i>
                                <i className="uil uil-star testimonial_icon-star"></i>
                            </div>

                        </div>
                        <p className="testimonial_description">I get a good impression, I carry out my project with all the
                            possible quality and attention and support 24 hours a day.</p>
                    </div>
                </div>
                <div className="swiper-pagination swiper-pagination-testimonial"></div>
            </div>
        </section>
    );
};

export default Testimonials;
