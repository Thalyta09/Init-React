import {React, useState} from 'react'

const Formulario = (props) => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();

    const enviaInf = () => {
        props.recebeNome(firstName)
        props.recebeSobrenome(lastName)
    }

    return (
        <div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">First Name</label>
            <br />
            <input type="firstName" name="firstName" class="form-control" placeholder="Enter First Name" onChange={e => setFirstName(e.target.value)} />
        </div>
        <div class="mb-3"> 
           <label for="exampleFormControlInput1" class="form-label">Last Name</label>
           <br />
           <input type="lastName" name="lastName" class="form-control" placeholder="Enter Last Name" onChange={e => setLastName(e.target.value)} />
        </div>
        <button onClick={enviaInf}>Cadastrar</button>
        </div>
    )
}

export default Formulario
