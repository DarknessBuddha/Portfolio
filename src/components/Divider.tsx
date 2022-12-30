import React from 'react';
import '../styles/Divider.css'

const Divider = (props: React.HTMLAttributes<HTMLHRElement>) => {
    return <hr className="divider" {...props}/>;
};

export default Divider;