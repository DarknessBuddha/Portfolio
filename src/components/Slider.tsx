import '../styles/Slider.css'
import React, {useEffect, useRef, useState} from 'react';
import {motion} from "framer-motion";
import Tool, {ToolProp} from "./Tool";

export interface SliderProp extends React.HTMLAttributes<HTMLDivElement>{
    data: ToolProp[]
}

const Slider = ({ data, ...props }: SliderProp) => {
    const [carouselWidth, setCarouselWidth] = useState(0);
    const carousel = useRef<HTMLDivElement>(document.createElement("div"));
    useEffect(() => {
        setCarouselWidth(carousel.current.offsetWidth)
    })

    let duplicates = 1 + Math.ceil(9 / data.length);
    return (
        <div className="tools-slider" {...props} >
            <motion.div className="tools-inner-slider"
                        animate={{x: [0, -carouselWidth]}}
                        transition={{
                            duration: data.length * 1.5,
                            repeat: Infinity,
                            times: [0, 1],
                            ease: "linear",
                            delay: 0
                        }}>
                <div className="tools-container-wrapper">
                    {Array.from(Array(duplicates), () => {
                        return (<div ref={carousel} className="tools-container">
                            {
                                data.map(tool => <Tool {...tool}/>)
                            }
                        </div>)
                    })}
                </div>
            </motion.div>
        </div>
    );
};

export default Slider;