import { useState } from "react";
import Form from "./componentes/Form";
import Listing from "./componentes/Listing";

const App = () => {

  const [users, setUsers] = useState([])

  const addUser = (user) => {
    setUsers((valorAntigo) => {
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

  const removeUser = (id) => {
    const list = users.filter(item => item.id !== id)
    setUsers(list)
  }

  return (
    <>
      <Form addUser={addUser} />
      <Listing users={users} removeUser={removeUser} />
    </>
  );
}

export default App;