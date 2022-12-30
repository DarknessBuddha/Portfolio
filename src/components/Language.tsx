import React from 'react';
import '../styles/Language.css'

export interface LanguageProp extends React.HTMLAttributes<HTMLDivElement>{
    image: React.ReactNode
    color: string
}

const Language = ({ image, color, ...props }: LanguageProp) => {
    return (
        <div className="language-container" style={{backgroundColor : color}} {...props}>
            { image }
        </div>
    );
};

export default Language;