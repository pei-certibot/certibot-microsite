import {
    RiShieldCheckLine,
    RiGlobalLine,
    RiBarChartBoxAiLine,
    RiChatSmileAiLine,
    RiBrainLine,
} from "react-icons/ri";
import Feature from "../components/Feature.jsx";

const features = [
    {
        icon: <RiGlobalLine />,
        title: "Knowledge Extraction",
        description:
            "Extracts controls, obligations and guidance from ISO, GDPR and other standards to build a structured compliance knowledge base.",
    },
    {
        icon: <RiChatSmileAiLine />,
        title: "Compliance AI Assistant",
        description:
            "Chat-based guidance that helps organizations interpret requirements, suggest controls, and navigate implementation steps with clarity.",
    },
    {
        icon: <RiBarChartBoxAiLine />,
        title: "Verification & Analytics",
        description:
            "Automates evidence verification, generates compliance scores, and tracks implementation progress through dynamic dashboards.",
    },
    {
        icon: <RiShieldCheckLine />,
        title: "Verified Information",
        description:
            "All AI-generated insights are validated by experts to ensure accuracy, transparency, and regulatory reliability.",
    },
];

const aboutCards = [
    {
        icon: <RiBrainLine />,
        title: "Knowledge Base",
        accent: "#3b82f6",
        accentBg: "rgba(59,130,246,0.10)",
        text: "CertiBot is an intelligent assistant designed to simplify and automate the complex process of regulatory compliance. Using AI and natural language processing, it extracts controls, requirements, and obligations directly from standards such as ISO, GDPR, and NIS2, transforming them into a structured, searchable knowledge base.",
    },
    {
        icon: <RiChatSmileAiLine />,
        title: "AI Assistant",
        accent: "#6366f1",
        accentBg: "rgba(99,102,241,0.10)",
        text: "Through an interactive chat interface, CertiBot guides users step by step during the implementation of controls, providing contextual explanations, best practices, and tailored recommendations for each clause.",
    },
    {
        icon: <RiBarChartBoxAiLine />,
        title: "Verification & Analytics",
        accent: "#06b6d4",
        accentBg: "rgba(6,182,212,0.10)",
        text: "Beyond implementation, CertiBot also supports verification and auditing activities. The integrated dashboards present real-time metrics, maturity scores, and coverage indicators, allowing teams to monitor progress and identify gaps. With CertiBot, compliance becomes continuous and data-driven — reducing manual effort, minimizing interpretation errors, and ensuring every decision is backed by verifiable information.",
    },
];

function Home() {
    return (
        <div>
            {/* ── Hero ──────────────────────────────────────────────── */}
            <section className="aurora-hero flex flex-col md:flex-row w-full min-h-[calc(100vh-5rem)]">

                {/* Text — mobile */}
                <div className="md:hidden w-full p-8 pt-10 cursor-default animate-fade-up">
                    <h3 className="font-extrabold text-left text-white">Where AI Meets</h3>
                    <h2
                        className="font-black pb-6 text-white cursor-default text-left
                                   hover:text-blue-400 transition-colors duration-300"
                    >
                        Authenticity
                    </h2>
                    <h5 className="text-left text-white/70">
                        An AI-powered assistant that helps organizations implement, verify, and manage
                        compliance with standards automatically.
                    </h5>
                </div>

                {/* Text — desktop */}
                <div className="hidden md:flex flex-col justify-center w-full md:w-[45%] p-10 lg:p-16 lg:pl-28 xl:pl-44 cursor-default">
                    <h2 className="animate-fade-up-d1 font-extrabold text-left text-white leading-tight">
                        Where AI Meets
                    </h2>
                    <h1
                        className="animate-fade-up-d2 font-black pb-4 text-left text-white cursor-default
                                   hover:text-blue-400 transition-colors duration-300"
                        style={{ lineHeight: 1.05 }}
                    >
                        Authenticity
                    </h1>
                    <h4 className="animate-fade-up-d3 text-left text-white/70 font-normal leading-relaxed">
                        An AI-powered assistant that helps organizations implement, verify, and manage
                        compliance with standards automatically.
                    </h4>
                </div>

                {/* Logo — floating, replaces the art.png card */}
                <div className="w-full md:w-[55%] flex items-center justify-center px-8 md:px-10 lg:px-16 py-10 md:py-0">
                    <img
                        src="/assets/cb-logo-white.png"
                        alt="CertiBot"
                        className="animate-logo-spin-slow w-64 h-64 md:w-80 md:h-80 object-contain"
                    />
                </div>
            </section>

            {/* ── Features ─────────────────────────────────────────── */}
            <section className="bg-base-100 py-20 px-6 md:px-12">
                <div className="text-center mb-14">
                    <p className="text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                        What We Built
                    </p>
                    <h2 className="font-bold">Features</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
                    {features.map((f, i) => (
                        <Feature
                            key={f.title}
                            index={i}
                            icon={f.icon}
                            title={f.title}
                            description={f.description}
                        />
                    ))}
                </div>
            </section>

            {/* ── About ────────────────────────────────────────────── */}
            <section className="bg-base-200 py-20 px-6 md:px-12">
                <div className="text-center mb-14">
                    <p className="text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-3">
                        The Project
                    </p>
                    <h2 className="font-bold">About CertiBot</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {aboutCards.map((card) => (
                        <div
                            key={card.title}
                            className="hover-lift bg-base-100 border border-base-300 rounded-2xl p-8 flex flex-col"
                        >
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-5 flex-shrink-0"
                                style={{ background: card.accentBg, color: card.accent }}
                            >
                                {card.icon}
                            </div>

                            <h4 className="font-bold text-left text-base-content mb-3 text-[1.05rem]">
                                {card.title}
                            </h4>
                            <p className="text-base-content/65 text-sm leading-relaxed text-left flex-1">
                                {card.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Home;
