import "./styles.css"

const Input = ({label, name, type, placeholder}) => {
    return (
        <div className="input-block">
            <label className="label">{label}</label>
           <input className="input" name={name} type={type} placeholder={placeholder} /> 
        </div>
    )
}

export default Input;