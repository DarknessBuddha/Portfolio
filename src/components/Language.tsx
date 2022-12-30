import React from 'react';
import '../styles/Language.css'

export type LanguageProp = {
    image: React.ReactNode
    color: string
}

const Language = ({ image, color }: LanguageProp) => {
    return (
        <div className="language-container" style={{backgroundColor : color}}>
            { image }
        </div>
    );
};

export default Language;