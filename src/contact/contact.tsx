import "./contact.css";
import AppWrap from "../wrapper/appWrap";
import SocialMedia from "../socialMedia";
import { GoMail } from "react-icons/go";
import { FaMobileAlt } from "react-icons/fa";

const Contact = () => {
    return (
        <>
            <h2 className="headText">Lets have a chat!</h2>
            <div className="contactCards">
                <div className="contactCard">
                    <a href="mailto:j.teixeira.dev@gmail.com" className="pText">
                        <GoMail />
                        j.teixeira.dev@gmail.com
                    </a>
                </div>
                <div className="contactCard">
                    <a href="tel: +4915213971388" className="pText">
                        <FaMobileAlt />
                        +4915213971388
                    </a>
                </div>
            </div>
            <div className="socialMediaContact">
                <SocialMedia />
            </div>
        </>
    );
};

export default AppWrap(Contact, "contact", "");
