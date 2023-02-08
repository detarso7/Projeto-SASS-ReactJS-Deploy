import SocialMedia from "./socialMedia"
import InformationContainer from "./informationContainer"

import Avatar from '../img/3X4.png'

import '../styles/components/sidebar.sass'



const Sidebar = () => {

return(
    <aside id="sidebar">


        <img src={Avatar} alt="Saulo de Tarso" />
        <p className="title">Desenvolvedor</p>
        <SocialMedia/>
        <InformationContainer/>
        <a href="" className="btn">Baixar Curriculum</a>


    </aside>
)

}

export default Sidebar