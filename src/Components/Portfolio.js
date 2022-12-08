import React from 'react';

const Portfolio = () => {
    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section_title">Portfolio</h2>
            <span className="section_subtitle">Most Recent Work</span>
            <div className="portfolio_container container swiper-container">
                <div className="swiper-wrapper">
                    <div className="portfolio_content grid swiper-slide">
                        <img src="assets/img/portfolio1.jpg" alt="portfolio" className="portfolio_img" />


                        <div className="portfolio_data">
                            <h3 className="portfolio_title">Modern Website</h3>
                            <p className="portfolio_description">Website adaptable to all devices, with ui components and
                                animated interactions.</p>
                            <a href="/" className="button button-flex button-small portfolio_button">
                                Demo
                                <i className="uil uil-arrow-right button_icon"></i>
                            </a>
                        </div>
                    </div>

                    <div className="portfolio_content grid swiper-slide">
                        <img src="assets/img/portfolio2.jpg" alt="portfolio" className="portfolio_img" />

                        <div className="portfolio_data">
                            <h3 className="portfolio_title">Brand Design</h3>
                            <p className="portfolio_description">Website adaptable to all devices, with ui components and
                                animated interactions.</p>
                            <a href="/" className="button button-flex button-small portfolio_button">
                                Demo
                                <i className="uil uil-arrow-right button_icon"></i>
                            </a>
                        </div>
                    </div>

                    <div className="portfolio_content grid swiper-slide">
                        <img src="assets/img/portfolio3.jpg" alt="portfolio" className="portfolio_img" />


                        <div className="portfolio_data">
                            <h3 className="portfolio_title">Online Store</h3>
                            <p className="portfolio_description">Website adaptable to all devices, with ui components and
                                animated interactions.</p>
                            <a href="/" className="button button-flex button-small portfolio_button">
                                Demo
                                <i className="uil uil-arrow-right button_icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="swiper-button-next">
                    <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
                </div>
                <div className="swiper-button-prev">
                    <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>

                </div>

                <div className="swiper-pagination">

                </div>
            </div>
        </section>
    );
};

export default Portfolio;
