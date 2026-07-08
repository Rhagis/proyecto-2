import { useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Metodologia from "./Metodologia";


const Documentacion = () => {
    return (
        <>
            <nav className="nav flex-row justify-content-center gap-3 mb-4 border-bottom border-secondary pb-3 bg-dark shadow-lg">

                <Link to="/docs/metodologia">Metodología</Link>
                <Link to="/docs/requerimientos">Requerimientos</Link>
                <Link to="/docs/arquitectura">Arquitectura</Link>
            </nav>

            

            <h1>Documentacion</h1>
            <p>Esta es la documentacion de la aplicacion</p>


        </>
    )
}

export default Documentacion