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

export default function Navbar() {
    return (
        <div id="navbar">
            <div>
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
        </div>
    );
}
