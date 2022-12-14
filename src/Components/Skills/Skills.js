import React from 'react';
import { FaCss3, FaHtml5, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiFirebase, SiJavascript, SiMongodb, SiTailwindcss } from 'react-icons/si';
const Skills = () => {

    const skills = [
        {
            id: 1,
            name: 'html',
            icon: <FaHtml5 />
        },
        {
            id: 2,
            name: 'css',
            icon: <FaCss3 />
        },
        {
            id: 3,
            name: 'javascript',
            icon: <SiJavascript />,
        },
        {
            id: 4,
            name: 'tailwind css',
            icon: <SiTailwindcss />
        }, { id: 5, name: 'react js', icon: <FaReact /> }, { id: 6, name: 'mongoDB', icon: <SiMongodb /> },
        { id: 7, name: 'firebase', icon: <SiFirebase /> }, { id: 8, name: 'node js', icon: <FaNodeJs /> }
    ]

    return (
        <section id='skills' className='bg-[#1B1B1B] text-white'>
            <div className="container mx-auto lg:px-32 line-r py-8">
                <h3 className="text-3xl font-bold uppercase pb-4 title  mx-4 lg:mx-0 title md:mx-8 mb-4 sm:mb-0">skills</h3>
                <div className="flex w-3/4 mx-auto gap-5 row-span-3 flex-wrap justify-center">
                    {
                        skills.map(skill =>
                            <div key={skill.id} className='p-3 shadow-md bg-[#263243] skill relative'>
                                <div className="flex items-center capitalize font-semibold font-sans">
                                    <span className='mr-2 text-[#68DECD] '>{skill.icon}</span> {skill.name}
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Skills;