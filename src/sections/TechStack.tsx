import React, {useEffect, useRef, useState} from 'react';
import {motion} from "framer-motion";
import '../styles/TechStack.css'
import ToolsData from "../data/ToolsData";
import Tool from "../components/Tool";
import Language from "../components/Language";
import LanguagesData from "../data/LanguagesData";

const TechStack = () => {
    const [carouselWidth, setCarouselWidth] = useState(0);
    const carousel = useRef<HTMLDivElement>(document.createElement("div"));
    useEffect(() => {
        setCarouselWidth(carousel.current.offsetWidth)
    })

    return (
        <section className="tech-stack">
            <h3>Tools</h3>
            <div className="tools-carousel">
                <motion.div className="tools-inner-carousel"
                            animate={{x: [0, -(carouselWidth)]}}
                            transition={{
                                duration: ToolsData.length * 1.5,
                                repeat: Infinity,
                                times: [0, 1],
                                ease: "linear",
                                delay: 0
                            }}>
                    <div className="tools-container-wrapper">
                        {Array.from(Array(1 + Math.ceil(9 / ToolsData.length)), (_, index) => {
                            return (<div ref={carousel} className="tools-container">
                                {
                                    ToolsData.map(tool => <Tool image={tool.image} color={tool.color}/>)
                                }
                            </div>)
                        })}
                    </div>
                </motion.div>
            </div>
            <h3>Languages</h3>
            <div className="languages-container">
                {LanguagesData.map(language => <Language image={language.image} color={language.color}/>)}
            </div>
        </section>
    );
};

export default TechStack;