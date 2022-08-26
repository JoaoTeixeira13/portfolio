import "./about.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const abouts: {
    title: string;
    description: string;
    imgUrl: string;
}[] = [
    {
        title: "Full Stack Web Development",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imgUrl: "/full-stack.png",
    },
    {
        title: "Backend Development",
        description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        imgUrl: "back-end.jpg",
    },
    {
        title: "Frontend Development",
        description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
        imgUrl: "front-end.jpg",
    },
];

export default function About() {
    return (
        <div id="about">
            <h2 className="headText">
                {" "}
                I am keen on learning new technologies, logic and systems'
                patterns, problem solving and combining aesthetics with
                functionality.{" "}
            </h2>
            <div className="appProfiles">
                {abouts.map(
                    (
                        about: {
                            title: string;
                            description: string;
                            imgUrl: string;
                        },
                        index: number
                    ) => {
                        return (
                            <>
                                <motion.div
                                    whileInView={{ opacity: 1 }}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{
                                        duration: 0.5,
                                        type: "tween",
                                    }}
                                    className="profileItem"
                                    key={about.title + index}
                                >
                                    <img src={about.imgUrl} alt={about.title} />
                                    <h2 className="boldText">{about.title}</h2>
                                    <p className="pText">{about.description}</p>
                                </motion.div>
                            </>
                        );
                    }
                )}
            </div>
        </div>
    );
}
