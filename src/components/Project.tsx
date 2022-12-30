import React from 'react';
import '../styles/Project.css'

export interface ProjectProp extends React.HTMLAttributes<HTMLDivElement>{
    title: string
    description: string
    image: React.ReactNode
    color: string
    reverse?: boolean
}

const Project = ( { title, description, image, color, reverse=false, ...props }: ProjectProp ) => {
    return (
        <div className="project-container" style={{flexFlow: reverse? "row-reverse" : "initial"}} {...props}>
            <div className="text-block">
                <h4>{ title }</h4>
                <p>{ description }</p>
            </div>
            <div className="img-container" style={{backgroundColor: color}}>
                { image }
            </div>
        </div>
    );
};

export default Project;