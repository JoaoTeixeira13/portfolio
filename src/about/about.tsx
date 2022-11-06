import "./about.css";
import { motion } from "framer-motion";
import { About } from "../interfaces";
import { abouts } from "../constants";
import AppWrap from "../wrapper/appWrap";

const AboutMe = () => {
    return (
        <>
            <div className="aboutBio">
                <p className="aboutWelcome pText">
                    Welcome, nice to have you here!
                </p>
                <h2 className="headText">
                    {" "}
                    I am keen on learning new technologies, logic and systems'
                    patterns, problem solving and combining aesthetics with
                    functionality.{" "}
                </h2>
                <p className="pText">
                    Currently, I am focused on building customer tailored
                    products at{" "}
                    <a
                        href="https://www.maibornwolff.de/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        MaibornWolff
                    </a>
                    .
                </p>
                <p className="pText">
                    Prior to becoming a Software Engineer I studied Fashion
                    Design, Fine Arts and ran an e-commerce business. When I am
                    not coding, I enjoy playing chess and gardening.{" "}
                </p>
            </div>
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
                            <h2 className="boldText aboutTitles">
                                {each.title}
                            </h2>
                            <p className="pText">{each.description}</p>
                        </motion.div>
                    );
                })}
            </div>
        </>
    );
};

export default AppWrap(AboutMe, "about", "");
