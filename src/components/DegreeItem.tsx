import React from 'react';

export interface DegreeItemProp extends React.HTMLAttributes<HTMLDivElement>{
    icon: React.ReactNode
    text: string
}

const DegreeItem = ({icon, text, ...props}: DegreeItemProp) => {
    return (
        <div className="degree-item" {...props} >
            { icon }
            { text }
        </div>
    );
};

export default DegreeItem;
