import style from './Input.module.css'
function Input({type, text, name, placeholder, handleOnChange, value}) {
    return (
        <div className={style.form_controle}>
            <label htmlFor={name}>{text}</label>
            <input 
            type={type} 
            name={name} 
            id={name} 
            placeholder={placeholder} 
            onChange={handleOnChange} 
            value={value} />
        </div>
    )
}

export default Input;