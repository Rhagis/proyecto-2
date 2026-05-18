import axios from 'axios'
import { useState, useEffect } from 'react'
import MostrarDato from './MostrarDato.jsx'

const ObtenerDatos = () => {
    const [datos, setDatos] = useState([])
    useEffect(() => {
        axios
            .get('http://localhost:3000/libros/lista')
            .then((response) => setDatos(response.data))
            .catch((error) => {
                console.log(error)
            })
    }, [])

    if (datos.length === 0) {
        return (
            <div className="lista-libros__vacio text-secondary text-center py-4 px-3 rounded border border-secondary border-dashed">
                <p className="mb-1 fw-medium text-light-emphasis">Aún no hay libros</p>
                <p className="mb-0 small">Cargá uno nuevo o comprobá la conexión con el servidor.</p>
            </div>
        )
    }

    return (
        <div className="lista-libros lista-libros--tarjetas">
            {datos.map((dato) => (
                <MostrarDato
                    key={dato.id}
                    nombre={dato.nombre}
                    autor={dato.autor}
                    tipo={dato.tipo}
                    editorial={dato.editorial}
                    tomos={dato.tomos}
                    estado={dato.estado}
                />
            ))}
        </div>
    )
}

export default ObtenerDatos
