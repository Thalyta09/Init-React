import { React, useState } from 'react'

const Form = (props) => {

    const [count, setCount] = useState(1)

    const [user, setUser] = useState({
        id: 0,
        name: "",
        gender: "",
        email: "",
        birth_date: "",
        city: "",
        state: "",
        cpf: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target
        // console.log(name)
        // console.log(value)
        setUser((valorAntigo) => {
            return {
                ...valorAntigo,
                [name]: value
            }
        })
    }

    const limpaCampos = () => {
        document.getElementById("form").reset()
    }

    const envInf = () => {
        setCount(count + 1)
        props.addUser(user, count)
        limpaCampos()
    }

    return (
        <div className="teste">
            <div className="table-responsive">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-8"><h2>Registrar Usuário</h2></div>
                        </div>
                    </div>
                    <form id="form">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Nome Completo</label>
                            <br />
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Nome Completo"
                                onChange={handleChange} />
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label htmlFor="exampleFormControlInput1" className="form-label">CPF</label>
                                <br />
                                <input
                                    type="text"
                                    name="cpf"
                                    className="form-control"
                                    placeholder="CPF"
                                    onChange={handleChange} />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Data de Nascimento</label>
                                <br />
                                <input
                                    type="date"
                                    name="birth_date"
                                    className="form-control"
                                    placeholder="Data de Nascimento"
                                    onChange={handleChange} />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Gênero</label>
                                <br />
                                <select
                                    name="gender"
                                    className="form-control"
                                    onChange={handleChange}
                                >
                                    <option>Escolha uma opção:</option>
                                    <option>Feminino</option>
                                    <option>Masculino</option>
                                    <option>Não Declarar</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Cidade</label>
                                <br />
                                <input
                                    type="text"
                                    name="city"
                                    className="form-control"
                                    placeholder="Cidade"
                                    onChange={handleChange} />
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Estado</label>
                                <br />
                                <input
                                    type="text"
                                    name="state"
                                    className="form-control"
                                    placeholder="Estado"
                                    onChange={handleChange} />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
                            <br />
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="E-mail"
                                onChange={handleChange} />
                        </div>
                    </form>
                    <button className="btn btn-primary" onClick={envInf}>Cadastrar</button>
                </div>
            </div>
        </div>
    )
}

export default Form