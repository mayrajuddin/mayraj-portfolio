import React from 'react';

const About = () => {
    return (
        <section id='about' className='py-8 font-sans'>
            <div className="container mx-auto lg:px-32">
                <h3 className="text-3xl font-bold uppercase my-4">about me</h3>
                <div className="grid grid-cols-3 gap-4 items-center">
                    <div className="col-span-2">
                        <h4 className="tex-xl capitalize text-center"> a few words about me</h4>
                        <p><b>mayraj uddin</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit dolorem alias aut libero aliquam saepe. Exercitationem similique sapiente voluptates unde qui beatae, numquam dicta nulla nostrum ratione laboriosam odit veniam eveniet quos sequi architecto aperiam, quidem iste doloremque veritatis accusantium!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, odit sint! Eos deserunt, perferendis iure non hic exercitationem? Vel sint nemo amet, quisquam laboriosam, illo veniam in explicabo voluptates doloribus ipsa animi nesciunt officiis ullam quas harum quod ducimus velit!</p>
                    </div>
                    <div className="col-span-1">
                        <div className="w-64 border bg-[#999] ">
                            <img src="https://i.ibb.co/xCpfbNZ/mayraj.png" alt="" className='w-full h-fit' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;