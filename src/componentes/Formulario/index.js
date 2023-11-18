import './Formulario.css'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Formulario = (props) => {

    const [nome,setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [time, setTime] = useState('')
    const [imagem, setImagem] = useState('')

    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')
    
    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            id: uuidv4(),
            nome,
            cargo,
            time,
            imagem,
            favorito : false
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Campo
                    obrigatorio={false} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={ valor => setNome(valor) }
                />
                <Campo
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={ valor => setCargo(valor) }
                />
                <Campo 
                    label="Imagem" 
                    placeholder="Digite o caminho da sua imagem"
                    valor={imagem}
                    aoAlterado={ valor => setImagem(valor) }
                />
                <ListaSuspensa 
                    label="Time" 
                    itens={ props.times }
                    valor = { time }
                    aoAlterado={ valor => setTime(valor) }
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
            <form onSubmit={(evento) => {
                evento.preventDefault()
                props.cadastrarTime({nome:nomeTime, corPrimaria: corTime})
            }}>
                <h2>Preencha os dados para criar um novo time</h2>
                <Campo 
                    obrigatorio={false} 
                    label="Nome" 
                    placeholder="Digite o nome do time"
                    valor={nomeTime}
                    aoAlterado={ valor => setNomeTime(valor) }
                />
                <Campo
                    label="Cor" 
                    placeholder="Digite a cor do time"
                    valor={corTime}
                    type="color"
                    aoAlterado={ valor => setCorTime(valor) }
                />
                <Botao>
                    Criar um novo time
                </Botao>
            </form>
        </section>
    )
}

export default Formulario