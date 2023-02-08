import SocialMedia from "./socialMedia"
import InformationContainer from "./informationContainer"

import Avatar from '../img/3X4.png'

import '../styles/components/sidebar.sass'



const Sidebar = () => {

return(
    <aside id="sidebar">


        <img src={Avatar} alt="Saulo de Tarso" />
        <p className="title">Designer / Full Stack</p>
        <SocialMedia/>
        <InformationContainer/>
        <a href="http://saulodetarso.ml/pdf/curriculum-saulo-de-tarso.pdf" target="blank" className="btn">Baixar Curriculum</a>


    </aside>
)

}

export default Sidebar