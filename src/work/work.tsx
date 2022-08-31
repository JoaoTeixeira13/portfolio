import "./work.css";
import { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import AppWrap from "../wrapper/appWrap";
import { workFilter } from "../constants";
import { portfolioWorks } from "../constants";
import { PortfolioWork } from "../interfaces";

const Work = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

    const handleWorkFilter: Function = (each: string) => {
        console.log("user clicked on item");
    };
    return (
        <>
            <h2 className="headText">Some of my works</h2>
            <div className="workFilter">
                {workFilter.map((each: string, index: number) => {
                    return (
                        <div
                            key={index}
                            onClick={() => handleWorkFilter(each)}
                            className={`workFilterItem appFlex pText ${
                                activeFilter === each ? "itemActive" : ""
                            }`}
                        >
                            {each}
                        </div>
                    );
                })}
            </div>
            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="workPortfolio"
            >
                return(
                {portfolioWorks.map((each: PortfolioWork) => {
                    <div key={each.id} className="workItem appFlex">
                        <img src={each.imageUrl} alt={each.title} />
                        <motion.div
                            whileHover={{ opacity: [0, 1] }}
                            transition={{
                                duration: 0.25,
                                ease: "easeInOut",
                                staggerChildren: 0.5,
                            }}
                            className="workHover appFlex"
                        >
                            <a
                                href={each.repositoryUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <motion.div
                                    whileInView={{ scale: [0, 1] }}
                                    whileHover={{ scale: [1, 0.9] }}
                                    transition={{
                                        duration: 0.25,
                                    }}
                                    className="appFlex"
                                >
                                    <AiFillEye />
                                </motion.div>
                            </a>
                        </motion.div>
                    </div>;
                })}
                )
            </motion.div>
        </>
    );
};

export default AppWrap(Work, "work", "");
