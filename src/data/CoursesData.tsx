import {CourseProp} from "../components/Course";

const CoursesData: CourseProp[] = [
    {
        code: "CPSC 2120",
        name: "Algorithms and Data Structures",
        image: <img src={require('../images/cpsc_2120.png')}/>,
        color: "#B3E0FF"
    },
    {
        code: "CPSC 2150",
        name: "Software Development Foundations",
        image: <img src={require('../images/cpsc_2150.jpg')}/>,
        color: "#FFDB3F"
    },
    {
        code: "CPSC 2310",
        name: "Introduction to Computer Organization",
        image: <img src={require('../images/cpsc_2310.png')}/>,
        color: "#007CC2"
    },
    {
        code: "CPSC 2070",
        name: "Discrete Structures for Computing",
        image: <img src={require('../images/cpsc_2070.jpg')}/>,
        color: "#60AFA9"
    },
    {
        code: "CPSC 2920",
        name: "Computing, Ethics and Global Society",
        image: <img src={require('../images/cpsc_2920.jpg')}/>,
        color: "#C5AD91"
    },
    {
        code: "STAT 3090",
        name: "Introductory Business Statistics",
        image: <img src={require('../images/stat_3090.jpg')}/>,
        color: "#accdff"
    },
    {
        code: "MATH 3110",
        name: "Linear Algebra",
        image: <img src={require('../images/math_3110.jpg')}/>,
        color: "#3D3B3E"
    }
]

export default CoursesData;