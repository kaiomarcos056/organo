import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [time, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      id: uuidv4(),
      nome: 'Data Sciense',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9',
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF',
    }
  ])

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador(id){
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id))
  }

  function mudarCorDoTime(cor,id){
    setTimes(time.map(time => {
      if(time.id === id) {
        time.corPrimaria = cor;
      }
      return time;
    }));
  }

  function cadastrarTime(novoTime){
      setTimes([...time, {...novoTime, id: uuidv4()}])
  }

  function resolverFavorito(id){
      setColaboradores(colaboradores.map(colaborador => {
        if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
        return colaborador
      }))
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario 
        cadastrarTime={cadastrarTime}
        aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} 
        times={ time.map(time => time.nome) }
      />
      {time.map(time => 
        <Time 
          aoFavoritar={resolverFavorito}
          mudarCor={mudarCorDoTime}
          key={time.id} 
          id={time.id}
          nome={time.nome} 
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          aoDeletar={deletarColaborador}
        />)
      }
      <Rodape/>
    </div>
  );
}

export default App;
