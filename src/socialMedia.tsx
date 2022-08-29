import { BsGithub, BsLinkedin, BsMailbox } from "react-icons/bs";

export default function SocialMedia() {
    return (
        <div className="socialMedia">
            <div>
                <BsGithub />
            </div>
            <div>
                <BsLinkedin />
            </div>
            <div>
                <BsMailbox />
            </div>
        </div>
    );
}
