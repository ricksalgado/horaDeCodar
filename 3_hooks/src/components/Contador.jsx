import {useReducer} from 'react';

// Definicao do estado inicial
const estadoInicial = { contador: 0 };

// Funcao reducerr que define como as acoes atualizam o estado
function reducer (estado, acao){

    switch(acao.tipo){
        case "incrementar":
            return { contador: estado.contador + 1 };

        case "decrementar":
            return { contador: estado.contador - 1 };

        case "resetar":
            return { contador: 0 };

        case "dobrar":
            return {contador: estado.contador * 2};

        case "metade":
            return {contador: estado.contador / 2};

        default:
            throw new Error ("Ação não suportada!");
    }

}

const Contador = () => {
// Iniciar o useReducer com estado inicial e funcao modificadora

    const [estado, dispatch] = useReducer (reducer, estadoInicial)

    return(
        <div>
            <h3>Contagem: {estado.contador}</h3>
            <button onClick={() => dispatch ({tipo: "incrementar"})}>Incrementar</button> 
            <button onClick={() => dispatch ({tipo: "decrementar"})}>Subtrair</button> 
            <button onClick={() => dispatch ({tipo: "metade"})}>Metade</button> 
            <button onClick={() => dispatch ({tipo: "dobrar"})}>Dobrar</button> 
            <button onClick={() => dispatch ({tipo: "resetar"})}>Resetar</button> 

        </div>
    )
}

export default Contador
