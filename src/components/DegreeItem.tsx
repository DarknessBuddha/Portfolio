import React from 'react';

export type DegreeItemProp = {
    icon: React.ReactNode
    text: string
}

const DegreeItem = ({icon, text}: DegreeItemProp) => {
    return (
        <div className="degree-item">
            { icon }
            { text }
        </div>
    );
};

export default DegreeItem;
