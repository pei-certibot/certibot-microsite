function Feature({ icon, title, description, index }) {
    const num = index !== undefined ? String(index + 1).padStart(2, "0") : null;

    return (
        <div className="hover-lift group relative bg-base-100 border border-base-300 rounded-2xl p-10 flex flex-col overflow-hidden cursor-default">
            {/* Ghost number — base-content = dark in light mode, white in dark mode */}
            {num && (
                <span
                    className="absolute -top-4 -right-1 font-black leading-none select-none pointer-events-none"
                    style={{
                        fontSize: "6.5rem",
                        color: "var(--color-base-content)",
                        opacity: 0.15,
                        fontFamily: "'Outfit', system-ui, sans-serif",
                    }}
                >
                    {num}
                </span>
            )}

            {/* Icon box */}
            <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 flex-shrink-0
                           transition-all duration-300 group-hover:scale-110"
                style={{ background: "rgba(0,113,223,0.14)", color: "var(--color-primary)" }}
            >
                {icon}
            </div>

            <h4 className="font-bold text-[1.1rem] text-left text-base-content mb-3">{title}</h4>
            <p className="text-base-content/60 text-sm leading-relaxed text-left">{description}</p>
        </div>
    );
}

export default Feature;
