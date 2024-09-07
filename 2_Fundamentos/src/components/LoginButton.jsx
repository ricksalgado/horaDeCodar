const LoginButton = ({logedIn}) => {
    // Exibir botao entrar pra logado e sair para deslogado
    return (
        <div>
            {logedIn ? <button>Sair</button> : <button>Entrar</button>}
        </div>
    )
}

export default LoginButton
