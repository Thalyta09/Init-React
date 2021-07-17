import {React} from 'react'

const Titulo = (props) => {

    return (
        <div>
            <h1>Welcome to your React App {props.firstName} {props.lastName}!</h1>
        </div>
    )
}

export default Titulo
