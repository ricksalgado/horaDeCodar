import { useEffect, useState } from 'react'

const Timer = () => {
    const [segundos, setSegundos] = useState(0);

    // setInterval, setTimeout
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSegundos(( prevSegundos ) => prevSegundos + 1);
        }, 1000);

        // limpeza de estado
        return () => clearInterval(intervalId); 
    },[]); //array dependencia vazio

    return (
        <div>
            <h1>useEffect exemplo 2 - Timer</h1>
            Timer: {segundos} Segundos!
        </div>
    )
};

export default Timer;