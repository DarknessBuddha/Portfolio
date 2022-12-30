import React, {useEffect, useRef, useState} from 'react';
import {motion, PanInfo, useAnimation} from "framer-motion";
import InProgressCourse, {InProgressCourseProp} from "./InProgressCourse";
import '../styles/Carousel.css'

export interface CarouselProp extends React.HTMLAttributes<HTMLDivElement>{
    data: InProgressCourseProp[],
    interval?: number
}

const Carousel = ( { data, interval=5000 }: CarouselProp ) => {
    const [carouselWidth, setCarouselWidth] = useState(0);
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [carouselIntervalId, setCarouselIntervalId] = useState(0);
    const carousel = useRef<HTMLDivElement>(document.createElement("div"));

    const carouselController = {
        engine: useAnimation(),
        setTicker: () => {
            let id = window.setInterval(() => setCarouselIndex(prevIndex => (prevIndex + 1) % data.length), interval);
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
            if (info.velocity.x < -threshold && carouselIndex + 1 < data.length) {
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
    return (
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
                    data.map(course => <InProgressCourse {...course} />)
                }
            </motion.div>
            <div className="dots-container">
                {
                    data.map((course, index) =>
                        <div className="dot"
                             style={{
                                 backgroundColor: index === carouselIndex ? "var(--tertiary)" : "var(--secondary)"
                             }}/>
                    )
                }
            </div>
        </motion.div>
    );
};

export default Carousel;