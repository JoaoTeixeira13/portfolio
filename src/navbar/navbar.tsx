import { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { sections } from "../constants";

export default function Navbar() {
    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <nav id="navbar">
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
            </div>
            <div className="appNavbarMobile">
                <HiMenuAlt4 onClick={() => setToggle(true)} />

                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 30] }}
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
                        </div>
                    </motion.div>
                )}
            </div>
        </nav>
    );
}
