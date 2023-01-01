import React from 'react';
import '../styles/Courses.css'
import Course, {CourseProp} from "./Course";

export interface CoursesProp {
    index: number,
    data: CourseProp[]
}

const Courses = ( { index, data }:CoursesProp ) => {
    return (
        <div className="courses-container" >
            {data
                .slice(index * 6, index * 6 + 6).map(
                (course, index) => <Course key={index} {...course} />
            )}
        </div>
    );
};

export default Courses;