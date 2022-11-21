import { About } from "./interfaces";
import { ScaleVariants } from "./interfaces";
import { PortfolioWork } from "./interfaces";
import { Skill } from "./interfaces";
import { Experience } from "./interfaces";

//about section

export const abouts: About[] = [
    {
        id: 1,
        title: "Full Stack Web Development",
        description:
            "I build things for the web by developing both the front end (client side) and the back end (server side) portions of an application.",
        imgUrl: "/full-stack.jpg",
    },
    {
        id: 2,
        title: "Backend Development",
        description:
            "By focusing on databases, back-end logic, application programming interface (APIs), architecture, and servers, I ensure web applications perform correctly.",
        imgUrl: "/back-end.jpg",
    },
    {
        id: 3,
        title: "Frontend Development",
        description:
            "I use JavaScript and its libraries to build interactive web interfaces. I strive to provide users with the best experience possible centered around sound design principles. ",
        imgUrl: "/front-end.jpg",
    },
];

export const sections: string[] = [
    "home",
    "about",
    "work",
    "skills",
    "contact",
];

//skills

export const scaleVariants: ScaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: "easeInOut",
        },
    },
};

export const skills: Skill[] = [
    {
        id: 10,
        name: "HTML5",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        backgroundColor: "",
    },
    {
        id: 11,
        name: "CSS3",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        backgroundColor: "",
    },
    {
        id: 1,
        name: "JavaScript",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        backgroundColor: "",
    },
    {
        id: 2,
        name: "TypeScript",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        backgroundColor: "",
    },
    {
        id: 16,
        name: "Angular",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
        backgroundColor: "",
    },
    {
        id: 3,
        name: "Vue JS",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        backgroundColor: "",
    },
    {
        id: 4,
        name: "React JS",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        backgroundColor: "",
    },
    {
        id: 5,
        name: "Redux",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        backgroundColor: "",
    },
    {
        id: 6,
        name: "Socket.io",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
        backgroundColor: "",
    },
    {
        id: 12,
        name: "jQuery",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg",
        backgroundColor: "",
    },
    {
        id: 13,
        name: "Handlebars",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original-wordmark.svg",
        backgroundColor: "",
    },

    {
        id: 7,
        name: "Node JS",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        backgroundColor: "",
    },
    {
        id: 8,
        name: "Express JS",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        backgroundColor: "",
    },
    {
        id: 9,
        name: "PostgreSql",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        backgroundColor: "",
    },
    {
        id: 15,
        name: "Jest",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
        backgroundColor: "",
    },
    {
        id: 14,
        name: "Git",
        imageUrl:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        backgroundColor: "",
    },
];

export const experiences: Experience[] = [
    {
        id: 3,
        name: "Junior Software Engineer",
        company: "MaibornWolff GmbH",
        description: "Full Stack Application Development in Agile environment.",
        period: "11/22-present",
    },
    {
        id: 2,
        name: "Full Stack Web Developer",
        company: "Spiced Academy",
        description: "12 weeks intensive full time program.",
        period: "05/22-08/22",
    },
    {
        id: 1,
        name: "Tech orientation",
        company: "StartSteps",
        description:
            "Project based topics: Data Analytics, Web Development, UX/UI Design, Cybersecurity, Digital Marketing, Project Management, Agile Methodologies.",
        period: "02/22-03/22",
    },
];

// work

export const workFilter: string[] = [
    "Single Page Application",
    "Web Application",
    "React JS",
    "Vue JS",
    "All",
];

export const portfolioWorks: PortfolioWork[] = [
    {
        id: 1,
        title: "Circe",
        description:
            "A single page application that allows users to trade plants with each other.",
        repositoryUrl: "https://github.com/JoaoTeixeira13/circe",
        imageUrl: "/works/circe.gif",
        techStack:
            "JavaScript, AWS S3, Node.js, Express.js, PostgreSQL, React & Redux.",
        tag: ["Single Page Application", "Web Application", "React JS", "All"],
    },
    {
        id: 2,
        title: "Social Network",
        description:
            "A single page application that allows users to join a social network.",
        repositoryUrl: "https://github.com/JoaoTeixeira13/social-network",
        imageUrl: "/works/socialNetwork.gif",
        techStack:
            "JavaScript, AWS S3, Node.js, Express.js, PostgreSQL, Socket.IO, React & Redux.",
        tag: ["Single Page Application", "Web Application", "React JS", "All"],
    },
    {
        id: 3,
        title: "Image Board",
        description: "An Instagram-like, single page image board application.",
        repositoryUrl: "https://github.com/JoaoTeixeira13/image-board",
        imageUrl: "/works/imageBoard.gif",
        techStack:
            "JavaScript, Vue.js, Node.js, Express.js, PostgreSQL, AWS S3.",
        tag: ["Single Page Application", "Web Application", "Vue JS", "All"],
    },
    {
        id: 4,
        title: "Petition",
        description:
            "A website that allows users to register and sign a petition.",
        repositoryUrl: "https://github.com/JoaoTeixeira13/petition",
        imageUrl: "/works/petition.gif",
        techStack:
            "JavaScript, Handlebars, Node.js, Express.js, PostgreSQL, Heroku.",
        tag: ["Web Application", "All"],
    },
    {
        id: 5,
        title: "Connect Four",
        description:
            "A two-player game where the first user to connect four pieces wins.",
        repositoryUrl: "https://github.com/JoaoTeixeira13/connect-four",
        imageUrl: "/works/connectFour.gif",
        techStack: "JavaScript, HTML, CSS & jQuery",
        tag: ["Web Application", "All"],
    },
    {
        id: 6,
        title: "Portfolio",
        description:
            "The page you are currently viewing. A portfolio to showcase my works.",
        repositoryUrl: "https://github.com/JoaoTeixeira13/portfolio",
        imageUrl: "/works/portfolio.gif",
        techStack: "TypeScript, React",
        tag: ["Single Page Application", "Web Application", "React JS", "All"],
    },
];
