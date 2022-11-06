import "./contact.css";
import AppWrap from "../wrapper/appWrap";
import SocialMedia from "../socialMedia";

const Contact = () => {
    return (
        <>
            <h2 className="headText">Let's have a chat!</h2>
            <div className="contactCards">
                <div className="contactCard textBox">
                    <p className="pText">
                        Although I am currently not looking for a job
                        opportunity, I am always happy to connect. If you have
                        any questions, want to discuss anything tech related,
                        play a game of chess or just say hi, feel free to reach
                        out!
                    </p>
                </div>
                <div className="contactCard">
                    <a href="mailto:j.teixeira.dev@gmail.com" className="pText">
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
