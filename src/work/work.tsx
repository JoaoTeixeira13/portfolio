import "./work.css";
import { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import AppWrap from "../wrapper/appWrap";
import { workFilter } from "../constants";
import { portfolioWorks } from "../constants";
import { PortfolioWork } from "../interfaces";
import { AnimatedCard } from "../interfaces";

const Work = () => {
    const [filterWork, setFilterWork] =
        useState<PortfolioWork[]>(portfolioWorks);
    const [activeFilter, setActiveFilter] = useState<string>("All");
    const [animateCard, setAnimateCard] = useState<AnimatedCard>({
        y: 0,
        opacity: 1,
    });

    useEffect((): void => {
        setAnimateCard({ y: 100, opacity: 0 });
        setTimeout(() => {
            setAnimateCard({ y: 0, opacity: 1 });
        }, 500);

        if (activeFilter === "All") {
            setFilterWork(portfolioWorks);
        } else {
            let filteredDisplay: PortfolioWork[] = [];

            for (let i = 0; i < portfolioWorks.length; i++) {
                if (portfolioWorks[i].tag.includes(activeFilter)) {
                    filteredDisplay.push(portfolioWorks[i]);
                }
            }
            setFilterWork(filteredDisplay);
        }
    }, [activeFilter]);

    const handleWorkFilter: Function = (each: string) => {
        setActiveFilter(each);
    };

    return (
        <>
            <h2 className="headText">Some things I have built</h2>
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
                {filterWork.map((each: PortfolioWork) => {
                    return (
                        <div key={each.id} className="workItem appFlex">
                            <div className="workImg appFlex">
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
                                            <AiFillGithub />
                                        </motion.div>
                                    </a>
                                </motion.div>
                            </div>
                            <div className="workContent appFlex">
                                <h4 className="boldText">{each.title}</h4>
                                <p className="pText">{each.description}</p>
                                <p className="pText">
                                    <strong>TechStack: </strong>
                                    {each.techStack}
                                </p>

                                <div className="workTag appFlex">
                                    <p className="pText"> {each.tag[0]}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </motion.div>
        </>
    );
};

export default AppWrap(Work, "work", "");
