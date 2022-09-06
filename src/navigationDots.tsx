import { Link } from "react-scroll";
import { ActiveProp } from "./interfaces";
import { sections } from "./constants";

export default function NavigationDots(props: ActiveProp) {
    return (
        <div className="navigation">
            {sections.map((each: string, index: number) => (
                <Link
                    activeClass="active"
                    className="navigation-dot"
                    to={each}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    key={each + index}
                    style={
                        props.active === each
                            ? { backgroundColor: `#e46b14` }
                            : {}
                    }
                ></Link>
            ))}
        </div>
    );
}
