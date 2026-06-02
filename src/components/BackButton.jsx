import { RiArrowLeftSLine } from "react-icons/ri";

function BackButton() {
    return (
        <button
            title="Homepage"
            onClick={() => (window.location.href = "/")}
            className="inline-flex items-center justify-center w-9 h-9 rounded-xl border border-base-300
                       text-base-content/50 bg-base-100
                       hover:border-primary/40 hover:text-primary hover:bg-primary/8
                       transition-colors duration-150 text-lg"
        >
            <RiArrowLeftSLine />
        </button>
    );
}

export default BackButton;
