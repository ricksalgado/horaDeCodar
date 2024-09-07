import './App.css'

import Welcome from "./components/Welcome";
import Xirigutago from './components/Xirigutago';
import Pai from './components/Pai'
import Descricao from './components/Descricao';
import Cachorro from './components/Cachorro';
import Counter from './components/Counter';
import UserInfoForm from './components/UserInfoForm';
import Button from './components/Button';
import PaiFunction from './components/PaiFunction';
import Form from './components/Form';
import RenderCondicional from './components/RenderCondicional';
import LoginButton from './components/LoginButton';
import Warning from './components/Warning';
import Numberlist from './components/Numberlist';
import BotaoEstilizado from './components/BotaoEstilizado';
import BotaoAzul from './components/BotaoAzul';
import Greeting from './components/Greeting';
import CounterMeu from './components/CounterMeu';
import TaskList from './components/TaskList';


function App() {
  return (
    <>
      {/* 6.1 - Criacao de componente  */}
      <Welcome/>
      {/* 6.2 - Expressoes do JSX */}
      <Xirigutago/>
      {/* 6.3 - Componentes dentro de Componentes */}
      <Pai />
      {/* 6.4 - Propos
      Props sao variaveis somente de leitura (nao mudam valor) q passa do componente pai para o filho. Ou seja, vai deixar o filho dinamico */}
      <Descricao nome = "Rick" idade={34}/>
      {/* 6.5 - Desestruturacao de Propos */}
      <Cachorro nome="Chewie" raca="Lhasa Apso" />
      {/* 6.6 - useState -> hook */}
      <Counter />
      {/* 6.7 - multiplos estados */}
      <UserInfoForm />
      {/* 6.8 - Eventos */}
      <Button />
      {/* 6.9 - Passando funcoes de manipulacao de eventos com Props */}
      <PaiFunction />
      {/* 6.10 - Eventos de From */}
      <Form />
      {/* 6.11 - Renderizacao condicional */}
      <RenderCondicional user='Rick Salgado'/>
      {/* 6.12 - expressao ternaria */}
      <LoginButton logedIn={true}/>
      <LoginButton logedIn={false}/>
      {/* 6.13 - Render Nulo */}
      <Warning warning={true}/>
      {/* 6.14 - Listas e chaves */}
      <Numberlist number={[1,2,3,4,5]} />
      {/* 6.15 - Estilos por atributo */}
      <BotaoEstilizado />
      {/* 6.16 - Estilos globais */}
      <br/><BotaoAzul />
      {/* 6.17 - Exercicios */}
      <Greeting name="Rick"/>
      <CounterMeu />
      <br/>
      
      <TaskList tasks={
          [
            {id: 1, text:'Estudar'} ,
            {id: 2, text:'Aprender direito'} , 
            {id: 3, task:'React'}, 
            {id: 4, text:'Javascript'}, 
            {id: 5, text:'Typescript'},
          ]
        } />


    </>
  )
}

export default App
