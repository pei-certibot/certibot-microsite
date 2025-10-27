import { SiJira, SiGithub, SiFigma } from "react-icons/si";
import { RiMenuLine } from "react-icons/ri";

function Navbar() {

    return(
        <div className="navbar h-20 px-8 lg:px-32 fixed top-0 left-0 right-0 bg-base-200 z-50">

                <div className="navbar-start">
                    <a href="/" className="hover:scale-105 transition-transform"> <img src="./assets/text_logo.png" alt="Logo" className="h-17" /> </a>
                </div>

            <div className="navbar-end">
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 mt-2 text-xl">
                        <li><a href="/team">Team</a></li>
                        <li><a href="/calendar">Calendar</a></li>
                        <li>
                            <details className="relative">
                                <summary className="cursor-pointer select-none">Milestones</summary>
                                <ul className="absolute right-0 mt-2 w-44 bg-base-100 rounded-box p-2 shadow text-sm z-50">
                                    <li><a href="/m1-inception">MS1: Inception</a></li>
                                </ul>
                            </details>
                        </li>
                        <li>
                            <details className="relative">
                                <summary className="cursor-pointer select-none">Documentation</summary>
                                <ul className="absolute right-0 mt-2 w-40 bg-base-100 rounded-box p-2 shadow text-sm z-50">
                                    <li><a href="/mockup">Mockup</a></li>
                                </ul>
                            </details>
                        </li>
                        {/* <li><a href="#" className="mt-1 mx-1" title="Figma" target="_blank" rel="noopener noreferrer"><SiFigma/ ></a></li> */}
                        <li><a href="https://github.com/pei-certibot" className="mt-1 mx-1" title="Github" target="_blank" rel="noopener noreferrer"><SiGithub /></a></li>
                    </ul>
                </div>


                <div className="flex items-center lg:hidden">
                    {/* <a href="#" className="mx-2 text-xl pr-2" title="Jira" target="_blank" rel="noopener noreferrer"><SiJira/ ></a> */}
                    {/* <a href="#" className="mx-2 text-xl pr-2" title="Figma" target="_blank" rel="noopener noreferrer"><SiFigma/ ></a> */}
                    <a href="https://github.com/pei-certibot" className="mx-2 text-xl" title="Github" target="_blank" rel="noopener noreferrer"><SiGithub /></a>

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost text-2xl text-secondary">  <RiMenuLine /> </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-60 mt-3 w-52 p-2 shadow">
                            <li><a href="/team">Team</a></li>
                            <li><a href="/calendar">Calendar</a></li>
                            {/* <li><a>Meetings</a></li> */}
                            <li>
                                <a className="cursor-default hover:bg-base-100">Milestones</a>
                                <ul className="p-2">
                                    <li><a href="/m1-inception">MS1: Inception</a></li>
                                </ul>
                            </li>
                            <li>
                                <a className="cursor-default hover:bg-base-100">Documentation</a>
                                <ul className="p-2">
                                <li><a href="/mockup">Mockup</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar