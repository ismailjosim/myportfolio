import React from 'react';
import ReactTyped from 'react-typed';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("cat-typing-laptop.jpg")` }}>
                <div className="hero-overlay bg-opacity-65"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h2 className="text-5xl font-bold">Hello! I'm</h2>
                        <h1 className='font-medium text-8xl my-2'>MD <span className='text-primary font-black'>JASIM</span></h1>
                        <ReactTyped
                            className='text-4xl font-medium'
                            strings={[
                                `I'm a Developer `,
                                `I'm a Content Creator `,
                                `I'm a Blogger `
                            ]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                        >
                        </ReactTyped>
                        <div className='mt-5 flex gap-5 justify-center'>
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

export default Home;
