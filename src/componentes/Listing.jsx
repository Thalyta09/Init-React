import { React } from 'react'

const Listing = ({ users }) => {

    return (
        <>
            <div className="container-xl">
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-8"><h2>User Details</h2></div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Cell</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, index) => {
                                    return (
                                        <tr key = {index} >
                                            <td >{user.name}</td>
                                            <td >{user.email}</td>
                                            <td >{user.cell}</td>
                                            <td>
                                                <a href="#" className="view" title="View" data-toggle="tooltip"><i className="material-icons">&#xE417;</i></a>
                                                <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a>
                                                <a href="#" className="delete" title="Delete" data-toggle="tooltip"><i className="material-icons">&#xE872;</i></a>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Listing