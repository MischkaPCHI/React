import "./styles.css"

const Button = (props) => {
    const buttonClass = `test-button ${props.isPrimary ? "" : "test"}`;
    return <button className={buttonClass}>{props.buttonName ? props.buttonName : 'Un'}</button>
}

export default Button;