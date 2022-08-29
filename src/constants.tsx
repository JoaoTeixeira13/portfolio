import { About } from "./interfaces";
import { ScaleVariants } from "./interfaces";

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
