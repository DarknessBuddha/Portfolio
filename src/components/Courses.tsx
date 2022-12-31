import React from 'react';
import '../styles/Courses.css'
import CoursesData from "../data/CoursesData";
import Course from "./Course";

export interface CoursesProp {
    index: number
}

const Courses = ( { index }:CoursesProp ) => {
    return (
        <div className="courses-container" >
            {CoursesData.slice(index * 6, index * 6 + 6).map(
                course => <Course {...course} />
            )}
        </div>
    );
};

export default Courses;