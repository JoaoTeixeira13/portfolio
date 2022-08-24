import "./header.css";
import { motion } from "framer-motion";

export default function Header() {
    return (
        <div id="header" className="appHeader appFlex">
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="appHeaderInfo"
            >
                <div className="appHeaderBadge">
                    <div className="badgeCmp appFlex">
                        <span>👋🏼</span>
                        <div style={{ marginLeft: 20 }}>
                            <p className="pText">Hello, I am</p>
                            <h1 className="headText">João</h1>
                        </div>
                    </div>
                    <div className="tagCmp appFlex">
                        <p className="pText">Full Stack Web Developer</p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="appHeaderImg"
            >
                <img src="/joao.jpg" />
            </motion.div>
            <motion.div></motion.div>
        </div>
    );
}
