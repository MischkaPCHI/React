import "./styles.css"

const Button = () => {
    const sendButtonName = "Send";
    const getButtonName = "Get";
    const isGetButton = true;

    return (
        <button className="test-button">
            {isGetButton ? getButtonName : sendButtonName} Data
        </button>
    )
}

export default Button;