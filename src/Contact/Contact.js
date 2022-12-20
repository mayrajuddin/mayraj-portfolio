import React, { useRef } from 'react';
import { FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';
import { IoLocationSharp } from "react-icons/io5";
import { FiSend, } from "react-icons/fi";
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';

const Contact = () => {
    const form = useRef()
    const contactForm = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_egp57ne', 'template_fh6jbjk', form.current, 'sPddVwWTOVuO9RguH')
            .then((result) => {
                console.log('message send');
                toast('message send successful')
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <section id='contact' className=' bg-[#1B1B1B] text-white'>
            <div className="py-8 container mx-auto line-r">
                <h3 className="text-3xl font-bold uppercase py-4 mx-4 lg:mx-28 title md:mx-8">contact</h3>
                <div className="mt-3 sm:mt-0 grid max-w-6xl grid-cols-1 px-6 mx-auto  md:grid-cols-2 md:divide-x items-center gap-4 lg:gap-0">
                    <div className="py-6 px-3 md:px-6 border rounded-lg lg:w-96 mx-4 sm:mx-0">
                        <h1 className="text-2xl  capitalize"><b>Mayraj uddin</b></h1>
                        <h4 className="text-lg pb-4 capitalize text-[#68DECD]">front-end developer</h4>
                        <div className="space-y-2">
                            <p className="flex items-center">
                                <IoLocationSharp size={22} className='mr-2 sm:mr-6 text-[#68DECD]' />
                                <span>Barotakia, Mirsharai, Chittagong</span>
                            </p>
                            <p className="flex items-center">
                                <FaPhoneAlt size={20} className='mr-2 sm:mr-6 text-[#68DECD]' />
                                <span>+8801628649295</span>
                            </p>
                            <p className="flex items-center">
                                <FaRegEnvelope className='mr-2 sm:mr-6 text-[#68DECD]' size={22} />
                                <span>mayrajuddin03@gmail.com</span>
                            </p>
                            <div className='py-4 text-center'>
                                <p className='signiture text-6xl capitalize text-[#68DECD]'>mayraj uddin</p>
                            </div>
                        </div>
                    </div>
                    <form ref={form} onSubmit={contactForm} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid mx-4 sm:mx-0">
                        <fieldset className="block border py-2 px-4 rounded-xl">
                            <legend className='px-3 text-md ml-6'> Full name <b className='text-[#68DECD]'>*</b></legend>
                            <input type="text" name='user_name' placeholder="Your Name" className="input block w-full rounded-md shadow-sm bg-transparent border-none" />
                        </fieldset>
                        <fieldset className="block border py-2 px-4 rounded-xl">
                            <legend className='px-3 text-md ml-6'> Your Email <b className='text-[#68DECD]'>*</b></legend>
                            <input type="email" name='user_email' placeholder="Your Email" className="input block w-full rounded-md shadow-sm bg-transparent border-none" />
                        </fieldset>
                        <fieldset className="block border py-2 px-4 rounded-xl">
                            <legend className='px-3 text-md ml-6'> Message <b className='text-[#68DECD]'>*</b></legend>
                            <textarea rows="3" name='message' className="block w-full rounded-md bg-transparent textarea border-none" placeholder='Message'></textarea>
                        </fieldset>
                        <button type="submit" className="px-8 py-3 rounded-lg border border-[#68DECD] text-white capitalize font-bold text-xl">sent Message <FiSend className='inline ml-2' /> </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;