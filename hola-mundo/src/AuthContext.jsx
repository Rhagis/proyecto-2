/* eslint-disable react-refresh/only-export-components */

import { useState, createContext } from "react";
import usuarios from '../data/usuarios.json'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [usuario, setUsuario] = useState(localStorage.getItem("usuario") || null)

    
    const login = (user, pass) => {
        console.log(usuarios)
        console.log(user,pass)
        const usuarioEncontrado = usuarios.find((u)=>
            u.user === user && u.pass === pass
        )
        console.log(usuarioEncontrado)
        if (usuarioEncontrado){
            setUsuario(user)
            localStorage.setItem("usuario", usuarioEncontrado.user)
        }
    }

    const logout = () => {
        setUsuario(null)
        localStorage.removeItem("usuario")
    }

    return(
        <AuthContext.Provider value={{usuario, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
