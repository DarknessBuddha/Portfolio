import { ProjectProp } from "../components/Project";

const ProjectsData: ProjectProp[] = [
    {
        title: "Steganographanator",
        description: "Steganography is the art of hiding a message within another form of media: images, articles, books, etc. It is an ancient practice, dating back to approximately 1499. The cool thing about messages encrypted with steganography is that if you don’t know that there’s a message in the image or file, it’s really hard to tell that there is a hidden message! A common example of this is “invisible ink”—unless you know that someone wrote on a paper with invisible ink, then you wouldn’t know to hold it to heat to see the hidden message.",
        image: <img src={require('../images/steganography.png')}/>,
        color: "#3e3e40"
    },
    {
        title: "IPfrequently",
        description: "This program reads from an excel sheet and updates the CCIT database through its webapp . The program replaces the access point names and ip addresses by controlling the mouse and keyboard, and navigates through the websites by interacting with html elements using selenium. The script saved me hours of monotonous work.",
        image: <img src={require('../images/ipfrequently.jpg')}/>,
        color: "#3e817a"
    },
    {
        title: "Clemson Registration Bot",
        description: "Tired of not registering your classes fast enough? Introducing the Clemson Registration Bot, a bot that will register the classes for you. On the day of registration, open this program, input your username, password, time, and pin number, and voila! The script will add all your classes to the current semester the moment the time is up! Just be sure to keep the program open.",
        image: <img src={require('../images/clemson.png')}/>,
        color: "#522d80"
    }
]

export default ProjectsData