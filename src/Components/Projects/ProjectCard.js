import React from 'react';
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { BiLinkExternal, } from "react-icons/bi";
import { SiFirebase, SiMongodb } from "react-icons/si";
import { Link, } from 'react-router-dom';
const ProjectCard = ({ project }) => {
    const { projectName, gitLink, liveLink, details, img, id } = project;

    return (
        <div className="flex justify-end items-center relative card-item">
            <div className='w-[520px]  absolute left-0  card-content '>
                <div className="p-6 bg-[#263243] rounded-xl text-white">
                    <h4 className="text-xl uppercase font-bold">{projectName}</h4>
                    <p className='py-4'>{details}</p>
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
                    <div className='flex justify-between items-center'>
                        <div className="flex">
                            <a href={gitLink} target='blank'
                                className='mr-3  hover:border-red-700'><FaGithub size={22} /></a>
                            <a href={liveLink} target='blank'
                                className=''><BiLinkExternal size={22} /></a>
                        </div>
                        <Link to={`/project/${id}`} className='flex-end lg:mr-5'>
                            <div className="badge border bg-transparent border-[#68DECD] p-2 px-3 font-semibold">
                                Details
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='w-3/5'>
                <img src={img} alt="" className='h-[340px] w-full rounded-xl hover:scale-105 duration-500 ease-linear' />
            </div></div>
    );
};

export default ProjectCard;