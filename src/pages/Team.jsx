import PersonCard from '../components/PersonCard.jsx';

function Team() {

    return(
        <div>
            <div className="bg-base-300 p-8">
                <h2 className="pb-8">Our team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 px-4">
                    <PersonCard img="../assets/placeholder.jpg" name="Gonçalo Silva" nmec="115950" email="gon.oliveira@ua.pt" linkedin="http://www.linkedin.com/in/goncalooliveirasilva" github="https://github.com/goncalooliveirasilva" />
                    <PersonCard img="../assets/placeholder.jpg" name="António Santos" nmec="119139" email="antonio.p.santos@ua.pt" linkedin="https://www.linkedin.com/in/antonio-p-santos/" github="https://github.com/Apmds" />
                    <PersonCard img="../assets/placeholder.jpg" name="Rodrigo Santos" nmec="119198" email="rodrigo.mvs@ua.pt" linkedin="https://www.linkedin.com/in/rodrigo-mvs/" github="https://github.com/rodrigo-mvs" />
                    <PersonCard img="../assets/placeholder.jpg" name="Gonçalo Ribau" nmec="119560" email="goncalob.ribau@ua.pt" linkedin="https://www.linkedin.com/in/gon%C3%A7alo-ribau-24251a389/" github="https://github.com/gRibau" />
                    <PersonCard img="../assets/placeholder.jpg" name="Filipe Marques" nmec="120303" email="" linkedin="https://www.linkedin.com/in/filipe-marques-aa42a3352/" github="https://github.com/filipe1902" />
                </div>
            </div>
        </div>
    )
}

export default Team
