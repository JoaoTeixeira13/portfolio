import { useState } from "react";
import "./navbar.css";
import * as Scroll from "react-scroll";
import {
    Link,
    Button,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
    scroller,
} from "react-scroll";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Navbar() {
    const [toggle, setToggle] = useState(false);

    return (
        <nav id="navbar">
            <div className="appNavbar">
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    // offset={50}
                    duration={500}
                >
                    <h4>About</h4>
                </Link>
                <Link
                    activeClass="active"
                    to="work"
                    spy={true}
                    smooth={true}
                    // offset={50}
                    duration={500}
                >
                    <h4>Work</h4>
                </Link>
                <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    // offset={50}
                    duration={500}
                >
                    <h4>Skills</h4>
                </Link>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    // offset={50}
                    duration={500}
                >
                    <h4>Contact</h4>
                </Link>
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
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                // offset={50}
                                duration={500}
                            >
                                <h4 onClick={() => setToggle(false)}>About</h4>
                            </Link>
                            <Link
                                activeClass="active"
                                to="work"
                                spy={true}
                                smooth={true}
                                // offset={50}
                                duration={500}
                            >
                                <h4 onClick={() => setToggle(false)}>Work</h4>
                            </Link>
                            <Link
                                activeClass="active"
                                to="skills"
                                spy={true}
                                smooth={true}
                                // offset={50}
                                duration={500}
                            >
                                <h4 onClick={() => setToggle(false)}>Skills</h4>
                            </Link>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                // offset={50}
                                duration={500}
                            >
                                <h4 onClick={() => setToggle(false)}>
                                    Contact
                                </h4>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </div>
        </nav>
    );
}
