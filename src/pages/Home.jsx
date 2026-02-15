import { RiShieldCheckLine, RiGlobalLine, RiBarChartBoxAiLine, RiChatSmileAiLine } from "react-icons/ri";
import Feature from "../components/Feature.jsx";

function Home() {

    return(
        <div>
            <div className="flex flex-col md:flex-row w-full mt-10">
                <div className="md:hidden w-full md:w-[40%] p-8 md:p-16 md:pt-24 md:pl-48 cursor-default">
                    <h3 className="font-extrabold text-left">Where AI Meets</h3>
                    <h2 className="font-black pb-8">Authenticity</h2>
                    <h5 className="text-left">An AI-powered assistant that helps organizations implement, verify, and manage compliance with standards automatically.</h5>
                </div>

                <div className="hidden md:block  w-full md:w-[40%] p-8 md:p-16 md:pt-24 md:pl-48 cursor-default">
                    <h2 className="font-extrabold text-left">Where AI Meets</h2>
                    <h1 className="font-black pb-2 hover:text-blue-800 transition-colors duration-300">Authenticity</h1>
                    <h4 className="text-left">An AI-powered assistant that helps organizations implement, verify, and manage compliance with standards automatically.</h4>
                </div>

                <div className="w-full md:w-[60%] px-8 md:px-16 lg:px-24">
                    <img 
                        src="../assets/art.png" 
                        alt="CertiBot verification illustration" 
                        className="rounded-lg w-full h-auto object-cover"
                    />
                </div>
            </div>

            <div className="bg-base-300 px-8 pt-10 mt-10">
                <h2 className="pb-6">Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4 md:px-48 mb-10">

                    <Feature icon={<RiGlobalLine/>}  title="Knowledge Extraction" 
                        description="Extracts controls, obligations and guidance from ISO, GDPR and other standards to build a structured compliance knowledge base." />

                    <Feature icon={<RiChatSmileAiLine/>} title="Compliance AI Assistant" 
                        description="Chat-based guidance that helps organizations interpret requirements, suggest controls, and navigate implementation steps with clarity." />

                    <Feature icon={<RiBarChartBoxAiLine/>} title="Verification & Analytics" 
                        description="Automates evidence verification, generates compliance scores, and tracks implementation progress through dynamic dashboards." />

                    <Feature icon={<RiShieldCheckLine/>} title="Verified Information" 
                        description="All AI-generated insights are validated by experts to ensure accuracy, transparency, and regulatory reliability." />
                </div>
            </div>


            <div>
                <h2 className="pb-8 pt-8">About CertiBot</h2>
                <div className="px-4 lg:px-20 mb-20">
                    <h5 className="text-left">
                        CertiBot is an intelligent assistant designed to simplify and automate the complex process of regulatory compliance.  
                        Using AI and natural language processing, it extracts controls, requirements, and obligations directly from standards such as ISO, GDPR, and NIS2, transforming them into a structured, searchable knowledge base.  
                        Through an interactive chat interface, CertiBot guides users step by step during the implementation of controls, providing contextual explanations, best practices, and tailored recommendations for each clause.
                        <br /><br />
                        Beyond implementation, CertiBot also supports verification and auditing activities.  
                        It also helps organizations assess their current compliance status with accuracy and transparency.  
                        The integrated dashboards present real-time metrics, maturity scores, and coverage indicators, allowing teams to monitor progress and identify gaps that need attention.  
                        <br /><br />
                        With CertiBot, compliance becomes continuous and data-driven — reducing manual effort, minimizing interpretation errors, and ensuring that every decision is backed by verifiable information.
                    </h5>
                </div>
            </div>

        </div>
    )
}

export default Home
