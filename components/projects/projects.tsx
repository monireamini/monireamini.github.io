import React from 'react';
import projects from "../../data/projects";
import ProjectItem from "./project-item";
import SectionHeader from "../section-header/section-header";

const Projects = () => {
    return (
        <div className="bg-[#F1F1F1] dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
                <SectionHeader title={'Projects'} buttonLabel={'View all'} linkPath={'/projects'}/>

                {/* items */}
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project) => {
                        return (
                            <ProjectItem key={project.id} {...project}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export default Projects;
