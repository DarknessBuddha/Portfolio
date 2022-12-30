import React from 'react';
import '../styles/Footer.css'
import FooterData from "../data/FooterData";

const Footer = () => {
    return (
        <div className="footer">
            { FooterData.map(source => <p>{source}</p>)}
        </div>
    );
};

export default Footer;