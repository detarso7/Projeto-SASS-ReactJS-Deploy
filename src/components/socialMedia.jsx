import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa"
import '../styles/components/socialmedia.sass'

const socialMedia = [

    {name: "Linkedin", icon: <FaLinkedinIn/>, link: "https://www.linkedin.com/in/saulo-de-tarso/"},
    {name: "Github", icon: <FaGithub/>, link: "https://github.com/detarso7"},
    {name: "Instagram", icon: <FaInstagram/>, link: "https://www.instagram.com/saulo_d_tarso/"}

];

const SocialMedia = () => {

    return  (
        <section id="social-media">
        {socialMedia.map((media) => (
                <a href={media.link} className="social-btn" id={media.name} key={media.name} target="blank">
                    {media.icon}
                </a>
            ))}
        
        </section>
    );
};

export default SocialMedia;
