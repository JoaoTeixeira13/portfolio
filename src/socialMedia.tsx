import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GoMail } from "react-icons/go";

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
                <GoMail />
            </div>
        </div>
    );
}
