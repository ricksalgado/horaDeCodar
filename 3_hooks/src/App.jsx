import './App.css'
import ExemploUseEffect2 from './components/ExemploUseEffect2'
import Timer from './components/Timer'
import ComponenteFilho from './components/ComponenteFilho'
import { MeuContextoProvider } from './contexts/MeuContexto'
import ValorDoContexto from './components/ValorDoContexto'
import Contador from './components/Contador'
import DisplayWindowSize from './components/DisplayWindowSize'
import Container from './components/Container'
import PerfilDeUser from './components/PerfilDeUser'
import Exercises from './components/Exercises'

function App() {

  return (
    <body>
    {/* 8.1 - useEffect */}
    <ExemploUseEffect2 />
    <Timer />
    {/* 8.2 - useContext */}
    {/* aplicacoes de pequeno e medio porte que precisam transferir o estado entre componentes */}
    <MeuContextoProvider>
      <ComponenteFilho/>
      <ValorDoContexto/>
    </MeuContextoProvider>
    {/* 8.3 - useReducer */}
    {/* Parecido com o useState mas para estados mais complexos */}
    <Contador></Contador>
    {/* 8.4 - Custom hook */}
    <DisplayWindowSize/>
    {/* 8.5 - Slots & Children Props */}
    <Container>
      <p>é o maior de todos</p>
      <h1>Titulo da sessao</h1>
      <p>Este eh o subtitulo</p>
      
    </Container>
    {/* 8.6 - Sincronizar o estado com props */}
    <PerfilDeUser usuarioID={1} />
    <PerfilDeUser usuarioID={5} />
    {/* 8.7 - useMemo & useCallback */}
    {/* 8.8 - Exercises */}
    <Exercises/>

    </body>
  )
}

export default App
