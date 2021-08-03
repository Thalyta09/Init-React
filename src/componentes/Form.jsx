import { React, useState } from 'react'

const Form = (props) => {
    const [user, setUser] = useState({
        nome: "",
        sexo: "",
        email: "",
        dataNascimento: "",
        naturalidade: "",
        nacionalidade: "",
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
        props.addUser(user)
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
                                name="nome"
                                className="form-control"
                                placeholder="Nome Completo"
                                onChange={handleChange} />
                        </div>
                        <div className="form-row">
                            <div class="form-group col-md-4">
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
                                    type="text"
                                    name="dataNascimento"
                                    className="form-control"
                                    placeholder="Data de Nascimento"
                                    onChange={handleChange} />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Gênero</label>
                                <br />
                                <select
                                    name="sexo"
                                    className="form-control"
                                    onChange={handleChange}
                                >
                                    <option selected value="Gênero"></option>
                                    <option>Feminino</option>
                                    <option>Masculino</option>
                                    <option>Não Declarar</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Naturalidade</label>
                            <br />
                            <input
                                type="text"
                                name="naturalidade"
                                className="form-control"
                                placeholder="Naturalidade"
                                onChange={handleChange} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Nacionalidade</label>
                            <br />
                            <input
                                type="text"
                                name="nacionalidade"
                                className="form-control"
                                placeholder="Nacionalidade"
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