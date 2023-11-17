import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {

    const [nome,setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [time, setTime] = useState('')
    const [imagem, setImagem] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            time,
            imagem
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
                <CampoTexto 
                    obrigatorio={false} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={ valor => setNome(valor) }
                />
                <CampoTexto 
                    label="Cargo" 
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={ valor => setCargo(valor) }
                />
                <CampoTexto 
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
        </section>
    )
}

export default Formulario