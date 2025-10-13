function Card({ id, title, date }) {
    const handleClick = () => { window.location.href = `/meetings/${id}`;};

    return (
        <div className="card card-border bg-base-100 text-center cursor-pointer" onClick={handleClick}>
            <div className="card-body">
                <h4>{title}</h4>
                <h5 className="text-secondary">{date}</h5>
            </div>
        </div>
    )
}

export default Card;
