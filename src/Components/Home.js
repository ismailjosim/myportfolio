import React from 'react';
import ReactTyped from 'react-typed';


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
                                `I'm a Developer`,
                                `I'm a Content Creator`,
                                `I'm a Blogger`
                            ]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                        >
                        </ReactTyped>
                        <p className=' mt-5 text-xl'>Live In Barisal, Bangladesh</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
