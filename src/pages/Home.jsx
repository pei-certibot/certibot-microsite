import { React , useEffect, useState } from 'react';
import PersonCard from '../components/PersonCard.jsx';

import { RiShieldCheckLine, RiGlobalLine, RiBarChartBoxAiLine, RiGitRepositoryLine } from "react-icons/ri";

function Home() {

    return(
        <div>
            <div className="flex flex-col lg:flex-row w-full mt-10">
                <div className="w-full lg:w-1/2 p-8 md:p-16 lg:pt-36 lg:pl-48 cursor-default">
                    <h2 className="font-extrabold text-left">Where AI Meets</h2>
                    <h1 className="font-black pb-2 hover:text-blue-800 transition-colors duration-300">Authenticity</h1>
                    <h4 className="text-left">From the first click to the final proof.</h4>
                    <h4 className="text-left">— Certibot keeps it verified.</h4>
                </div>
                <div className="w-full lg:w-1/2 py-8 px-8 md:px-16 lg:px-24">
                    <img 
                        src="../assets/art.png" 
                        alt="Certibot verification illustration" 
                        className="rounded-lg w-full h-auto object-cover"
                    />
                </div>
            </div>

            <hr className="mx-16 pb-16 text-gray-300"/>

            <h2 className="pb-8">Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4 md:px-48 mb-20">
                
                <div className="flex flex-col items-center p-8">
                    <RiGlobalLine className="text-9xl mb-6" />
                    <h3 className="font-bold pb-2">Feature One</h3>                    
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.</h5>
                </div>

                <div className="flex flex-col items-center p-8">
                    <RiGitRepositoryLine className="text-9xl mb-6" />
                    <h3 className="font-bold pb-2">Feature One</h3>                    
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.</h5>
                </div>

                <div className="flex flex-col items-center p-8">
                    <RiBarChartBoxAiLine className="text-9xl mb-6" />
                    <h3 className="font-bold pb-2">Feature One</h3>                    
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.</h5>
                </div>
                
                <div className="flex flex-col items-center p-8">
                    <RiShieldCheckLine className="text-9xl mb-6" />
                    <h3 className="font-bold pb-2">Verified Information</h3>                    
                    <h5>All the information given by AI is review by real humans.</h5>
                </div>
            </div>


            <div className="bg-base-300 p-8">
                <h2 className="pb-8">Our team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 px-4">
                    <PersonCard img="../assets/logo.png" name="Gonçalo Silva" nmec="115950" email="gon.oliveira@ua.pt" linkedin="http://www.linkedin.com/in/goncalooliveirasilva" github="https://github.com/goncalooliveirasilva" />
                    <PersonCard img="../assets/logo.png" name="António Santos" nmec="119139" email="antonio.p.santos@ua.pt" linkedin="https://www.linkedin.com/in/antonio-p-santos/" github="https://github.com/Apmds" />
                    <PersonCard img="../assets/logo.png" name="Rodrigo Santos" nmec="119198" email="rodrigo.mvs@ua.pt" linkedin="https://www.linkedin.com/in/rodrigo-mvs/" github="https://github.com/rodrigo-mvs" />
                    <PersonCard img="../assets/logo.png" name="Gonçalo Ribau" nmec="119560" email="goncalob.ribau@ua.pt" linkedin="https://www.linkedin.com/in/gon%C3%A7alo-ribau-24251a389/" github="https://github.com/gRibau" />
                    <PersonCard img="../assets/logo.png" name="Filipe Marques" nmec="120303" email="" linkedin="https://www.linkedin.com/in/filipe-marques-aa42a3352/" github="https://github.com/filipe1902" />
                </div>
            </div>

            <div>
                <h2 className="pb-8 pt-8">Lorem Ipsum</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 px-20 mb-10">
                    <div className="flex flex-col">
                        <h3 className="pb-2">Lorem ipsum dolor sit amet</h3>                    
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="pb-2">Lorem ipsum dolor sit amet</h3>                    
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h5>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home