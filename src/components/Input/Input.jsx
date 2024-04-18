import "./styles.css"

const Input = (props) => {
    return (
        <div className="input-block">
            <label className="label">{props.label}</label>
           <input className="input" name={props.name} type={props.type} placeholder={props.placeholder} /> 
        </div>
    )
}

export default Input;