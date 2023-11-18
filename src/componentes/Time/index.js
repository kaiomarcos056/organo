import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba'
import './Time.css'

const Time = (props) => {
    //console.log(props)
    const css = { backgroundColor: hexToRgba(props.corPrimaria,'0.6') }
    return (
        (props.colaboradores.length > 0) && <section className="time" style={ css }>
            <input onChange={evento => props.mudarCor(evento.target.value, props.id)} value={props.corPrimaria} type='color' className='input-cor' />
            <h3 style={ {borderColor: props.corPrimaria} } >{props.nome}</h3>
            <div className="colaboradores">
            { props.colaboradores.map ( colaborador => {
                return (<Colaborador 
                            favorito={colaborador.favorito}
                            corDeFundo={props.corPrimaria}
                            key={colaborador.nome}
                            id={colaborador.id}
                            nome={colaborador.nome} 
                            cargo={colaborador.cargo} 
                            imagem={colaborador.imagem}
                            aoDeletar={props.aoDeletar}
                            aoFavoritar={props.aoFavoritar}
                        />)
            } )}
            </div>
        </section>
    )
}

export default Time