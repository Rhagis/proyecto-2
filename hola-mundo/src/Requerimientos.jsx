import { Link } from "react-router-dom";

const Requerimientos = () => {
    return (
        
        <>
              <nav className="nav flex-row justify-content-center gap-3 mb-4 border-bottom border-secondary pb-3 bg-dark shadow-lg">

                <Link to="/docs/metodologia">Metodología</Link>
                <Link to="/docs/requerimientos">Requerimientos</Link>
                <Link to="/docs/arquitectura">Arquitectura</Link>
            </nav>

        <h1>Requerimientos</h1>
        <p>Este sistema esta diseñado para administrar una coleccion de libros, permitiendo a los usuarios agregar, editar y eliminar libros de la colección.</p>
        <p>Fue pensada para las personas que desean llevar un registro organizado de sus libros, facilitando la gestión y el acceso a la información de cada libro.</p>
        <p>El sistema permite a los usuarios crear una cuenta y autenticarse para acceder a sus libros favoritos, brindando una experiencia personalizada y segura.</p>
        <h1>Historias de usuario utilizadas</h1>
        <ul>
            <li>Como usuario quiero poder registrarme y crear una cuenta para acceder a mis libros favoritos.</li>
            <li>Como usuario quiero poder iniciar sesión en mi cuenta para acceder a mis libros favoritos.</li>
            <li>Como usuario quiero poder agregar libros a mi colección para tener un registro de los libros que poseo.</li>
            <li>Como usuario quiero poder editar la información de los libros en mi colección para mantenerla actualizada.</li>
            <li>Como usuario quiero poder eliminar libros de mi colección para mantenerla organizada y relevante.</li>
            <li>Como usuario quiero poder marcar libros como favoritos para acceder rápidamente a ellos.</li>
        </ul>


        <h1>Criterios de aceptación:</h1>
        <ul>
            <li>El sistema debe permitir a los usuarios registrarse y crear una cuenta.</li>
            <li>El sistema debe permitir a los usuarios iniciar sesión en su cuenta.</li>
            <li>El sistema debe permitir a los usuarios agregar libros a su colección.</li>
            <li>El sistema debe permitir a los usuarios editar la información de los libros en su colección.</li>
            <li>El sistema debe permitir a los usuarios eliminar libros de su colección.</li>
            <li>El sistema debe permitir a los usuarios marcar libros como favoritos.</li>
        </ul>
        </>
    )
}

export default Requerimientos