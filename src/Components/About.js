import React from 'react';
import SectionHeader from './utilities/SectionHeader';
import ReactTyped from 'react-typed';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className="min-h-screen">
                <SectionHeader headTitle={'About US'} subTitle={'Know Me More'}></SectionHeader>
                <div className='grid grid-cols-2 justify-between items-center gap-10 mt-10'>
                    <div className="avatar">
                        <div className="rounded-lg shadow-lg w-11/12">
                            <img src='about.jpg' alt="person" />
                        </div>
                    </div>
                    <div>
                        <h2 className='text-3xl font-bold uppercase inline'>I'm Jasim | </h2>
                        <ReactTyped
                            className='text-3xl font-bold'
                            strings={[
                                `Frontend Developer `,
                                `Backend Developer `,
                                `MERN Stack Developer `,
                                `Blogger `
                            ]}
                            typeSpeed={60}
                            backSpeed={70}
                            loop
                        >
                        </ReactTyped>
                        <p>
                            Web developer, with extensive knowledge and more than 3 years of experience, working in web technologies and Ui / Ux design, delivering quality work.
                        </p>
                        <div className="stats mt-5">
                            <div className="stat place-items-center">
                                <div className=" stat-value">03+</div>
                                <div className="stat-title">Years
                                    experience</div>
                            </div>
                            <div className="stat place-items-center">
                                <div className=" stat-value">50+</div>
                                <div className="stat-title">Completed project</div>
                            </div>
                            <div className="stat place-items-center">
                                <div className=" stat-value">08+</div>
                                <div className="stat-title">Companies worked</div>
                            </div>
                        </div>
                        <div className='mt-10 flex gap-5'>
                            <Link to='/contact' className='btn btn-primary text-white'>Hire Now</Link>
                            <a
                                href='https://drive.google.com/file/d/1gGJOpYpagTsuX3ITCBZIgmQiSCag5yXL/view?usp=share_link'
                                target='_blank'
                                className='btn btn-warning text-white' rel="noreferrer"
                            >View Resume</a>
                        </div>
                    </div>


                </div>

            </div>
        </div>

    );
};

export default About;


