import { RiArrowLeftSLine } from "react-icons/ri";

function BackButton() {
    return (
        <button
            title="Homepage"
            onClick={() => (window.location.href = "/")}
            className="inline-flex items-center justify-center w-10 h-10 bg-transparent border text-gray-800 border-gray-800 rounded-full hover:border-blue-800 hover:bg-blue-800 hover:text-white transition">
            <RiArrowLeftSLine />
        </button>   
    )
}

export default BackButton;
