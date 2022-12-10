import React from 'react';

const About = () => {
    return (
        <section id='about' className='py-8 font-sans bg-[#1B1B1B] text-white'>
            <div className="container mx-auto lg:px-32">
                <h3 className="text-3xl font-bold uppercase my-4">about me</h3>
                <div className="grid grid-cols-3 gap-4 items-center">
                    <div className="col-span-2">
                        <h4 className="tex-xl capitalize text-center"> a few words about me</h4>
                        <p>Hi,<b className='text-[#68DECD]'>mayraj uddin</b></p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, odit sint! Eos deserunt, perferendis iure non hic exercitationem? Vel sint nemo amet, quisquam laboriosam, illo veniam in explicabo voluptates doloribus ipsa animi nesciunt officiis ullam quas harum quod ducimus velit!</p>
                    </div>
                    <div className="col-span-1">
                        <div className="border bg-[#999] self-end">
                            <img src="https://i.ibb.co/xCpfbNZ/mayraj.png" alt="" className='w-full h-fit ' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;