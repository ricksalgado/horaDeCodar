import { useState } from 'react'

const Counter = () => {
    // [consultar,alterar]
    const [count , setCount] = useState(0);
    // variaveis nao re-renderizam componente. O state sim
    // let x = 10;

    console.log(count);
    
    return (
        <div> 
            <p>Vc clicou {count} vezes!</p>
            <button onClick={ () => setCount ( count + 1 ) }>Aumentar</button>
        </div>
    )
}

export default Counter;
