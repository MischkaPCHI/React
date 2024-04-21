import "./styles.css"

const Button = ({type, name, onButtonClick}) => {
    return <button type={type} onClick={onButtonClick} className="test-button">{name}</button>
}

export default Button;