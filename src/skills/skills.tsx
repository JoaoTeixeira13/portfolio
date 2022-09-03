import "./skills.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { scaleVariants } from "../constants";
import { skills } from "../constants";
import { Skill } from "../interfaces";
import AppWrap from "../wrapper/appWrap";

const Skills = () => {
    return (
        <>
            {/* <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="skillCircles"
            >
                {" "}
                <h1>This is the skills component.</h1>
            </motion.div> */}
            <div className="skillsContainer">
                <motion.div className="skillsList">
                    {skills.map((skill: Skill) => {
                        return (
                            <motion.div
                                whileInView={{ opacity: [0, 1] }}
                                transition={{ duration: 0.5 }}
                                className="skillsItem appFlex"
                                key={skill.id}
                            >
                                <div
                                    className="appFlex"
                                    style={{
                                        backgroundColor: skill.backgroundColor,
                                    }}
                                >
                                    <img
                                        src={skill.imageUrl}
                                        alt={skill.name}
                                    />
                                </div>
                                <p className="pText">{skill.name}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </>
    );
};

export default AppWrap(Skills, "skills", "");
