import { useState } from 'react';

const CounterMeu = () => {

    // Hooks always start with a "use"
    // The useState allow to use reactive value and also provides a way to change this value whenever we want
    // on useState, we invoque the funcion a inicial state. In this case, 0. The state can be string, number, boolean, or object.
    // on the array, the first value is the inicial valeu, we name as we want. The second is the function to change the inicial valeu. Most comunly name "set" and the name of the valeu we created. SO... if the value is xirigutago, the function will be named setXirigutago.
    const [count , setCount] = useState(0)

    const [familia , setFamilia] = useState(['Ricardo' , 33 , 'um homem'])

    const handleClick = () => {
        setFamilia(['Ana' , 34 , 'uma mulher']);
    }

    return (
        <div>

            <button onClick={ () => setCount ( count + 1 ) }>Clique aqui</button>
            <p>Voce clicou no botao {count} vezes.</p>
            <button onClick={ (handleClick)}>Clique aqui</button>
            <p>O {familia[0]} eh integrante dessa familia. Tem {familia[1]} anos e é {familia[2]}.</p>

        </div>
    )
}

export default CounterMeu
