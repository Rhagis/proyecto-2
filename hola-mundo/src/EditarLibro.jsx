import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"



const libro = {
    nombre: '',
    autor: '',
    tipo: '',
    editorial: '',
    genero: '',
    tomos: '',
    paginas_por_libro: '',
    estado: '',
}

const EditarLibro = () => {
    const [datos, setDatos] = useState(libro)
    const { id } = useParams()


    useEffect(() => {

        axios
            .get(`http://localhost:3000/libros/libro/${id}`)
            .then((response) => setDatos(response.data))
    }, [id])

    return (<>

        <form action="">
            <div className="mb-3">
                <label className="form-label text-secundary small" htmlFor="nombre"></label>
                <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    value={datos.nombre}
                    className="form-control"
                    placeholder="Nombre del Libro"
                    readOnly
                />
            </div>
            <div className="mb-3">
                <label className="form-label text-secundary small" htmlFor="nombre"></label>
                <input
                    id="autor"
                    name="autor"
                    type="text"
                    value={datos.autor}
                    className="form-control"
                    placeholder="Autor del Libro"
                    readOnly
                />
            </div>
            <div className="mb-3">
                <label className="form-label text-secundary small" htmlFor="nombre"></label>
                <input
                    id="tipo"
                    name="tipo"
                    type="text"
                    value={datos.tipo}
                    className="form-control"
                    placeholder="Tipo de Libro"
                    readOnly
                />
            </div>
            <div className="mb-3">
                <label className="form-label text-secundary small" htmlFor="nombre"></label>
                <input
                    id="editorial"
                    name="editorial"
                    type="text"
                    value={datos.editorial}
                    className="form-control"
                    placeholder="Editorial del Libro"
                    readOnly
                />
            </div>
            <div className="mb-3">
                <label className="form-label text-secundary small" htmlFor="nombre"></label>
                <input
                    id="genero"
                    name="genero"
                    type="text"
                    value={datos.genero}
                    className="form-control"
                    placeholder="Genero del Libro"
                    readOnly
                />
            </div>
            <div className="mb-3">
                <label className="form-label text-secundary small" htmlFor="nombre"></label>
                <input
                    id="tomos"
                    name="tomos"
                    type="number"
                    value={datos.tomos}
                    className="form-control"
                    placeholder="Cantidad de tomos"
                    readOnly
                />
            </div>
            <div className="mb-3">
                <label className="form-label text-secundary small" htmlFor="nombre"></label>
                <input
                    id="paginas"
                    name="paginas"
                    type="number"
                    value={datos.paginas_por_libro}
                    className="form-control"
                    placeholder="Cantidad de Paginas"
                    readOnly
                />
            </div>
            <div className="mb-3">
                <label className="form-label text-secundary small" htmlFor="nombre"></label>
                <input
                    id="estado"
                    name="estado"
                    type="text"
                    value={datos.estado}
                    className="form-control"
                    placeholder="Estado de la coleccion"
                    readOnly
                />
            </div>
            <button type="submit">Editar</button>
        </form>
    </>)
}

export default EditarLibro