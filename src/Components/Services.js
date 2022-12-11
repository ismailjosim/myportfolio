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
                            <p className='w-3/4 text-justify'>
                                I have experience in HTML, CSS, Bootstrap 5, Tailwind CSS, React JS. I am also familiar with Redux & Next JS.
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
                                I have experience in HTML, CSS, Bootstrap 5, Tailwind CSS, React JS. I am also familiar with Redux & Next JS.
                            </p>
                        </div>
                    </div>
                    <div className='flex items-center gap-5'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-16 text-primary">
                                <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                            </svg>

                        </div>
                        <div>
                            <h3 className='text-2xl font-semibold text-primary'>Video Editing</h3>
                            <p className='w-3/4 text-justify'>
                                I have experience in HTML, CSS, Bootstrap 5, Tailwind CSS, React JS. I am also familiar with Redux & Next JS.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;

// <section className="services section">
//     <h2 className="section_title">Services</h2>
//     <span className="section_subtitle">What I Offer</span>
//     <div className="services_container container grid">

//         <div className="services_content">
//             <div>
//                 <i className="uil uil-web-grid services_icon"></i>
//                 <h3 className="services_title">UI/UX <br /> Designer</h3>
//             </div>

//             <span className="button button-flex button-small button-link services_button">
//                 View More <i className="uil uil-arrow-right button_icon"></i>
//             </span>


//             <div className="services_modal">
//                 <div className="services_modal-content">
//                     <h4 className="services_modal-title">UI/UX <br /> Desinger</h4>
//                     <i className="uil uil-times services_modal-close"></i>
//                     <ul className="services_modal-services grid">
//                         <li className="services_modal-service">
//                             <i className="uil uil-check-circle servies_modal-icon"></i>
//                             <p>I develop the user interface.</p>
//                         </li>
//                         <li className="services_modal-service">
//                             <i className="uil uil-check-circle servies_modal-icon"></i>
//                             <p>Web page development.</p>
//                         </li>
//                         <li className="services_modal-service">
//                             <i className="uil uil-check-circle servies_modal-icon"></i>
//                             <p>I create ux element interactions.</p>
//                         </li>
//                         <li className="services_modal-service">
//                             <i className="uil uil-check-circle servies_modal-icon"></i>
//                             <p>I position your company brand.</p>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//         <div className="services_content">
//             <div>
//                 <i className="uil uil-brackets-curly services_icon"></i>
//                 <h3 className="services_title">Frontend <br /> Developer</h3>
//             </div>

//             <span className="button button-flex button-small button-link services_button">
//                 View More <i className="uil uil-arrow-right button_icon"></i>
//             </span>
//             <div className="services_modal">
//                 <div className="services_modal-content">
//                     <h4 className="services_modal-title">Frontend <br /> Developer</h4>
//                     <i className="uil uil-times services_modal-close"></i>
//                     <ul className="services_modal-services grid">
//                         <li className="services_modal-service">
//                             <i className="uil uil-check-circle servies_modal-icon"></i>
//                             <p>I develop the user interface.</p>
//                         </li>
//                         <li className="services_modal-service">
//                             <i className="uil uil-check-circle servies_modal-icon"></i>
//                             <p>Web page development.</p>
//                         </li>
//                         <li className="services_modal-service">
//                             <i className="uil uil-check-circle servies_modal-icon"></i>
//                             <p>I create ux element interactions.</p>
//                         </li>
//                         <li className="services_modal-service">
//                             <i className="uil uil-check-circle servies_modal-icon"></i>
//                             <p>I position your company brand.</p>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//         <div className="services_content">
//             <div>
//                 <i className="uil uil-pen services_icon"></i>
//                 <h3 className="services_title">Branding <br /> Designer</h3>
//             </div>
//             <span className="button button-flex button-small button-link services_button">
//                 View More <i className="uil uil-arrow-right button_icon"></i>
//             </span>
//             <div className="services_modal">
//                 <div className="services_modal-content">
//                     <h4 className="services_modal-title">Branding <br /> Designer</h4>
//                     <i className="uil uil-times services_modal-close"></i>
//                     <ul className="services_modal-services grid">
//                         <li className="services_modal-service">
//                             <i className="uil uil-check-circle servies_modal-icon"></i>
//                             <p>I develop the user interface.</p>
//                         </li>
//                         <li className="services_modal-service">
//                             <i className="uil uil-check-circle servies_modal-icon"></i>
//                             <p>Web page development.</p>
//                         </li>
//                         <li className="services_modal-service">
//                             <i className="uil uil-check-circle servies_modal-icon"></i>
//                             <p>I create ux element interactions.</p>
//                         </li>
//                         <li className="services_modal-service">
//                             <i className="uil uil-check-circle servies_modal-icon"></i>
//                             <p>I position your company brand.</p>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     </div>
// </section>
