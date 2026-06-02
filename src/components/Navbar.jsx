import { SiGithub } from "react-icons/si";
import { RiMenuLine, RiSunLine, RiMoonLine, RiArrowDownSLine } from "react-icons/ri";
import { milestoneRoutes } from "../config/milestones";
import { useTheme } from "../contexts/theme.jsx";

const navLinks = [
    { href: "/team", label: "Team" },
    { href: "/calendar", label: "Calendar" },
];

const documentationLinks = [
    { href: "/mockup", label: "Mockup" },
    { href: "/terms-and-conditions", label: "Terms & Conditions" },
];

const dropdownItemCls =
    "block px-3 py-2 rounded-lg text-sm text-base-content/65 hover:text-base-content hover:bg-base-content/8 transition-colors duration-150";

const dropdownMenuCls =
    "absolute right-0 top-full mt-1 bg-base-100 border border-base-300 rounded-xl shadow-xl p-1.5 z-50 w-max max-w-[14rem]";

function Navbar() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <div className="navbar h-20 px-8 lg:px-32 fixed top-0 left-0 right-0 bg-base-200 border-b border-base-300 z-50">

            <div className="navbar-start flex-shrink-0">
                <a href="/" className="hover:opacity-80 transition-opacity duration-200">
                    <img
                        src="./assets/text_logo.png"
                        alt="CertiBot"
                        className="h-12 w-auto object-contain"
                        style={isDark ? { filter: "brightness(0) invert(1)" } : undefined}
                    />
                </a>
            </div>

            <div className="navbar-end flex items-center flex-nowrap gap-1">

                {/* ── Desktop ── */}
                <div className="hidden lg:flex items-center gap-1 text-[0.95rem]">
                    {navLinks.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="px-3 py-2 rounded-lg text-base-content/65 hover:text-base-content hover:bg-base-content/8 transition-colors duration-150 font-medium"
                        >
                            {item.label}
                        </a>
                    ))}

                    {/* Milestones dropdown */}
                    <details className="relative group">
                        <summary className="flex items-center gap-1 px-3 py-2 rounded-lg text-base-content/65 hover:text-base-content hover:bg-base-content/8 transition-colors duration-150 font-medium cursor-pointer select-none list-none">
                            Milestones
                            <RiArrowDownSLine className="text-base transition-transform duration-200 group-open:rotate-180" />
                        </summary>
                        <ul className={dropdownMenuCls}>
                            {milestoneRoutes.map((milestone) => (
                                <li key={milestone.path}>
                                    <a href={milestone.path} className={dropdownItemCls}>
                                        {milestone.navLabel}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </details>

                    {/* Documentation dropdown */}
                    <details className="relative group">
                        <summary className="flex items-center gap-1 px-3 py-2 rounded-lg text-base-content/65 hover:text-base-content hover:bg-base-content/8 transition-colors duration-150 font-medium cursor-pointer select-none list-none">
                            Documentation
                            <RiArrowDownSLine className="text-base transition-transform duration-200 group-open:rotate-180" />
                        </summary>
                        <ul className={dropdownMenuCls}>
                            {documentationLinks.map((item) => (
                                <li key={item.href}>
                                    <a href={item.href} className={dropdownItemCls}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </details>

                    <a
                        href="https://github.com/pei-certibot"
                        className="p-2 rounded-lg text-base-content/50 hover:text-base-content hover:bg-base-content/8 transition-colors duration-150 ml-1"
                        title="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SiGithub className="text-lg" />
                    </a>
                </div>

                {/* Theme toggle */}
                <button
                    onClick={toggleTheme}
                    title={isDark ? "Switch to light mode" : "Switch to dark mode"}
                    className="p-2 rounded-lg text-base-content/50 hover:text-base-content hover:bg-base-content/8 transition-colors duration-150 text-xl ml-1"
                >
                    {isDark ? <RiSunLine /> : <RiMoonLine />}
                </button>

                {/* ── Mobile ── */}
                <div className="flex items-center lg:hidden">
                    <a
                        href="https://github.com/pei-certibot"
                        className="p-2 text-base-content/50 hover:text-base-content transition-colors text-xl"
                        title="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SiGithub />
                    </a>

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-2xl text-base-content/60">
                            <RiMenuLine />
                        </div>
                        <ul
                            tabIndex={0}
                            className="dropdown-content mt-2 w-56 bg-base-100 border border-base-300 rounded-xl shadow-xl p-2 z-60 space-y-0.5"
                        >
                            {navLinks.map((item) => (
                                <li key={item.href}>
                                    <a href={item.href} className={dropdownItemCls}>{item.label}</a>
                                </li>
                            ))}

                            <li className="pt-1">
                                <p className="px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-widest text-base-content/35">
                                    Milestones
                                </p>
                                {milestoneRoutes.map((milestone) => (
                                    <a key={milestone.path} href={milestone.path} className={dropdownItemCls}>
                                        {milestone.navLabel}
                                    </a>
                                ))}
                            </li>

                            <li className="pt-1">
                                <p className="px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-widest text-base-content/35">
                                    Documentation
                                </p>
                                {documentationLinks.map((item) => (
                                    <a key={item.href} href={item.href} className={dropdownItemCls}>
                                        {item.label}
                                    </a>
                                ))}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
