import React, {useEffect, useRef, useState} from 'react';
import '../styles/Conveyor.css'
import {motion, useAnimation} from "framer-motion";

const useConveyor = () => {
    const conveyor = useRef<HTMLDivElement>(document.createElement("div"));
    const [width, setWidth] = useState(0);
    const controller = {
        engine: useAnimation(),
        innerEngine: useAnimation(),
        start: async function(){
            await controller.engine.start("appear")
            await controller.innerEngine.start("move")
        }
    }
    useEffect(() => {
        setWidth(conveyor.current.offsetWidth)
    }, [])

    return {
            Conveyor: () => (
                <motion.div className="conveyor"
                            ref={conveyor}
                            animate={controller.engine}
                            initial={{
                                rotate: -45,
                                visibility: "hidden",
                            }}
                            variants={{
                                appear: {
                                    x: ["-100%", "0%"],
                                    y: [width, 0],
                                    visibility: "visible"
                                }
                            }}
                            transition={{
                                duration: 2,
                                delay: 0,
                            }}>
                    <motion.div className="inner-conveyor"
                                animate={controller.innerEngine}
                                initial={{
                                    x: "-50%"
                                }}
                                variants={{
                                    move: {
                                        x: "0%"
                                    }
                                }} transition={{duration: 2, delay: 0, ease: "linear", repeat: Infinity}}>
                        <i className="bi bi-android2"></i>
                        <i className="bi bi-apple"></i>
                        <i className="bi bi-windows"></i>
                        <i className="bi bi-ubuntu"></i>
                        <i className="bi bi-cpu"></i>
                        <i className="bi bi-bank"></i>
                        <i className="bi bi-0-circle"></i>
                        <i className="bi bi-3-square-fill"></i>

                        <i className="bi bi-android2"></i>
                        <i className="bi bi-apple"></i>
                        <i className="bi bi-windows"></i>
                        <i className="bi bi-ubuntu"></i>
                        <i className="bi bi-cpu"></i>
                        <i className="bi bi-bank"></i>
                        <i className="bi bi-0-circle"></i>
                        <i className="bi bi-3-square-fill"></i>

                    </motion.div>
                </motion.div>
            ),
            conveyorController: controller
        };
};

export default useConveyor;