/* eslint-disable react-refresh/only-export-components */

import { useState, createContext } from "react";
import usuarios from '../../data/usuarios.json'


export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [usuario, setUsuario] = useState(localStorage.getItem("usuario") || null)

    
    const login = (user, pass, rol) => {
        
        const usuarioEncontrado = usuarios.find((u)=>
            u.user === user && u.pass === pass
        )
                
        if (usuarioEncontrado){
            setUsuario(user)
            localStorage.setItem("usuario", usuarioEncontrado.user)
            localStorage.setItem("rol",usuarioEncontrado.rol)
        }
    }

    const logout = () => {
        setUsuario(null)
        localStorage.removeItem("usuario")
        localStorage.removeItem("rol")
    }

    return(
        <AuthContext.Provider value={{usuario, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
