import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "./AuthContext"


const Login = () => {
    const {login} = useContext(AuthContext)
    const [usuario,setUsuario] = useState("")
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    login(usuario,password)
    const userValido = localStorage.getItem("usuario") || null
    console.log(userValido)
    const verificado = () => {
        
        if(userValido){
            navigate('/lista')
        }
    }

    return (
        <>
            <form action="">
                <div>
                <label htmlFor="usuario">Usuario</label>
                <input type="text" placeholder="introduce tu usuario" onChange={(e)=> setUsuario(e.target.value)}></input>
                </div>
                <div>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="introduce tu password" onChange={(e)=> setPassword(e.target.value)}></input>
                </div>
                <button type="submit" onClick={verificado}>Logear</button>
            </form>

        </>
    )
}

export default Login