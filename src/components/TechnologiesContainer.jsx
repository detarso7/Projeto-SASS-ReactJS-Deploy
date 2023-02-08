import{
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact, DiPhotoshop, DiSass
} from 'react-icons/di'

import{SiTypescript} from 'react-icons/si'

import '../styles/components/technologiescontainer.sass'

const technologies = [
    {id: "figma", nome:"Figma", texto: "Proficiência em edição de imagens e criação gráfica."},
    {id: "photo", nome:"Photoshop", texto: "Experiência em design e colaboração de interface de usuário.", icon: <DiPhotoshop/>},
    {id: "html", nome:"HTML5", texto: "Experiência em codificação web estrutural e semanticamente correta.", icon: <DiHtml5/>},
    {id: "css", nome:"CSS3", texto: "Habilidade em estilo e formatação de páginas web.", icon: <DiCss3/>},
    {id: "sass", nome:"SASS", texto: "Conhecimento em pré-processador CSS avançado.", icon: <DiSass/>},
    {id: "js", nome:"JavaScript", texto: "Proficiência em linguagem de programação web interativa.", icon: <DiJsBadge/>},
    {id: "type", nome:"Typescript", texto: "Habilidade em tipagem estática para JavaScript.", icon: <SiTypescript/>},
    {id: "react", nome:"React", texto: "Proficiência em biblioteca JavaScript para aplicativos da web.", icon: <DiReact/>},
    {id: "node", nome:"Node.JS", texto: "Experiência em plataforma JavaScript para aplicações de servidor.", icon: <DiNodejsSmall/>},
    {id: "mysql", nome:"MySql", texto: "Habilidade em gerenciamento de banco de dados relacional.", icon: <DiMysql/>}
]

const TechnologiesContainer = () => {

    return(
    <section className="technologies-container">

        <h2>Tecnologias</h2>
        <div className="technologies-grid">

            {technologies.map((tech) => (
                
                <div className="technologies-card" id={tech.id} key={tech.id}>
                    {tech.icon}
                    <div className="technologies-info">
                        <h3>{tech.nome}</h3>
                        <p>{tech.texto}
                        </p>
                    </div>
                </div>

            ))}

        </div>


    </section>
    )
    
    }

    export default TechnologiesContainer