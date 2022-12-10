import React from 'react';
import './Projects.css'
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { BiLinkExternal, } from "react-icons/bi";
import { SiFirebase, SiMongodb } from "react-icons/si";
const Projects = () => {

    return (
        <section className='line-b' id='projects'>
            <div className="bg-[#1B1B1B] text-white">
                <div className="container mx-auto lg:px-32 line-r py-8">
                    <h3 className="text-3xl font-bold capitalize my-4">projects</h3>
                    <div className='flex lg:flex-col gap-20'>
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Projects;


const ProjectCard = () => {
    return (
        <div className="flex justify-end items-center relative card-item">
            <div className='w-[520px]  absolute left-0  card-content '>
                <div className="p-6 bg-[#263243] rounded-xl text-white">
                    <h4 className="text-xl uppercase font-bold ">pc mart</h4>
                    <p className='py-4'>online resel laptop application for all. everyone can buy and sell laptops here.</p>
                    <div className='pb-4'>
                        <div className="badge badge-success gap-2 font-semibold mr-1">
                            <FaReact />
                            React JS
                        </div>
                        <div className="badge badge-success gap-2 font-semibold mr-1">
                            <FaNodeJs />
                            Node JS
                        </div>
                        <div className="badge badge-success gap-2 font-semibold mr-1">
                            <SiFirebase />
                            Firebase
                        </div>
                        <div className="badge badge-success gap-2 font-semibold mr-1">
                            <SiMongodb />
                            MongoDB
                        </div>
                    </div>
                    <div className='flex'>
                        <a href='https://github.com/mayrajuddin/pcmart-client' target='blank'
                            className='mr-3  hover:border-red-700'><FaGithub size={22} /></a>
                        <a href='https://github.com/mayrajuddin/pcmart-client' target='blank'
                            className=''><BiLinkExternal size={22} /></a>
                    </div>
                </div>
            </div>
            <div className='w-3/5'>
                <img src="https://i.ibb.co/ZNvV2GG/pc-mart-2.png" alt="" className='h-[340px] w-full rounded-xl hover:scale-105 duration-500 ease-linear' />
            </div></div>
    )
}