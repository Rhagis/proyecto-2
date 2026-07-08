import { Link } from "react-router-dom";

const Documentacion = () => {
    return (
        <main className="container py-4">
            <nav className="nav flex-row justify-content-center gap-3 mb-4 border-bottom border-secondary pb-3 bg-dark shadow-lg px-3 rounded">
                <Link className="nav-link text-light" to="/docs/metodologia">Metodología</Link>
                <Link className="nav-link text-light" to="/docs/requerimientos">Requerimientos</Link>
                <Link className="nav-link text-light" to="/docs/arquitectura">Arquitectura</Link>
            </nav>

            <header className="mb-4">
                <h1 className="display-6 text-light">Documentación</h1>
                <p className="lead text-secondary mt-2">Descripción general y guías sobre el uso y la arquitectura de la aplicación.</p>
            </header>

            <section className="card bg-dark border-secondary p-3">
                <h2 className="h5 text-light mb-2">Introducción</h2>
                <p className="text-secondary mb-2">Esta documentación contiene la información principal para entender la aplicación: metodología de desarrollo, requerimientos funcionales y la arquitectura propuesta.</p>
                <p className="text-secondary mb-0">Navega las secciones usando los enlaces de arriba para ver detalles más específicos.</p>
            </section>
        </main>
    )
}

export default Documentacion
/*import { useState } from "react";
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

export default Documentacion*/