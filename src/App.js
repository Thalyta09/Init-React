import { useState } from "react";
import Form from "./componentes/Form";
import Listing from "./componentes/Listing";

const App = () => {

  const [users, setUsers] = useState([])

  const addUser = (user) => {
    setUsers(valorAntigo => {
      return [
        ...valorAntigo,
        user]
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