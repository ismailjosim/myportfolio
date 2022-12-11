import React from 'react';
import SectionHeader from './utilities/SectionHeader';

const Services = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className="min-h-screen">
                <SectionHeader headTitle={'SERVICES'} subTitle={'What I Do?'}></SectionHeader>

                <div className='grid grid-cols-2 gap-5 w-10/12 mx-auto mt-16'>
                    <div className='flex items-center gap-5'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-16 text-primary">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                            </svg>
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold text-primary'>Frontend Developer</h3>
                            <p className='w-3/4 text-justify'>
                                I have experience in HTML, CSS, Bootstrap 5, Tailwind CSS, React JS. I am also familiar with Redux & Next JS.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-16 text-primary">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold text-primary'>Backend Developer</h3>
                            <p className='w-3/4'>
                                I have experience in Node JS, Express JS, MongoDB Database. knowledge in Vercel, firebase authentication, JWT Authorization.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-16 text-primary">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                            </svg>
                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold text-primary'>MERN Stack Developer</h3>
                            <p className='w-3/4 text-justify'>
                                Mainly I build website using The main Technologies in MERN Stack where i use MongoDB for Database. Node and Express Js for backend and React JS for Frontend.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
