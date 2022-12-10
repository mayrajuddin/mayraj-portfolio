import React from 'react';
import { FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';
import { IoLocationSharp } from "react-icons/io5";
import { FiSend, } from "react-icons/fi";

const Contact = () => {
    return (
        <section id='contact' className=' bg-[#1B1B1B] text-white'>
            <div className="py-8 container mx-auto line-r">
                <h3 className="text-3xl font-bold uppercase my-4 lg:px-28">contact</h3>
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto  md:grid-cols-2 md:divide-x items-center">
                    <div className="py-6 md:px-6 border rounded-lg lg:w-96 ">
                        <h1 className="text-xl  capitalize">Contact information</h1>
                        <p className="pt-2 pb-4 text-[#68DECD] font-semibold text-2xl">Mayraj uddin</p>
                        <div className="space-y-4">
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
                        </div>
                    </div>
                    <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                        <fieldset className="block border py-2 px-4 rounded-xl">
                            <legend className='px-3 text-md ml-6'> Full name <b className='text-[#68DECD]'>*</b></legend>
                            <input type="text" placeholder="Your Name" className="input block w-full rounded-md shadow-sm bg-transparent " />
                        </fieldset>
                        <fieldset className="block border py-2 px-4 rounded-xl">
                            <legend className='px-3 text-md ml-6'> Your Email <b className='text-[#68DECD]'>*</b></legend>
                            <input type="email" placeholder="Your Email" className="input block w-full rounded-md shadow-sm bg-transparent " />
                        </fieldset>
                        <fieldset className="block border py-2 px-4 rounded-xl">
                            <legend className='px-3 text-md ml-6'> Message <b className='text-[#68DECD]'>*</b></legend>
                            <textarea rows="3" className="block w-full rounded-md bg-transparent textarea" placeholder='Message'></textarea>
                        </fieldset>
                        <button type="button" className="px-8 py-3 rounded-lg border border-[#68DECD] text-white capitalize font-bold text-xl">sent Message <FiSend className='inline ml-2' /> </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;