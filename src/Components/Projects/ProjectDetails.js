import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../../ProjectsData'

const ProjectDetails = () => {
    const { id } = useParams()
    const project = projects.find(proj => proj.id === parseInt(id))
    console.log(project);
    return (
        <div>
            <h2>projects details id: {project.id}</h2>
        </div>
    );
};

export default ProjectDetails;