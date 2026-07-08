import {Link} from 'react-router-dom'

const Arquitectura = () => {
    return (
        <>
            <nav className="nav flex-row justify-content-center gap-3 mb-4 border-bottom border-secondary pb-3 bg-dark shadow-lg">
                <Link to="/docs/metodologia">Metodología</Link>
                <Link to="/docs/requerimientos">Requerimientos</Link>
                <Link to="/docs/arquitectura">Arquitectura</Link>
            </nav>


            <p>
                A medida que el sistema crece, utilizar simples arreglos para almacenar los datos se hace ineficiente, ya que las iteraciones de un bucle se demorarian
                demaciado en recorrer un arreglo grande, por lo que se opto por utilizar una base de datos para almacenar los datos de los libros y usuarios, 
                permitiendo un acceso más rápido y eficiente a la información.
            </p>
            <p>Las tablas que compondran los datos estaran dados de la siguiente manera:</p>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>String</th>
                        <th>Obligatorio</th>
                    </tr>
                    <tr>
                        <th>Autor</th>
                        <th>String</th>
                        <th>Obligatorio</th>
                    </tr>
                    <tr>
                        <th>Tipo</th>
                        <th>String</th>
                        <th>Obligatorio</th>
                    </tr>
                    <tr>
                        <th>Editorial</th>
                        <th>String</th>
                        <th>Obligatorio</th>
                    </tr>
                    <tr>
                        <th>Genero</th>
                        <th>String</th>
                        <th>Obligatorio</th>
                    </tr>
                    
                    <tr>
                        <th>Cantidad de tomos</th>
                        <th>Number</th>
                        <th>Obligatorio</th>
                    </tr>
                    <tr>
                        <th>Cantidad de Paginas por tomos</th>
                        <th>Number</th>
                        <th>Obligatorio</th>
                    </tr>
                    <tr>
                        <th>Estado en la colección</th>
                        <th>String</th>
                        <th>Obligatorio</th>
                    </tr>
                </thead>
            </table>

            <p>Si bien cada campo tendra un id unico, el identificador de los libros seran los campos "Nombre" y "Autor", ya que no deberia existir dos libros con el mismo nombre y el mismo autor.</p>
            <p>En futuras actualizaciones, esto se modificará para agregar el ISBN de cada libro y utilizar ese campo como identificador único.</p>
            </>
    )
}

export default Arquitectura