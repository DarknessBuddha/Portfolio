import {InProgressCourseProp} from "../components/InProgressCourse";

const InProgressCoursesData: InProgressCourseProp[] = [
    {
        code: "CPSC 4420",
        name: "Artifical Intelligence",
        description: "This course presents fundamental concepts in Artificial Intelligence. Specific\n" +
            "                                        topics include uninformed and informed search techniques, game playing, Markov\n" +
            "                                        decision processes, reinforcement learning, uncertain knowledge and\n" +
            "                                        probabilistic reasoning, constraint satisfaction problems, and supervised\n" +
            "                                        learning.",
        image: <img src={require('../images/cpsc_4420.jpg')} alt=""/>
    },
    {
        code: "CPSC 3600",
        name: "Networks and Network Programming",
        description: "Introduction to basic concepts of computer network technologies and network programming. Topics include network programming, layered protocol architectures, local and wide area networks, internetwork and intranetwork concepts, security. Socket level programming is introduced and used throughout the course.",
        image: <img src={require('../images/cpsc_3600.jpg')} alt=""/>
    },
    {
        code: "CPSC 3220",
        name: "Introduction to Operating Systems",
        description: "Detailed study of management techniques for the control of computer hardware resources. Topics include interrupt systems, primitive level characteristics of hardware and the management of memory, processor, devices, and data.",
        image: <img src={require('../images/cpsc_3220.jpg')} alt=""/>
    },
    {
        code: "CPSC 3300",
        name: "Computer Systems Organization",
        description: "Introduction to the structure of computer systems. Various hardware/software configurations are explored and presented as integrated systems. Topics include digital logic, basic computer organization, computer arithmetic, memory organization, input/output organizations, interrupt processing, multiprocessors, and cluster computers.",
        image: <img src={require('../images/cpsc_3300.jpg')} alt=""/>
    },
    {
        code: "ENGL 3570",
        name: "Film",
        description: "Examination of the film medium as an art form: its history, how films are made, why certain types of films (western, horror movies, etc.) have become popular, and how critical theories provide standards for judging film.",
        image: <img src={require('../images/engl_3570.jpg')} alt=""/>
    },
    {
        code: "FIN 2010",
        name: "Introduction to Personal Finance I",
        description: "Provides an introductory overview of personal finance with an emphasis on budgeting; consumer credit, including student loans, credit cards, and basic bank loans; personal bank services; and purchasing an automobile and property insurance. ",
        image: <img src={require('../images/fin_2010.jpg')} alt=""/>
    }

]
export default InProgressCoursesData