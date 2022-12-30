import React from 'react';
import '../styles/TechStack.css'

import Language from "../components/Language";
import LanguagesData from "../data/LanguagesData";
import Slider from "../components/Slider";
import ToolsData from "../data/ToolsData";

const TechStack = () => {
    return (
        <section className="tech-stack">
            <h3>Tools</h3>
            <Slider data={ToolsData} />
            <h3>Languages</h3>
            <div className="languages-container">
                {LanguagesData.map(language => <Language {...language}/>)}
            </div>
        </section>
    );
};

export default TechStack;