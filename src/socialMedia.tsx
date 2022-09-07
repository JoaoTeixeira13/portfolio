import { BsGithub, BsLinkedin } from "react-icons/bs";

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
            
        </div>
    );
}
