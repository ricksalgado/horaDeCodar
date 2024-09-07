// rafce - automatico
// function Descricao (){return()}
// export default Descricao;

const Descricao = (props) => {
    // Propos = {}
    // Propriedades -> chaves dos valores
    // props.nome = rick
    return (
        <div>
        <p>Seu nome é: {props.nome} </p>
        <p>E vc tem {props.idade} anos!</p>
        </div>
    );
};

export default Descricao;