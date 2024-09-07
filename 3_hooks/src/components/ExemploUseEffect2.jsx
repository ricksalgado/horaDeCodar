import { useEffect , useState } from 'react';

const ExemploUseEffect2 = () => {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        document.title = `voce clicou ${contador} vezes`;
    });

    return (
        <div>
            <h1>
                useEffect example
            </h1>
            <p>voce clicou {contador} vezes</p>
            <button onClick={() => setContador(contador + 1)}>Adicione</button>
            <button onClick={() => setContador(contador - 1)}>Subtraia</button>
        </div>
    );
}

export default ExemploUseEffect2;
