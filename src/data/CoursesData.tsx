import {CourseProp} from "../components/Course";

const CoursesData: CourseProp[] = [
    {
        code: "CPSC 2120",
        name: "Algorithms and Data Structures",
        image: <img src={require('../images/cpsc_2120.jpg')} alt=""/>,
    },
    {
        code: "CPSC 2150",
        name: "Software Development Foundations",
        image: <img src={require('../images/cpsc_2150.jpg')} alt=""/>,
    },
    {
        code: "CPSC 2310",
        name: "Introduction to Computer Organization",
        image: <img src={require('../images/cpsc_2310.jpg')} alt=""/>,
    },
    {
        code: "CPSC 2070",
        name: "Discrete Structures for Computing",
        image: <img src={require('../images/cpsc_2070.png')} alt=""/>,
    },
    {
        code: "CPSC 2920",
        name: "Computing, Ethics and Global Society",
        image: <img src={require('../images/cpsc_2920.jpg')} alt=""/>,
    },
    {
        code: "STAT 3090",
        name: "Introductory Business Statistics",
        image: <img src={require('../images/stat_3090.jpg')} alt=""/>,
    },
    {
        code: "MATH 3110",
        name: "Linear Algebra",
        image: <img src={require('../images/math_3110.jpg')} alt=""/>,
    },
    {
        code: "PHYS 2210",
        name: "Physics with Calculus II",
        image: <img src={require('../images/phys_2210.png')} alt=""/>,
    },
    {
        code: "PSYC 2010",
        name: "Intro to Psychology",
        image: <img src={require('../images/psyc_2010.png')} alt=""/> ,
    },
    {
        code: "BIOL 1040",
        name: "General Biology II",
        image: <img src={require('../images/biol_1040.png')} alt=""/>
    },
    {
        code: "COMM 2500",
        name: "Public Speaking",
        image: <img src={require('../images/comm_2500.png')} style={{background: "white"}} alt=""/>
    }
]

export default CoursesData;