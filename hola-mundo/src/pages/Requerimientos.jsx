import { Link } from "react-router-dom";

const Requerimientos = () => {
    return (
        <main className="container py-4">
            <nav className="nav flex-row justify-content-center gap-3 mb-4 border-bottom border-secondary pb-3 bg-dark shadow-lg px-3 rounded">
                <Link className="nav-link text-light" to="/docs/metodologia">Metodología</Link>
                <Link className="nav-link text-light" to="/docs/requerimientos">Requerimientos</Link>
                <Link className="nav-link text-light" to="/docs/arquitectura">Arquitectura</Link>
            </nav>

            <header className="mb-4">
                <h1 className="display-6 text-light">Requerimientos</h1>
                <p className="lead text-secondary">Resumen de las funcionalidades y criterios de aceptación.</p>
            </header>

            <section className="mb-4">
                <p className="text-secondary">Este sistema está diseñado para administrar una colección de libros, permitiendo a los usuarios agregar, editar y eliminar libros de la colección.</p>
                <p className="text-secondary">Brinda una experiencia personalizada mediante autenticación y gestión de favoritos.</p>
            </section>

            <section className="mb-4">
                <h2 className="h6 text-light mb-2">Historias de usuario</h2>
                <ul className="list-group mb-3">
                    <li className="list-group-item bg-dark text-secondary">Como usuario quiero poder registrarme y crear una cuenta para acceder a mis libros favoritos.</li>
                    <li className="list-group-item bg-dark text-secondary">Como usuario quiero poder iniciar sesión en mi cuenta para acceder a mis libros favoritos.</li>
                    <li className="list-group-item bg-dark text-secondary">Como usuario quiero poder agregar libros a mi colección.</li>
                    <li className="list-group-item bg-dark text-secondary">Como usuario quiero poder editar la información de los libros en mi colección.</li>
                    <li className="list-group-item bg-dark text-secondary">Como usuario quiero poder eliminar libros de mi colección.</li>
                    <li className="list-group-item bg-dark text-secondary">Como usuario quiero poder marcar libros como favoritos.</li>
                </ul>

                <h2 className="h6 text-light mb-2">Criterios de aceptación</h2>
                <ul className="list-group">
                    <li className="list-group-item bg-dark text-secondary">El sistema debe permitir a los usuarios registrarse y crear una cuenta.</li>
                    <li className="list-group-item bg-dark text-secondary">El sistema debe permitir iniciar sesión.</li>
                    <li className="list-group-item bg-dark text-secondary">El sistema debe permitir agregar, editar y eliminar libros.</li>
                    <li className="list-group-item bg-dark text-secondary">El sistema debe permitir marcar libros como favoritos.</li>
                </ul>
            </section>
        </main>
    )
}

export default Requerimientos
