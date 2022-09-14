import { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { sections } from "../constants";

export default function Navbar() {
    const [toggle, setToggle] = useState<boolean>(false);

    const Resume = (
        <a
            className="resume"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
        >
            <h4>Resume</h4>
        </a>
    );

    return (
        <nav id="navbar">
            <h4 className="icon">JT</h4>
            <div className="appNavbar">
                {sections.map((each: string, index: number) => (
                    <Link
                        activeClass="active"
                        to={each}
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        key={each + index}
                    >
                        <h4 onClick={() => setToggle(false)}>{each}</h4>
                    </Link>
                ))}
                {Resume}
            </div>
            <div className="appNavbarMobile">
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: "easeOut" }}
                    >
                        <div className="mobileSlide">
                            <HiX
                                className="closingMobile"
                                onClick={() => setToggle(false)}
                            />

                            {sections.map((each: string, index: number) => (
                                <Link
                                    activeClass="active"
                                    to={each}
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={500}
                                    key={each + index}
                                >
                                    <h4 onClick={() => setToggle(false)}>
                                        {each}
                                    </h4>
                                </Link>
                            ))}
                            {Resume}
                        </div>
                    </motion.div>
                )}
            </div>
        </nav>
    );
}
