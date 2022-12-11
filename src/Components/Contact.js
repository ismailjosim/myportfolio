import React from 'react';
import SectionHeader from './utilities/SectionHeader';
import '../styles/contact.css'


// .contact_icon {
//     font-size: 2rem;
//     color: var(--first - color);
//     margin - right: var(--mb - 0 - 75);
// }


const Contact = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div className="min-h-screen">
                <SectionHeader headTitle={'Contact'} subTitle={'Get In Touch'}></SectionHeader>
                <div className='mt-10'>
                    <section className="contact container contact" id="contact">
                        <div className="contact_container container grid">
                            <div className='flex flex-col gap-10'>
                                <div className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>

                                    <div>
                                        <h3 className="text-lg">Call Me</h3>
                                        <span className="text-sm">+088 0171 505 2808</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>

                                    <div>
                                        <h3 className="text-lg">Email</h3>
                                        <span className="text-sm">ismailjosim@yahoo.com</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>


                                    <div>
                                        <h3 className="text-lg">Location</h3>
                                        <span className="text-sm">Charfassion, Bhola, Bangladesh</span>
                                    </div>
                                </div>
                            </div>
                            <form action="mailto:ismailjosim99@gmail.com" className="contact_form grid">
                                <div className="contact_inputs grid">
                                    <div className="contact_content">
                                        <label htmlFor="name" className="contact_label">Name</label>
                                        <input type="text" className="contact_input" />
                                    </div>
                                    <div className="contact_content">
                                        <label htmlFor="email" className="contact_label">Email</label>
                                        <input type="email" className="contact_input" />
                                    </div>
                                </div>
                                <div className="contact_content">
                                    <label htmlFor="project" className="contact_label">Project</label>
                                    <input type="text" className="contact_input" />
                                </div>
                                <div className="contact_content">
                                    <label htmlFor="" className="contact_label">Message</label>
                                    <textarea name="message" id="" cols="0" rows="7" className="contact_input"></textarea>
                                </div>
                                <div>
                                    <a href="mailto:ismailjosim99@gmail.com" className="button button-flex">
                                        Send Message
                                        <i className="uil uil-message button_icon"></i>
                                    </a>
                                </div>
                            </form>
                        </div>
                    </section>

                </div>

            </div>
        </div>

    );
};

export default Contact;
