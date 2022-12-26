import React, { useEffect, useState } from 'react';
import './Projects.css'
import ProjectCard from './ProjectCard';
const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('projectsData.json')
            .then(res => res.json())
            .then(data => {
                setProjects(data)
            })
    }, [])
    return (
        <section className='line-b hidden md:block' id='projects'>
            <div className="bg-[#1B1B1B] text-white">
                <div className="container mx-auto lg:px-32 line-r py-8 ">
                    <h3 className="text-3xl font-bold capitalize py-4 title md:mx-8 lg:mx-0">latest projects</h3>
                    <div className='flex flex-col lg:flex-col gap-20'>
                        {
                            projects?.map(project => <ProjectCard
                                key={project.id} project={project} />
                            )
                        }
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Projects;