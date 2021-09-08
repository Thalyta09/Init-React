import { useState } from "react";
import Form from "./componentes/Form";
import Listing from "./componentes/Listing";

const App = () => {

  const [users, setUsers] = useState([])

  const addUser = (user, count) => {
    setUsers((valorAntigo) => {
      return [
        ...valorAntigo,
        {
          id: count,
          name: user.name,
          gender: user.gender,
          email: user.email,
          birth_date: user.birth_date,
          city: user.city,
          state: user.state,
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