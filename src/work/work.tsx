import "./work.css";
import { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import AppWrap from "../wrapper/appWrap";
import { workFilter } from "../constants";

const Work = () => {
    const [activeFilter, setActiveFilter] = useState("All");

    const handleWorkFilter: Function = (each: string) => {};
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
        </>
    );
};

export default AppWrap(Work, "work", "");
