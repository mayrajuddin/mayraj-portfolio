import React from 'react';

const About = () => {
    return (
        <section id='about' className=' font-sans bg-[#1B1B1B] text-white line-b'>
            <div className="container mx-auto py-8 lg:px-32 line-r">
                <h3 className="text-3xl font-bold uppercase py-4 title mx-4 lg:mx-28 title md:mx-8">about me</h3>
                <div className="grid sm:grid-cols-3 gap-4 items-center md:mx-8 lg:mx-0 justify-center">
                    <div className="col-span-2 mx-4 pr-3 sm:pr-0">
                        <h4 className="tex-xl capitalize text-center"> a few words about me</h4>
                        <p>Hi,<b className='text-[#68DECD]'>mayraj uddin</b></p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, odit sint! Eos deserunt, perferendis iure non hic exercitationem? Vel sint nemo amet, quisquam laboriosam, illo veniam in explicabo voluptates doloribus ipsa animi nesciunt officiis ullam quas harum quod ducimus velit!</p>
                    </div>
                    <div className="col-span-2 md:col-span-1 mx-auto">
                        <div className="border bg-[#999] lg:self-end ">
                            <img src="https://i.ibb.co/xCpfbNZ/mayraj.png" alt="" className='w-full h-fit ' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;