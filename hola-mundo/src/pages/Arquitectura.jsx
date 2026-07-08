import { Link } from 'react-router-dom'

const Arquitectura = () => {
    return (
        <main className="container py-4">
            <nav className="nav flex-row justify-content-center gap-3 mb-4 border-bottom border-secondary pb-3 bg-dark shadow-lg px-3 rounded">
                <Link className="nav-link text-light" to="/docs/metodologia">Metodología</Link>
                <Link className="nav-link text-light" to="/docs/requerimientos">Requerimientos</Link>
                <Link className="nav-link text-light" to="/docs/arquitectura">Arquitectura</Link>
            </nav>

            <header className="mb-4">
                <h1 className="display-6 text-light">Arquitectura</h1>
                <p className="lead text-secondary">Decisiones arquitectónicas y estructura de datos propuesta para la aplicación.</p>
            </header>

            <section className="mb-4">
                <p className="text-secondary">A medida que el sistema crece, almacenar datos en arreglos en memoria se vuelve ineficiente. Por eso se optó por utilizar una base de datos para almacenar libros y usuarios, permitiendo un acceso más rápido y seguro.</p>
                <p className="text-secondary">A continuación se presenta un esquema básico de los campos para la entidad libro:</p>
            </section>

            <section className="card bg-dark border-secondary p-3">
                <div className="table-responsive">
                    <table className="table table-striped table-bordered mb-0">
                        <thead>
                            <tr>
                                <th>Campo</th>
                                <th>Tipo</th>
                                <th>Obligatorio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Nombre</td>
                                <td>String</td>
                                <td>Sí</td>
                            </tr>
                            <tr>
                                <td>Autor</td>
                                <td>String</td>
                                <td>Sí</td>
                            </tr>
                            <tr>
                                <td>Tipo</td>
                                <td>String</td>
                                <td>Sí</td>
                            </tr>
                            <tr>
                                <td>Editorial</td>
                                <td>String</td>
                                <td>Sí</td>
                            </tr>
                            <tr>
                                <td>Genero</td>
                                <td>String</td>
                                <td>Sí</td>
                            </tr>
                            <tr>
                                <td>Cantidad de tomos</td>
                                <td>Number</td>
                                <td>Sí</td>
                            </tr>
                            <tr>
                                <td>Páginas por tomo</td>
                                <td>Number</td>
                                <td>Sí</td>
                            </tr>
                            <tr>
                                <td>Estado en la colección</td>
                                <td>String</td>
                                <td>Sí</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-secondary mt-3 mb-0">Si bien cada campo tendrá su id interno, en este diseño inicial el par (Nombre, Autor) funciona como identificador. En futuras versiones se añadirá ISBN como identificador único.</p>
            </section>
        </main>
    )
}

export default Arquitectura