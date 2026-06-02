import { SiLinkedin, SiGithub, SiMaildotru } from "react-icons/si";

function PersonCard({ img, name, nmec, linkedin, github, email }) {
    return (
        <div className="group bg-base-100 border border-base-300 rounded-2xl overflow-hidden
                        transition-all duration-300
                        hover:border-primary/30 hover:shadow-2xl hover:-translate-y-2"
             style={{ "--tw-shadow-color": "rgba(0,113,223,0.15)" }}>

            {/* Photo with gradient overlay */}
            <div className="relative overflow-hidden">
                <img
                    src={img}
                    alt={name}
                    className="w-full h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Gradient: transparent top → dark bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Name overlaid at bottom of photo */}
                <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 pt-8">
                    <p className="font-bold text-white text-base leading-tight" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                        {name}
                    </p>
                    <p className="text-white/55 text-xs font-medium mt-0.5 tracking-wide">{nmec}</p>
                </div>
            </div>

            {/* Social links */}
            <div className="px-5 py-4 flex justify-center gap-6 text-lg border-t border-base-300/60">
                {email && (
                    <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer"
                       className="text-base-content/35 hover:text-primary transition-colors duration-150">
                        <SiMaildotru />
                    </a>
                )}
                <a href={linkedin} target="_blank" rel="noopener noreferrer"
                   className="text-base-content/35 hover:text-primary transition-colors duration-150">
                    <SiLinkedin />
                </a>
                <a href={github} target="_blank" rel="noopener noreferrer"
                   className="text-base-content/35 hover:text-primary transition-colors duration-150">
                    <SiGithub />
                </a>
            </div>
        </div>
    );
}

export default PersonCard;
