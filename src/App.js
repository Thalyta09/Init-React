import { useState } from "react";
import Formulario from "./compentes/Formulario";
import Titulo from "./compentes/Titulo";

const App = () => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const recebeNome = (name) => {
    setFirstName(name)
  }

  const recebeSobrenome = (lastName) => {
    setLastName(lastName)
  }

  return (
    <>
      <Titulo firstName = {firstName} lastName = {lastName} />
      <Formulario recebeNome = {recebeNome} recebeSobrenome = {recebeSobrenome}/>
    </>
  );
}

export default App;