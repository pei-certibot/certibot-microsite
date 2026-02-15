function ToggleButton({ variable = true, onClick, icon1, icon2, title1, title2 }) {
    return (
        <button
            title={variable ? title1 : title2}
            onClick={onClick}
            className="inline-flex items-center justify-center w-10 h-10 bg-transparent border text-gray-800 border-gray-800 rounded-full hover:border-blue-800 hover:bg-blue-800 hover:text-white transition"
        >
            {variable ? icon1 : icon2}
        </button>
    )
}

export default ToggleButton;