import { About } from "./interfaces";
import { ScaleVariants } from "./interfaces";
import { PortfolioWork } from "./interfaces";
import { Skill } from "./interfaces";

//about section

export const abouts: About[] = [
    {
        id: 1,
        title: "Full Stack Web Development",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imgUrl: "/full-stack.png",
    },
    {
        id: 2,
        title: "Backend Development",
        description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        imgUrl: "/back-end.jpg",
    },
    {
        id: 3,
        title: "Frontend Development",
        description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
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
        imageUrl: "/works/circe.png",
        tag: ["Single Page Application", "Web Application", "React JS", "All"],
    },
    {
        id: 2,
        title: "Social Network",
        description:
            "A single page application that allows users to join a social network.",
        repositoryUrl: "https://github.com/JoaoTeixeira13/social-network",
        imageUrl: "/works/socialNetwork.png",
        tag: ["Single Page Application", "Web Application", "React JS", "All"],
    },
    {
        id: 3,
        title: "Image Board",
        description: "An Instagram-like, single page image board application.",
        repositoryUrl: "https://github.com/JoaoTeixeira13/image-board",
        imageUrl: "/works/imageBoard.png",
        tag: ["Single Page Application", "Web Application", "Vue JS", "All"],
    },
    {
        id: 4,
        title: "Petition",
        description:
            "A website that allows users to register and sign a petition.",
        repositoryUrl: "https://github.com/JoaoTeixeira13/petition",
        imageUrl: "/works/petition.png",
        tag: ["Web Application", "All"],
    },
    {
        id: 5,
        title: "Connect Four",
        description:
            "A two-player game where the first user to connect four pieces wins.",
        repositoryUrl: "https://github.com/JoaoTeixeira13/connect-four",
        imageUrl: "/works/connectFour.png",
        tag: ["Web Application", "All"],
    },
];
