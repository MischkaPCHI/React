import "./styles.css"

const Button = (props) => {
    return <button type={props.type} className="test-button">
        <div className="login-text-block">
            {props.name}
        </div>
    </button>
}

export default Button;