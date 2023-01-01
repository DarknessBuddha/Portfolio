import React, {useState} from 'react';
import '../styles/Carets.css'
import {CourseProp} from "../components/Course";


const useCarets = (data: CourseProp[]) => {
    const [index, setIndex] = useState(0);
    const caretController = {
        canDecrement: () => index > 0,
        canIncrement: () => (index + 1) * 6 < data.length,
        decrement: () => setIndex(curIndex => caretController.canDecrement() ? curIndex - 1 : curIndex),
        increment: () => setIndex(curIndex => caretController.canIncrement() ? curIndex + 1 : curIndex)
    }
    return {
        Carets: (props: React.HTMLAttributes<HTMLDivElement>) => (
            <div className="carets" {...props}>
                <i style={{
                    filter: caretController.canDecrement() ? "brightness(100%)" : "brightness(20%)",
                    cursor: caretController.canDecrement() ? "pointer" : "initial"
                }}
                   onClick={caretController.decrement}
                   className="bi bi-caret-left"></i>
                <i style={{
                    filter: caretController.canIncrement() ? "brightness(100%)" : "brightness(20%)",
                    cursor: caretController.canIncrement() ? "pointer" : "initial"
                }}
                   onClick={caretController.increment}
                   className="bi bi-caret-right"></i>
            </div>),
        index
    };
};

export default useCarets;