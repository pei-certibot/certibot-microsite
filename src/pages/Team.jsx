import PersonCard from '../components/PersonCard.jsx';

const members = [
    { img: "../assets/gs.jpeg", name: "Gonçalo Silva",   nmec: "115950", email: "gon.oliveira@ua.pt",       linkedin: "http://www.linkedin.com/in/goncalooliveirasilva",          github: "https://github.com/goncalooliveirasilva" },
    { img: "../assets/as.jpeg", name: "António Santos",  nmec: "119139", email: "antonio.p.santos@ua.pt",   linkedin: "https://www.linkedin.com/in/antonio-p-santos/",            github: "https://github.com/Apmds" },
    { img: "../assets/rs.jpeg", name: "Rodrigo Santos",  nmec: "119198", email: "rodrigo.mvs@ua.pt",        linkedin: "https://www.linkedin.com/in/rodrigo-mvs/",                 github: "https://github.com/rodrigo-mvs" },
    { img: "../assets/gr.jpeg", name: "Gonçalo Ribau",   nmec: "119560", email: "goncalob.ribau@ua.pt",     linkedin: "https://www.linkedin.com/in/gon%C3%A7alo-ribau-24251a389/",github: "https://github.com/gRibau" },
    { img: "../assets/fm.jpeg", name: "Filipe Marques",  nmec: "120303", email: "",                         linkedin: "https://www.linkedin.com/in/filipe-marques-aa42a3352/",    github: "https://github.com/filipe1902" },
];

function Team() {
    return (
        <div className="py-16 px-8">
            <div className="text-center mb-14">
                <p className="text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                    The People
                </p>
                <h2 className="font-bold text-base-content">Our Team</h2>
            </div>

            {/* 5 members: 1 col → 2 col → 3 col → 5 col, generous gap, no max-width cap */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 max-w-[90rem] mx-auto">
                {members.map((m) => (
                    <PersonCard key={m.nmec} {...m} />
                ))}
            </div>
        </div>
    );
}

export default Team;
