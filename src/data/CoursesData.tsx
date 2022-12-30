import {CourseProp} from "../components/Course";

const CoursesData: CourseProp[] = [
    {
        code: "CPSC 2120",
        name: "Algorithms and Data Structures",
        image: <img src={require('../images/cpsc_2120.jpg')}/>,
    },
    {
        code: "CPSC 2150",
        name: "Software Development Foundations",
        image: <img src={require('../images/cpsc_2150.jpg')}/>,
    },
    {
        code: "CPSC 2310",
        name: "Introduction to Computer Organization",
        image: <img src={require('../images/cpsc_2310.jpg')}/>,
    },
    {
        code: "CPSC 2070",
        name: "Discrete Structures for Computing",
        image: <img src={require('../images/cpsc_2070.png')}/>,
    },
    {
        code: "CPSC 2920",
        name: "Computing, Ethics and Global Society",
        image: <img src={require('../images/cpsc_2920.jpg')}/>,
    },
    {
        code: "STAT 3090",
        name: "Introductory Business Statistics",
        image: <img src={require('../images/stat_3090.jpg')}/>,
    },
    {
        code: "MATH 3110",
        name: "Linear Algebra",
        image: <img src={require('../images/math_3110.jpg')}/>,
    }
]

export default CoursesData;