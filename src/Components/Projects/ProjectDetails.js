import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../../ProjectsData'

const ProjectDetails = () => {
    const { id } = useParams()
    const project = projects.find(proj => proj.id === parseInt(id))
    const { screenShot, details } = project
    return (
        <section className='bg-[#1B1B1B] text-white py-8' >
            <div className="container mx-auto ">
                <h2 className='title text-4xl pb-4'>Details</h2>
                <div className="">
                    {
                        screenShot.map(sc => <div key={sc.id} className="flex lg:row-span-2 gap-4 items-center proj-row py-6">
                            <div className=''>
                                <div className="w-3/4 mx-auto ">
                                    <img src={sc.ss} alt="" className='rounded-lg' />
                                </div>
                            </div>
                            <div>
                                <div className="w-3/4 mx-auto">
                                    <p> {sc.PDetail} </p>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div className="">
                    <p> {details} </p>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;