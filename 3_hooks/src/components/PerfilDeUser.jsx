import {useState, useEffect} from 'react'

const PerfilDeUser = ({ usuarioID }) => {

    const [usuario, setUsuario] = useState(null);

    useEffect(() => {

        //Funcao para buscar dados
        const buscarUsuario = async() => {

            // Resposta Assincrona
            const resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${usuarioID}`)

            const dadosUsuario = await resposta.json()

            setUsuario(dadosUsuario);
        };

        if(usuarioID){
            buscarUsuario();
        }

    }, [usuarioID]);

    return (
        <div>
            {usuario ? (
                <div>
                    <h1>{usuario.name}</h1>
                    <p>email: {usuario.email}</p>
                    <p>Phone: {usuario.phone}</p>
                </div>
            ) : (
            <iframe src="https://lottie.host/embed/d1a80662-b142-432a-83d8-fc4792d81b03/gD8E36RqBr.json" >
            </iframe>)}
        </div>
    )
}

export default PerfilDeUser



// <iframe src="https://lottie.host/embed/d1a80662-b142-432a-83d8-fc4792d81b03/gD8E36RqBr.json"></iframe>