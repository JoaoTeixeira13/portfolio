import "./contact.css";
import AppWrap from "../wrapper/appWrap";
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
                    </a>
                </div>
                <div className="contactCard">
                    <a href="tel: +4915213971388" className="pText">
                        <FaMobileAlt />
                    </a>
                </div>
            </div>
        </>
    );
};

export default AppWrap(Contact, "contact", "");
