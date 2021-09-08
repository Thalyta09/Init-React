import { React, useState, useEffect } from 'react'

const Listing = (props) => {

    const [list, setList] = useState([])

    useEffect(() => {
        fetch("/api/user")
            .then(response => response.json())
            .then(data => setList(data))
    }, [])

    const deleteUser = (id) => {
        props.removeUser(id)
    }

    return (
        <div className="teste">
            <div className="table-responsive">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-8"><h2>Listar Usuários</h2></div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>Data de Nascimento</th>
                                <th>Gênero</th>
                                <th>Cidade</th>
                                <th>Estado</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((user, index) => {
                                return (
                                    <tr key={index} >
                                        <td >{user.id}</td>
                                        <td >{user.name}</td>
                                        <td >{user.cpf}</td>
                                        <td >{user.birth_date}</td>
                                        <td >{user.gender}</td>
                                        <td >{user.city}</td>
                                        <td >{user.state}</td>
                                        <td >{user.email}</td>
                                        <td>
                                            {/* <a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons">&#xE417;</i></a>
                                                <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a> */}
                                            <a
                                                href="#"
                                                className="delete"
                                                title="Delete" data-toggle="tooltip"
                                                onClick={() => deleteUser(user.id)}
                                            >
                                                <i className="material-icons">&#xE872;</i>
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Listing