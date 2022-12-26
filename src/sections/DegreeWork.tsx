import React, {useEffect, useRef, useState} from 'react';
import { motion } from "framer-motion";
import '../styles/DegreeWork.css'
import DegreeItem from "../components/DegreeItem";
import DegreeItemData from "../data/DegreeItemData";
import Course from "../components/Course";
import CoursesData from "../data/CoursesData";

const DegreeWork = () => {
    const [carouselWidth, setCarouselWidth] = useState(0);
    const carousel = useRef<HTMLDivElement>(document.createElement("div"));
    useEffect(() => {
        setCarouselWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    })

    const [index, setIndex] = useState(0);
    const caretController = {
        canDecrement: () => index > 0,
        canIncrement: () => (index+1)*6 < CoursesData.length,
        decrement: () => setIndex(curIndex => caretController.canDecrement() ? curIndex - 1 : curIndex),
        increment: () => setIndex(curIndex => caretController.canIncrement() ? curIndex + 1 : curIndex)
    }
    return (
        <section className="degree-work">
            <div className="inner-wrapper">
                <section className="in-progress-container">
                    <h2><b>Degree</b></h2>
                    <h4>In Progress</h4>
                    <motion.div ref={carousel} className="in-progress-carousel" whileTap={{cursor: "grabbing"}}>
                        <motion.div drag="x" dragConstraints={{right:0, left: -carouselWidth}} className="in-progress-inner-carousel">
                            <div className="in-progress-item">
                                <div className="text-block">
                                    <h3>CPSC 4420</h3>
                                    <h2>Artificial Intelligence</h2>
                                    <p>This course presents fundamental concepts in Artificial Intelligence. Specific topics include uninformed and informed search techniques, game playing, Markov decision processes, reinforcement learning, uncertain knowledge and probabilistic reasoning, constraint satisfaction problems, and supervised learning.</p>
                                </div>
                                <div className="img-container">
                                    <img src={require('../images/AI.png')}  alt="AI"/>
                                </div>
                            </div>
                            <div className="in-progress-item">
                                <div className="text-block">
                                    <h3>CPSC 4420</h3>
                                    <h2>Artificial Intelligence</h2>
                                    <p>This course presents fundamental concepts in Artificial Intelligence. Specific topics include uninformed and informed search techniques, game playing, Markov decision processes, reinforcement learning, uncertain knowledge and probabilistic reasoning, constraint satisfaction problems, and supervised learning.</p>
                                </div>
                                <div className="img-container">
                                    <img src={require('../images/AI.png')}  alt="AI"/>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                </section>
                <section className="content-container-2">
                    <div className="completed-courses-module">
                        <div className="courses-bar">
                            <h4>Completed Courses</h4>
                            <nav className="courses-bar__right">
                                <input placeholder="Search"/>
                                <div className="carets">
                                    <i style={{
                                            opacity: caretController.canDecrement() ? 1 : 0,
                                            cursor: caretController.canDecrement() ? "pointer" : "initial"
                                        }}
                                       onClick={caretController.decrement}
                                       className="bi bi-caret-left"></i>
                                    <i style={{
                                            opacity: caretController.canIncrement() ? 1 : 0,
                                            cursor: caretController.canIncrement() ? "pointer" : "initial"
                                        }}
                                       onClick={caretController.increment}
                                       className="bi bi-caret-right"></i>
                                </div>
                            </nav>
                        </div>
                        <div className="courses-container">
                            { CoursesData.slice(index*6, index*6 + 6).map(
                                course => <Course name={course.name} code={course.code} image={course.image} color={course.color} />
                            ) }
                        </div>
                    </div>
                    <div className="degree-info-container">
                        { DegreeItemData.map(
                            item => <DegreeItem icon={item.icon} text={item.text} />
                        ) }
                    </div>
                </section>
            </div>

        </section>
    );
};

export default DegreeWork;