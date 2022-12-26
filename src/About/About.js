import React from 'react';

const About = () => {
    return (
        <section id='about' className=' font-sans bg-[#1B1B1B] text-white line-b'>
            <div className="container mx-auto py-8 lg:px-32 line-r">
                <h3 className="text-3xl font-bold uppercase py-4 title mx-4 lg:mx-0 title md:mx-8">about me</h3>
                <div className="relative grid sm:grid-cols-3 gap-4 items-center md:mx-8 lg:mx-0 justify-center">
                    <div className="col-span-2 mx-4 pr-3 sm:pr-0 mt-3">
                        <p className='text-md lg:text-xl capitalize'>Hi,im <b className='text-[#68DECD]'>mayraj uddin</b></p>
                        <article>
                            <p className=' text-sm lg:text-lg'>A front-end Developer, I'm passionate about my work. I have experience in designing front-end websites. with the help of react js, I have created some projects.</p>
                        </article>
                    </div>
                    <div className="absolute -bottom-[31px] -right-0 col-span-2 md:col-span-1 mx-auto">
                        <div className=" lg:self-end  rounded-xl">
                            <img src="https://i.ibb.co/xCpfbNZ/mayraj.png" alt="" className='lg:w-96' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;