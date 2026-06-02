import BackButton from "../components/BackButton";

function Mockup() {
    return (
        <div className="px-6 md:px-12 lg:px-20 py-10">
            <div className="flex items-end gap-4 mb-8">
                <BackButton />
                <div>
                    <p className="text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-1">
                        Design
                    </p>
                    <h2 className="text-left font-bold leading-none">Mockup</h2>
                </div>
            </div>

            <iframe
                className="w-full h-[72vh] rounded-xl border border-base-300"
                src="https://embed.figma.com/site/PRtrRw8N3TBuTyQEjP0qzz/CertiBot---Mockup?node-id=0-1&embed-host=share"
                allowFullScreen
            />
        </div>
    );
}

export default Mockup;
