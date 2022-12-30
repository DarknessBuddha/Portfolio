import React from 'react';
import '../styles/Course.css'

export interface CourseProp extends React.HTMLAttributes<HTMLDivElement>{
    image?: React.ReactNode
    code: string
    name: string
}

const Course = ( {image, code, name, ...props}: CourseProp) => {
    return (
        <div className="course-container" {...props}>
            <div className="course-visual">
                <div className="img-container">
                    { image }
                </div>
                <h6>{ code }</h6>
            </div>
            <h5>
                { name }
            </h5>
        </div>
    );
};

export default Course;