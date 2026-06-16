import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const RutaPrivada = () => {
    const {usuario} = useContext(AuthContext)

    if(usuario){
        return ( <Outlet></Outlet>)
    }else{
        return <Navigate to='/login'></Navigate>
    }
}


export default RutaPrivada