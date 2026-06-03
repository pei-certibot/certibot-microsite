import { SiGithub } from "react-icons/si";

function Footer() {

    return (
        <footer className="bg-base-300 border-t border-base-300 w-full">
            {/* Main footer body */}
            <div className="max-w-screen-xl mx-auto px-8 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">

                    {/* Brand */}
                    <div className="flex flex-col gap-3">
                        <img
                            src="/assets/text_logo.png"
                            alt="CertiBot"
                            className="h-10 w-auto object-contain object-left"
                            style={{ filter: "brightness(0) saturate(100%) invert(26%) sepia(66%) saturate(2153%) hue-rotate(218deg) brightness(96%)" }}
                        />
                        <p className="text-base-content/45 text-sm leading-relaxed">
                            AI-powered compliance platform.<br />
                            DETI, Universidade de Aveiro.
                        </p>
                        <a
                            href="https://github.com/pei-certibot"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-base-content/40 hover:text-primary transition-colors text-sm w-fit"
                        >
                            <SiGithub className="text-base" />
                            pei-certibot
                        </a>
                    </div>

                    {/* Spacer column */}
                    <div />

                    {/* Advisors */}
                    <div className="flex flex-col gap-4">
                        <p className="text-base-content/40 text-xs font-semibold uppercase tracking-[0.18em]">
                            Project Advisors
                        </p>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                            {[
                                { name: "João Almeida",    href: "https://github.com/joaorafaelalmeida" },
                                { name: "Daniel Ferreira", href: "https://github.com/dferrero17" },
                                { name: "Luís Batista",    href: "https://github.com/xL1fer" },
                                { name: "Mariana Andrade", href: "https://github.com/MarianaAndrad" },
                            ].map(({ name, href }) => (
                                <a
                                    key={name}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-base-content/50 hover:text-primary text-sm transition-colors duration-150"
                                >
                                    {name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright strip */}
            <div className="border-t border-base-300/60 px-8 py-4">
                <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
                    <p className="text-base-content/35 text-xs">
                        © 2026 CertiBot · DETI, Universidade de Aveiro
                    </p>
                    <p className="text-base-content/25 text-xs">
                        Projeto em Engenharia Informática
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
