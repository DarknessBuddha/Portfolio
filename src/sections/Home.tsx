import React from 'react';
import '../styles/Home.css'
import useConveyor from "../hooks/useConveyor";
import {motion, useAnimation} from "framer-motion";

const Home = () => {
    const {Conveyor, conveyorController} = useConveyor()
    const buttonController = useAnimation()
    return (
        <section className="home">
            <Conveyor />

            <div className="content-container">
                <div className="text-block">
                    <h4>Hello World!</h4>
                    <h1>I'm <span>DarkBuddha</span></h1>
                    <h2>I <span>build</span> things for <span>fun</span></h2>
                    <motion.button className="showcase-btn"
                                   onClick={()=>{
                                       conveyorController.start()
                                       buttonController.start("shrink").then(
                                           ()=>buttonController.start("hide")
                                       )
                                   }}
                                   animate={buttonController}
                                   variants={{
                                       shrink: {
                                           width: 10,
                                           height: 10,
                                           contentVisibility: "hidden",
                                           opacity: 0,
                                       },
                                       hide: {
                                           visibility: "hidden"
                                       }
                                   }}
                                   transition={{duration: 1}}>
                        Gaze upon my power <i className="bi bi-rocket-takeoff"></i>
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default Home;