import React from 'react';
import '../styles/Tool.css'
import {motion, useAnimation} from "framer-motion";

export type ToolProp = {
    image: React.ReactNode
    color: string
}

const Tool = ( { image, color }: ToolProp) => {
    const controller = useAnimation()
    return (
        <motion.div className="tool-container"
                    style={{backgroundColor: color}}
                    animate={controller}
                    onHoverStart={() => controller.start("jump")}
                    onHoverEnd={() => controller.start("idle")}
                    variants={{
                        idle: {y: 0},
                        jump: {y: -20}
                    }}>
            {image}
        </motion.div>
    );
};

export default Tool;