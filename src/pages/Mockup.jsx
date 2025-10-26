import BackButton from "../components/BackButton";
function Mockup() {
    return (
        <div className="px-4 lg:px-20 h-screen">
            <div className="flex mb-8">
                <div className="w-1/3 relative"><div className="absolute bottom-0"><BackButton /></div></div>
                <div className="w-1/3"><h2>Mockup</h2></div>
            </div>

            <iframe
                className="w-full h-[72vh]"
                src="https://embed.figma.com/site/PRtrRw8N3TBuTyQEjP0qzz/CertiBot---Mockup?node-id=0-1&embed-host=share"
                allowFullScreen
            />
        </div>
    );
}

export default Mockup;
