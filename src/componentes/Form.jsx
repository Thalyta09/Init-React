import { React, useState } from 'react'

const Form = (props) => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        cell: ""
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
        <div className="container-xl">
            <div className="table-responsive">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-8"><h2>Register User</h2></div>
                        </div>
                    </div>
                    <form id="form">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Complete Name</label>
                            <br />
                            <input
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Enter Complete Name"
                                // value={name}
                                onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                            <br />
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="Enter Email"
                                // value={item.email}
                                onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Cellphone</label>
                            <br />
                            <input
                                type="text"
                                name="cell"
                                className="form-control"
                                placeholder="Enter Cellphone"
                                // value={item.cell}
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