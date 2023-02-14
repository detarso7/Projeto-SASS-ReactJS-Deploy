import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa"
import '../styles/components/socialmedia.sass'

const socialMedia = [

    {name: "Linkedin", icon: <FaLinkedinIn/>},
    {name: "Github", icon: <FaGithub/>},
    {name: "Instagram", icon: <FaInstagram/>}

];

const SocialMedia = () => {

    return  (
        <section id="social-media">
        {socialMedia.map((media) => (
                <a href="#" className="social-btn" id={media.name} key={media.name}>
                    {media.icon}
                </a>
            ))}
        
        </section>
    );
};

export default SocialMedia;
