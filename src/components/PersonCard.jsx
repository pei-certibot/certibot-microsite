import { SiLinkedin, SiGithub, SiMaildotru } from "react-icons/si";

function Card({ img, name, nmec, linkedin, github, email }) {
    return (
        <div className="card bg-base-100 shadow-sm">
        <figure> <img src={img} alt="Picture" className="hover:scale-110 transition-transform" /> </figure>
        
        <div className="card-body text-center">
            <h4> {name} </h4>
            <p className="text-xl text-secondary">{nmec}</p>
            <div className="card-actions justify-center text-xl gap-8 pt-4">
                <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-500"> <SiMaildotru /> </a>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-500"> <SiLinkedin /> </a>
                <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-500"> <SiGithub /> </a>
            </div>
        </div>
        </div>
    )
}

export default Card;
