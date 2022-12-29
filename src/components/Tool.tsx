import React from 'react';
import '../styles/Tool.css'

export type ToolProp = {
    image: React.ReactNode
    color: string
}

const Tool = ( { image, color }: ToolProp) => {
    return (
        <div className="tool-container" style={{ backgroundColor: color }}>
            { image }
        </div>
    );
};

export default Tool;