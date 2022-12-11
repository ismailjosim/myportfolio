import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from './utilities/SectionHeader';

const Blog = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className="min-h-screen">
                <SectionHeader headTitle={'blog'} subTitle={'Lasted blogs'}></SectionHeader>
                <div>
                    <section className="flex items-center h-full p-16">
                        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                            <div className="text-center">
                                <p className="text-2xl font-semibold md:text-3xl">Latest Blog will Coming Soon!</p>
                                <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
                                <Link to="/" className="px-8 py-3 font-semibold rounded btn-primary text-white">Back to homepage</Link>
                            </div>
                        </div>
                    </section>

                </div>

            </div>
        </div>
    );
};

export default Blog;
