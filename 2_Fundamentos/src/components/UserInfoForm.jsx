import {useState} from 'react';

const UserInfoForm = () => {
    const [ name , setName ] = useState("");
    const [ email , setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        // acessar API via fetch ou axios

        console.log(name, email);
    };

    

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome" /><br/>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Digite seu E-mail" />
        {/* <br/>{name} {email} */}
        <br/>
        <button type="submit">
            Enviar
        </button>
    </form>
  );
};

export default UserInfoForm;
