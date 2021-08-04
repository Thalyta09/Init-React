import { useState } from "react";
import Form from "./componentes/Form";
import Listing from "./componentes/Listing";

const App = () => {

  const [users, setUsers] = useState([])

  const addUser = (user) => {
    setUsers(valorAntigo => {
      return [
        ...valorAntigo,
        {
          id: valorAntigo.length + 1,
          nome: user.nome,
          sexo: user.sexo,
          email: user.email,
          dataNascimento: user.dataNascimento,
          naturalidade: user.naturalidade,
          nacionalidade: user.nacionalidade,
          cpf: user.cpf
        }
      ]
    })
  }

  return (
    <>
      <Form addUser={addUser} />
      <Listing users={users} />
    </>
  );
}

export default App;