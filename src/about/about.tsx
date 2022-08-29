import "./about.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { About } from "../interfaces";
import { abouts } from "../constants";
import AppWrap from "../wrapper/appWrap";

const AboutMe = () => {
    return (
        <div>
            <h2 className="headText">
                {" "}
                I am keen on learning new technologies, logic and systems'
                patterns, problem solving and combining aesthetics with
                functionality.{" "}
            </h2>
            <div className="appProfiles">
                {abouts.map((each: About) => {
                    return (
                        <motion.div
                            whileInView={{ opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{
                                duration: 0.5,
                                type: "tween",
                            }}
                            className="profileItem"
                            key={each.id}
                        >
                            <img src={each.imgUrl} alt={each.title} />
                            <h2 className="boldText">{each.title}</h2>
                            <p className="pText">{each.description}</p>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

export default AppWrap(AboutMe, "about", ["aboutMe"]);
