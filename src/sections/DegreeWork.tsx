import React, {useEffect, useRef, useState} from 'react';
import {motion, PanInfo, useAnimation} from "framer-motion";
import '../styles/DegreeWork.css'
import DegreeItem from "../components/DegreeItem";
import DegreeItemData from "../data/DegreeItemData";
import Course from "../components/Course";
import CoursesData from "../data/CoursesData";
import InProgressCoursesData from "../data/InProgressCoursesData";
import InProgressCourse from "../components/InProgressCourse";

const DegreeWork = () => {
    // carousel
    const [carouselWidth, setCarouselWidth] = useState(0);
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [carouselIntervalId, setCarouselIntervalId] = useState(0);
    const carousel = useRef<HTMLDivElement>(document.createElement("div"));

    const carouselController = {
        engine: useAnimation(),
        setTicker: () => {
            let id = window.setInterval(() => setCarouselIndex(prevIndex => (prevIndex + 1) % InProgressCoursesData.length), 5000);
            setCarouselIntervalId(id)
            return id;
        },
        onDrag: () => {
            clearInterval(carouselIntervalId)
        },
        OnDragEnd: (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
            let id = carouselController.setTicker()
            setCarouselIntervalId(id)
            const threshold = 50;
            if (info.velocity.x < -threshold && carouselIndex + 1 < InProgressCoursesData.length) {
                setCarouselIndex(currIndex => currIndex + 1)
            } else if (info.velocity.x > threshold && carouselIndex - 1 >= 0) setCarouselIndex(currIndex => currIndex - 1)
            carouselController.engine.start("snap").then()
        }
    }

    useEffect(() => {
        setCarouselWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
        let id = carouselController.setTicker();
        return () => clearInterval(id)
    }, [])

    useEffect(() => {
        carouselController.engine.start("snap").then()
    }, [carouselIndex, carouselController])

    // carets
    const [index, setIndex] = useState(0);
    const caretController = {
        canDecrement: () => index > 0,
        canIncrement: () => (index + 1) * 6 < CoursesData.length,
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
                        <motion.div drag="x"
                                    dragConstraints={{right: 0, left: -carouselWidth}}
                                    transition={{duration: .6}}
                                    animate={carouselController.engine}
                                    variants={{
                                        snap: {x: carouselIndex * (-carousel.current.offsetWidth)}
                                    }}
                                    onDrag={carouselController.onDrag}
                                    onDragEnd={carouselController.OnDragEnd}
                                    className="in-progress-inner-carousel">
                            {
                                InProgressCoursesData.map(course => <InProgressCourse code={course.code}
                                                                                      name={course.name}
                                                                                      description={course.description}
                                                                                      image={course.image}/>)
                            }
                        </motion.div>
                        <div className="dots-container">
                            {
                                InProgressCoursesData.map((course, index) =>
                                    <div className="dot"
                                         style={{
                                             backgroundColor: index === carouselIndex ? "var(--tertiary)" : "var(--secondary)"
                                         }}/>
                                )
                            }
                        </div>

                    </motion.div>

                </section>
                <div className="courses-bar">
                    <h4>Completed Courses</h4>
                    <nav className="courses-bar__right">
                        <input placeholder="Search"/>
                        <div className="carets">
                            <i style={{
                                filter: caretController.canDecrement() ? "brightness(100%)" : "brightness(20%)",
                                cursor: caretController.canDecrement() ? "pointer" : "initial"
                            }}
                               onClick={caretController.decrement}
                               className="bi bi-caret-left"></i>
                            <i style={{
                                filter: caretController.canIncrement() ? "brightness(100%)" : "brightness(20%)",
                                cursor: caretController.canIncrement() ? "pointer" : "initial"
                            }}
                               onClick={caretController.increment}
                               className="bi bi-caret-right"></i>
                        </div>
                    </nav>
                </div>

                <section className="completed-courses-module">

                    <div className="courses-container">
                        {CoursesData.slice(index * 6, index * 6 + 6).map(
                            course => <Course name={course.name} code={course.code} image={course.image}/>
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