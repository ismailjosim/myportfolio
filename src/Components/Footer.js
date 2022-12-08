import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer_bg">
                <div className="footer_container container grid">
                    <div>
                        <h1 className="footer_title">ISMAIL</h1>
                        <span className="footer_subtitle">Frontend Developer & WordPress Designer</span>
                    </div>
                    <ul className="footer_links">
                        <li><a href="#services" className="footer_link">Services</a></li>
                        <li><a href="#portfolio" className="footer_link">Portfolio</a></li>
                        <li><a href="#contact" className="footer_link">Contact</a></li>
                    </ul>


                    <div className="footer_socials">
                        <a href="" target="_blank" className="footer_social">
                            <l className="uil uil-facebook-f"></l>
                        </a>
                        <a href="" target="_blank" className="footer_social">
                            <l className="uil uil-instagram"></l>
                        </a>
                        <a href="" target="_blank" className="footer_social">
                            <l className="uil uil-twitter-alt"></l>
                        </a>
                    </div>
                </div>
                <p className="footer_copy">&copy; 2019 - 2021 | Ismail Josim | All right reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
