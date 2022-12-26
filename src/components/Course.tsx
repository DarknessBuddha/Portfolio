import React from 'react';
import '../styles/Course.css'

export type CourseProp = {
    image?: React.ReactNode
    color?: string
    code: string
    name: string
}

const Course = ( {image, color = "white", code, name}: CourseProp) => {
    return (
        <div className="course-container">
            <div className="course-visual" style={{ background: color }}>
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