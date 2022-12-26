import React from 'react';
import { FaDiscord, FaEye, FaGithub, FaLinkedin } from "react-icons/fa";
const Banner = () => {
    return (
        <section>
            <div className="bg-[#1B1B1B] text-white line-b">
                <div className="container flex justify-between items-center px-4 py-16  mx-auto  md:py-32 md:px-10 lg:px-32 text-gray-900 line-r ">
                    <div className='text-white'>
                        <h1 className="text-5xl font-bold font-sans leading-none sm:text-6xl xl:max-w-3xl  capitalize">Hi, im <span className='text-[#68DECD]'>mayraj uddin.</span></h1>
                        <p className="mt-6 mb-8 text-2xl sm:mb-12 xl:max-w-4xl capitalize font-semibold italic">a front-end developer</p>
                        <div className="">
                            <a href="https://drive.google.com/file/d/1mfJ6yqx7b8dsQ1ZeJg1EpW_PriWaXEdR/view?usp=share_link" target='blank'>
                                <button type="button" className="px-8 py-3 m-2 text-lg border rounded border-[#68DECD] font-semibold  capitalize hover:text-[#68decd] duration-700 ease-in"><FaEye size={22} className='inline mr-1' /> resume</button>
                            </a>
                            <a href="https://drive.google.com/file/d/1--tY7LhiCx8HRPBaIU38xTEv8yvgoCCm/view?usp=share_link">
                                <button className="px-8 py-3 m-2 text-lg border rounded border-[#68DECD] font-semibold  hover:text-[#68decd] duration-700 ease-in uppercase"><FaEye size={22} className='inline mr-1' /> cv</button>
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col flex-end'>
                        <a href='https://github.com/mayrajuddin' target="_blank" className='mb-2 border-2 rounded-full p-2 border-transparent duration-700 ease-in hover:border-white '><FaGithub size={24} className=' text-[#68DECD]' /></a>
                        <a href='https://www.linkedin.com/in/mayrajuddin/' target='_blank' className='mb-2 border-2 rounded-full p-2 border-transparent duration-700 ease-in hover:border-white '><FaLinkedin size={24} className='text-[#68DECD]' /></a>
                        <a href='https://discord.com/users/917031322256551948' target='_blank' className='mb-2 border-2 rounded-full p-2 border-transparent duration-700 ease-in hover:border-white '><FaDiscord size={24} className='text-[#68DECD]' /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;