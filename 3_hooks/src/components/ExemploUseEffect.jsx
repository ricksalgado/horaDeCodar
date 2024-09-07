import { useEffect, useState } from 'react'

const ExemploUseEffect = () => {
    const [contador, setContador] = useState(0);


    // executar algo baseado em algo
    // a mudanca de um valor, baseado em outro valor
    useEffect(() => {
        document.title = `voce clicou ${contador} vezes`;
    });

    return (
        <div>
            <h1>Exemplo useEffect</h1>
            <p>voce clicou no contador {contador} vezes</p>
            <button onClick={() => setContador ( contador + 1 )}>Clique Aqui</button>
        </div >
    );
};

export default ExemploUseEffect
