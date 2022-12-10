import React from 'react';
import { FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';
import { IoLocationSharp } from "react-icons/io5";

const Contact = () => {
    return (
        <section id='contact' className='py-8 bg-[#1B1B1B] text-white lg:px-32'>
            <div className="container mx-auto">
                <h3 className="text-3xl font-bold uppercase my-4">contact</h3>
                <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto  md:grid-cols-2 md:divide-x items-center">
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-xl  capitalize">Contact information</h1>
                        <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                        <div className="space-y-4">
                            <p className="flex items-center">
                                <IoLocationSharp size={22} className='mr-2 sm:mr-6' />
                                <span>Barotakia, Mirsharai, Chittagong</span>
                            </p>
                            <p className="flex items-center">
                                <FaPhoneAlt size={20} className='mr-2 sm:mr-6' />
                                <span>+8801628649295</span>
                            </p>
                            <p className="flex items-center">
                                <FaRegEnvelope className='mr-2 sm:mr-6' size={22} />
                                <span>mayrajuddin03@gmail.com</span>
                            </p>
                        </div>
                    </div>
                    <form className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                        <label className="block">
                            <span className="mb-1 label">Full name</span>
                            <input type="text" placeholder="Your Name" className="input block w-full rounded-md shadow-sm " />
                        </label>
                        <label className="block">
                            <span className="mb-1 label">Email address</span>
                            <input type="email" placeholder="Your Email" className="input block w-full rounded-md shadow-sm" />
                        </label>
                        <label className="block">
                            <span className="mb-1 label">Message</span>
                            <textarea rows="3" className="block w-full rounded-md "></textarea>
                        </label>
                        <button type="button" className="px-8 py-3 text-lg rounded bg-violet-400 text-gray-900 ">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;