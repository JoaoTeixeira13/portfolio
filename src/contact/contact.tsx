import "./contact.css";
import AppWrap from "../wrapper/appWrap";
import SocialMedia from "../socialMedia";
import { GoMail } from "react-icons/go";

const Contact = () => {
    return (
        <>
            <h2 className="headText">Lets have a chat!</h2>
            <div className="contactCards">
                <div className="contactCard">
                    <a href="mailto:j.teixeira.dev@gmail.com" className="pText">
                        <GoMail />
                        <button className="contactButton">Contact me</button>
                    </a>
                </div>
               
                <div className="socialMediaContact contactCard">
                    <SocialMedia />
                </div>
            </div>
        </>
    );
};

export default AppWrap(Contact, "contact", "");
