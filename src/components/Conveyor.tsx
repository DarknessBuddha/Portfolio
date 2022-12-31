import React, {useEffect} from 'react';
import '../styles/Conveyor.css'
import {motion, useAnimation} from "framer-motion";

const Conveyor = () => {
    const controller = {
        engine: useAnimation(),
        innerEngine: useAnimation()
    }
    useEffect(() => {
        controller.engine.start("init").then()
    }, [])
    return (
        <motion.div className="conveyor"
                    animate={controller.engine}
                    initial={{
                    }}
                    variants={{
                        init: {
                            rotate: -45,
                            // x: "-100%",
                            y: "x"
                        }
                    }}
                    transition={{
                        duration: 1
                    }}>
            <motion.div className="inner-conveyor" animate={controller.innerEngine}>
                <i className="bi bi-android2"></i>
                <i className="bi bi-apple"></i>
                <i className="bi bi-windows"></i>
                <i className="bi bi-ubuntu"></i>
                <i className="bi bi-cpu"></i>
                <i className="bi bi-bank"></i>
            </motion.div>
        </motion.div>
    );
};

export default Conveyor;