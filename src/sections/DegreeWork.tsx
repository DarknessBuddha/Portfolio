import React, {useEffect, useState} from 'react';
import '../styles/DegreeWork.css'
import DegreeItem from "../components/DegreeItem";
import DegreeItemData from "../data/DegreeItemData";
import Carousel from "../components/Carousel";
import InProgressCoursesData from "../data/InProgressCoursesData";
import useCarets from "../hooks/useCarets";
import Courses from "../components/Courses";
import CoursesData from "../data/CoursesData";

const DegreeWork = () => {
    const [search, setSearch ] = useState("")
    const [filteredCourses, setFilteredCourses] = useState(CoursesData)
    useEffect(() => {
        setFilteredCourses(CoursesData.filter(item => search.toLowerCase() === ''? true :
            item.name?.toLowerCase().includes(search?.toLowerCase()) ||
            item.code?.toLowerCase().includes(search?.toLowerCase())
        ))
    }, [search])
    const { Carets, index, setIndex } = useCarets(filteredCourses);

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
                        <input onChange={e => {
                            setSearch(e.currentTarget.value)
                            setIndex(0)
                        }} value={search} placeholder="Search"/>
                        <Carets />
                    </nav>
                </div>

                <section className="completed-courses-module">
                    <Courses data={filteredCourses} index={index}/>

                    <div className="degree-info-container">
                        {DegreeItemData.map(
                            (item, index) => <DegreeItem key={index} {...item}/>
                        )}
                    </div>
                </section>
            </div>

        </section>
    );
};

export default DegreeWork;