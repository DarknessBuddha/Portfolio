import React from 'react';
import '../styles/Projects.css'
import Project from "../components/Project";
import ProjectsData from "../data/ProjectsData";

const Projects = () => {
    return (
        <section className="projects">
            <h2>Projects</h2>
            <div className="projects-container">
                {
                    ProjectsData.map((project, index) =>
                        <Project title={project.title}
                                 description={project.description}
                                 image={project.image}
                                 color={project.color}
                                 reverse={index % 2 !== 0}/>
                    )
                }
            </div>
        </section>
    );
};

export default Projects;