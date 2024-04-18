import "./styles.css"

const ClassWorkProfileCards = (props) => {
    return (
        <div className="profile-card">
            <div className="ring">
                <i></i>
                <i></i>
                <i></i>
                <img className="avatar"
                    src={props.url}
                    alt="Avatar"
                />
            </div>
            <div className="info">
                <h3>{props.name}</h3>
                <p>Род деятельности: {props.job}</p>
                <p>Хобби: {props.hobby}</p>
            </div>
        </div>
    )
}

export default ClassWorkProfileCards;