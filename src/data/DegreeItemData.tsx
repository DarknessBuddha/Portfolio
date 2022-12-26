import React from "react";
import {DegreeItemProp} from "../components/DegreeItem";
import ClemsonIcon from "../images/ClemsonIcon";


const DegreeItemData: DegreeItemProp[] = [
    {
        icon: <ClemsonIcon />,
        text: "Clemson University"
    },
    {
        icon: <i className="bi bi-pc-display-horizontal"></i>,
        text: "Computer Science B.S"
    },
    {
        icon: <i className="bi bi-shield"></i>,
        text: "Cyber-security"
    },
    {
        icon: <i className="bi bi-calendar"></i>,
        text: "2021-2025"
    },
    {
        icon: <i className="bi bi-mortarboard"></i>,
        text: "4.0"
    }
]

export default  DegreeItemData;