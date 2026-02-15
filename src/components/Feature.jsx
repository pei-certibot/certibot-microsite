function Feature({ icon, title, description }) {
    return (
        <div className="group flex flex-col items-center p-8">
            <div className="text-8xl mb-6 transition-all duration-300 transform group-hover:text-blue-800 group-hover:scale-110">
                {icon}
            </div>
            <h3 className="font-bold pb-2">{title}</h3>
            <h5>{description}</h5>
        </div>
    )
}

export default Feature;
