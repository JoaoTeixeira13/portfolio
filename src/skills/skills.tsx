import "./skills.css";
import { motion } from "framer-motion";
import { scaleVariants } from "../constants";

export default function Skills() {
    return (
        <div id="skills">
            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whileInView}
                className="skillCircles"
            >
                {" "}
                <h1>This is the skills component.</h1>
            </motion.div>
        </div>
    );
}
