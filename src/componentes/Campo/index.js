import './Campo.css'

const Campo = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo campo-${props.type}`}> 
            <label>
                {props.label}
            </label>
            <input 
                type={props.type }
                value={props.valor} 
                onChange={aoDigitado} 
                required={props.obrigatorio} 
                placeholder={props.placeholder} ></input>
        </div>
    )
}

export default Campo