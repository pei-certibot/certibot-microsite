import { React } from 'react';

function Footer() {
    return (
        <footer className="footer bg-base-300 py-8 w-full">
            <div className="w-full max-w-screen-xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 w-full">
                    <nav className="flex flex-col items-center">
                        <img src="/assets/text_logo.png" alt="Logo" className="h-12 mb-2" />
                        <p className="text-sm text-gray-400">@ DETI, Universidade de Aveiro</p>
                    </nav>
                    
                    <nav className="flex flex-col items-center">
                        <h6 className="footer-title text-lg font-medium mb-3">Project Advisors</h6>
                        <div className="grid grid-cols-2 gap-2 text-center">
                            <a href="https://github.com/joaorafaelalmeida" target="_blank" rel="noopener noreferrer" className="link link-hover text-gray-400 hover:text-primary">João Almeida</a>
                            <a href="https://github.com/dferrero17" target="_blank" rel="noopener noreferrer" className="link link-hover text-gray-400 hover:text-primary">Daniel Ferreira</a>
                            <a href="https://github.com/xL1fer" target="_blank" rel="noopener noreferrer" className="link link-hover text-gray-400 hover:text-primary">Luís Batista</a>
                            <a href="https://github.com/MarianaAndrad" target="_blank" rel="noopener noreferrer" className="link link-hover text-gray-400 hover:text-primary">Mariana Andrade</a>
                        </div>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
