import React from 'react';
import '../styles/Tool.css'
import {motion, useAnimation, HTMLMotionProps} from "framer-motion";

export interface ToolProp extends HTMLMotionProps<'div'>{
    image: React.ReactNode
    color: string
}

const Tool = ( { image, color, ...props }: ToolProp) => {
    const controller = useAnimation()
    return (
        <motion.div className="tool-container"
                    style={{backgroundColor: color}}
                    animate={controller}
                    onHoverStart={() => controller.start("jump")}
                    onHoverEnd={() => controller.start("idle")}
                    variants={{
                        idle: {y: 0},
                        jump: {y: "-5%"}
                    }}
                    {...props}>
            {image}
        </motion.div>
    );
};

export default Tool;