import React from 'react';
import '../styles/Footer.css'
import FooterData from "../data/FooterData";

const Footer = (props: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className="footer" {...props}>
            <b>References</b>
            { FooterData.map((source, index) => <p key={index}>{source}</p>)}
            <a href="https://www.flaticon.com/free-icons/buddha" title="buddha icons">Buddha icons created by photo3idea_studio - Flaticon</a>
        </div>
    );
};

export default Footer;