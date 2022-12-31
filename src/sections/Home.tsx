import React from 'react';
import '../styles/Home.css'
import useConveyor from "../hooks/useConveyor";

const Home = () => {
    const {Conveyor, conveyorController} = useConveyor()
    return (
        <section className="home">
            <Conveyor />

            <div className="content-container">
                <div className="text-block">
                    <h4>Hello World!</h4>
                    <h1>I'm <span>DarkBuddha</span></h1>
                    <h2>I <span>build</span> things for <span>fun</span></h2>
                    <button className="showcase-btn" onClick={conveyorController.start}>Gaze upon my power <i className="bi bi-rocket-takeoff"></i>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Home;