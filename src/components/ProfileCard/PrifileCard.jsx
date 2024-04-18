import "./styles.css"

const ProfileCard = () => {
    return (
        <div className="profile-card">
            <div className="ring">
                <i></i>
                <i></i>
                <i></i>
                <img className="avatar"
                    src="https://cdn.kanobu.ru/editor/images/20/5d78da61-6c07-4088-babc-a00f9ca4f2b2.webp"
                    alt="Avatar"
                />
            </div>
            <div className="info">
                <h3>Мишель Юнг</h3>
                <p>Род деятельности: </p>
                <p>Хобби: Игры, Баскетбол</p>
            </div>
        </div>
    )
}

export default ProfileCard;