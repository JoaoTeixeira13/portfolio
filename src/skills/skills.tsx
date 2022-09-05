import "./skills.css";
import { motion } from "framer-motion";
import { scaleVariants } from "../constants";
import { skills } from "../constants";
import { Skill } from "../interfaces";
import { experiences } from "../constants";
import { Experience } from "../interfaces";
import AppWrap from "../wrapper/appWrap";

const Skills = () => {
    return (
        <>
            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="skillCircles"
            >
                {" "}
                <h1>Skills and experience</h1>
            </motion.div>
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

                <motion.div className="skillsExp">
                    {experiences.map((work: Experience) => {
                        return (
                            <div key={work.id}>
                                <motion.div
                                    whileInView={{ opacity: [0, 1] }}
                                    transition={{ duration: 0.5 }}
                                    className="skillsExpWork"
                                    key={work.name}
                                >
                                    <h4 className="boldText">{work.name}</h4>
                                    <p className="p-text">{work.company}</p>
                                    <p className="p-text">{work.description}</p>
                                </motion.div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </>
    );
};

export default AppWrap(Skills, "skills", "");
