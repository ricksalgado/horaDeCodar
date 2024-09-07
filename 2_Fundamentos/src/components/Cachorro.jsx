const Cachorro = ({nome,raca}) => {
    // props.nome => nome
    // destructuring => {}, [],
    return (
        <div>
            Esse Cachorro é o: {nome} <br/>
            Da raça {raca}
        </div>
    );
};

export default Cachorro
