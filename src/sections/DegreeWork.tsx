import React from 'react';
import '../styles/DegreeWork.css'
import DegreeItem from "../components/DegreeItem";
import DegreeItemData from "../data/DegreeItemData";
import Course from "../components/Course";
import CoursesData from "../data/CoursesData";
import Carousel from "../components/Carousel";
import InProgressCoursesData from "../data/InProgressCoursesData";
import useCarets from "../hooks/useCarets";


const DegreeWork = () => {

    const { Carets, index } = useCarets();

    return (
        <section className="degree-work">
            <div className="inner-wrapper">
                <section className="in-progress-container">
                    <h2><b>Degree</b></h2>
                    <h4>In Progress</h4>
                    <Carousel data={InProgressCoursesData}/>

                </section>
                <div className="courses-bar">
                    <h4>Completed Courses</h4>
                    <nav className="courses-bar__right">
                        <input placeholder="Search"/>
                        <Carets />
                    </nav>
                </div>

                <section className="completed-courses-module">
                    <div className="courses-container">
                        {CoursesData.slice(index * 6, index * 6 + 6).map(
                            course => <Course {...course} />
                        )}
                    </div>

                    <div className="degree-info-container">
                        {DegreeItemData.map(
                            item => <DegreeItem icon={item.icon} text={item.text}/>
                        )}
                    </div>
                </section>
            </div>

        </section>
    );
};

export default DegreeWork;