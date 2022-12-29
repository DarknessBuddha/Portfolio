import React from 'react';
import '../styles/InProgressCourse.css'

export type InProgressCourseProp = {
    code: string
    name: string
    description: string
    image: React.ReactNode
}

const InProgressCourse = ( {code, name, description, image}: InProgressCourseProp ) => {
    return (
        <div className="in-progress-item">
            <div className="text-block">
                <h3>{ code }</h3>
                <h2>{ name }</h2>
                <p>{ description }</p>
            </div>
            <div className="img-container">
                { image }
            </div>
        </div>
    );
};

export default InProgressCourse;