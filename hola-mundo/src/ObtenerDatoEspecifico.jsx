import axios from 'axios'
import { useState, useEffect, startTransition } from 'react'

import MostrarDato from './MostrarDato'

const ObtenerDatoPorId = ({ idLibro }) => {
    const [datos, setDatos] = useState([])
    const [error, setError] = useState(true)

    useEffect(() => {
        startTransition(() => {
            setError(true)
        })
        axios
            .get(`http://localhost:3000/libros/libro/${idLibro}`)
            .then((response) => setDatos(response.data))
            .catch(() => setError(false))
    }, [idLibro])

    return (
        <>
            {error ? (
                <MostrarDato
                    key={datos.id}
                    nombre={datos.nombre}
                    autor={datos.autor}
                    tipo={datos.tipo}
                    editorial={datos.editorial}
                    tomos={datos.tomos}
                    estado={datos.estado}
                />
            ) : (
                <div className="libro-tarjeta libro-tarjeta--alerta card border-secondary h-100">
                    <div className="card-body d-flex gap-3 align-items-center">
                        <span className="lista-libros__icon lista-libros__icon--alerta flex-shrink-0" aria-hidden="true">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                                    stroke="currentColor"
                                    strokeWidth="1.75"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                        <div className="min-w-0">
                            <p className="lista-libros__etiqueta mb-1">Búsqueda</p>
                            <p className="libro-tarjeta__titulo libro-tarjeta__titulo--alerta mb-0">
                                No existe el libro con ese identificador.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ObtenerDatoPorId
