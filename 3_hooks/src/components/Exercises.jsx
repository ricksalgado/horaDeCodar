import { useEffect, useMemo, useState } from 'react'

const UserInfo = ({ xirigutago }) => {

    useEffect(() => {
        document.title = `Olá ${xirigutago.name} - ${xirigutago.jobTitle}`;
    }, [xirigutago]); 
    

    return (
        <div>
            <h1>{xirigutago.name}</h1>
            <p>{xirigutago.jobTitle}</p>
        </div>
    );

}




// -----------------------------------------------------

// Exercicio 2
const fibonnaci = (n) =>{

    if(n<= 1){
        return n
    }

    return fibonnaci(n-1) + fibonnaci(n-2);
}


const FibCalculator = ({num}) => {

    const fibResult = useMemo(() => fibonnaci(num), [num])

    return(
        <div>
            <p>
                Fibonacci de {num} é {fibResult}
            </p>
        </div>
    )

}

// -----------------------------------------------------

// Exercicio 3

const useOnlineStatus = () => {

    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {

        const handleOnline = () => setIsOnline(true)
        const handleOffline = () => setIsOnline(false)

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        // LIMPEZA
        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        }
    },[]);

    return isOnline;

};


const OnLineStatusIndicator = () => {
    const isOnline = useOnlineStatus();

    return(
        <div>
            <p>
                Você está atualmente: {isOnline ? "Online" : "Offline"}
            </p>
        </div>
    )
}

// Ex RETURNS
const exercise1 = () => {
    const xirigutago = {name: 'Rick Salgado', jobTitle: 'Developer'}


    return (
        <div>
            <h2>Exercicio 1</h2>
            <UserInfo xirigutago={xirigutago} />
            
            <h2>Exercicio 2</h2>
            <FibCalculator num={15} />            

            <h2>Exercicio 3</h2>
            <OnLineStatusIndicator />
        </div>
    )
}

export default exercise1