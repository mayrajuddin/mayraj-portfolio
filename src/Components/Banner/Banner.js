import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Banner = () => {
    return (
        <section>
            <div className="bg-[#e6e3e3]">
                <div className="container flex justify-between items-center px-4 py-16  mx-auto  md:py-32 md:px-10 lg:px-32 text-gray-900">
                    <div>
                        <h1 className="text-5xl font-bold font-sans leading-none sm:text-6xl xl:max-w-3xl text-gray-900 capitalize">Hi, im <span className='text-violet-400 '>mayraj uddin.</span></h1>
                        <p className="mt-6 mb-8 text-2xl sm:mb-12 xl:max-w-4xl text-[#444] capitalize font-semibold">a front-end developer</p>
                        <div className="">
                            <a href="https://drive.google.com/file/d/1mfJ6yqx7b8dsQ1ZeJg1EpW_PriWaXEdR/view?usp=share_link" target='blank'>
                                <button type="button" className="px-8 py-3 m-2 text-lg border rounded border-violet-400 font-semibold text-gray-900 capitalize">resume</button>
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col flex-end'>
                        <a href='https://github.com/mayrajuddin' target='blank' className='mb-3 border-2 rounded-full p-2 border-transparent duration-700 ease-in hover:border-violet-400 '><FaGithub size={24} className='text-gray-900' /></a>
                        <a href='https://www.linkedin.com/in/mayrajuddin/' target='blank' className='border-2 rounded-full p-2 border-transparent duration-700 ease-in hover:border-violet-400 '><FaLinkedin size={24} className='text-gray-900' /></a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Banner;