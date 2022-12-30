import React from 'react';
import '../styles/Footer.css'
import FooterData from "../data/FooterData";

const Footer = (props: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className="footer" {...props}>
            { FooterData.map(source => <p>{source}</p>)}
        </div>
    );
};

export default Footer;