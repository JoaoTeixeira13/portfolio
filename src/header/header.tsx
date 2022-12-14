import "./header.css";
import { motion } from "framer-motion";
import AppWrap from "../wrapper/appWrap";

const Header = () => {
    return (
        <div className="appHeader appFlex">
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="appHeaderInfo"
            >
                <div className="appHeaderBadge">
                    <div className="badgeCmp appFlex">
                        <div>
                            <p className="pText">Hello World! My name is</p>
                            <h1 className="headText">João.</h1>
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
                <img src="/joao.jpg" alt="profile" className="profilePicture" />
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    src="/circle.svg"
                    className="overlayCircle"
                />
            </motion.div>
        </div>
    );
};

export default AppWrap(Header, "home", "");
