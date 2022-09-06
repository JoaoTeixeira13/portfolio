import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GoMail } from "react-icons/go";

export default function SocialMedia() {
    return (
        <div className="socialMedia">
            <div>
                <a
                    href="https://github.com/JoaoTeixeira13"
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsGithub />
                </a>
            </div>
            <div>
                <a
                    href="https://www.linkedin.com/in/joao-teixeira-dev/"
                    target="_blank"
                    rel="noreferrer"
                >
                    {" "}
                    <BsLinkedin />
                </a>
            </div>
            <div>
                <a href="mailto:j.teixeira.dev@gmail.com">
                    <GoMail />
                </a>
            </div>
        </div>
    );
}
