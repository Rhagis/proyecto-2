import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
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
    const navegar = useNavigate()
    const [datos, setDatos] = useState(libro)
    const { idLibro } = useParams()
    const [tomos, setTomos] = useState('')
    const [estado, setEstado] = useState('')

   

    useEffect(() => {

        axios
            .get(`http://localhost:3000/libros/libro/${idLibro}`)
            .then((response) => {
                setDatos(response.data)
                setTomos(response.data.tomos)
                setEstado(response.data.estado)
            })
    }, [idLibro])

    const editarElementos = () => {
        const cantidadTomos = {tomos: Number(tomos)}
        const estadoLibro = {estado: estado}

        if(datos.tomos !== tomos){
            axios.put(`http://localhost:3000/libros/libro/update/tomos/${idLibro}`, cantidadTomos)
        }
        if(datos.estado !== estado){
            axios.put(`http://localhost:3000/libros/libro/update/estado/${idLibro}`, estadoLibro)
        }
        navegar(`/lista/libro/${idLibro}`)
    }

    return (<>

        <form  className="card border-secondary bg-dark shadow-lg w-25 mx-auto">
            
            <div className="mb-3">
                <label className="form-label text-secundary small" htmlFor="tomos">Cantidad de tomos</label>
                <input
                    id="tomos"
                    name="tomos"
                    type="number"
                    value={tomos}
                    className="form-control"
                    placeholder="Cantidad de tomos"
                    onChange={(e) => setTomos(e.target.value)}
                    
                />
                
            </div>
            <div className="mb-3 form-check">
                <label className="form-check-label text-secundary small" htmlFor="estado">Estado del libro</label>
                <input
                    id="estado"
                    name="estado"
                    type="checkbox"
                    checked={estado === 'completada'}
                    className="form-check-input"
                    onChange={(e) => setEstado(e.target.checked ? 'completada' : 'publicandose')}
                    placeholder="Estado del libro"

                    
                />
                 
            </div>
            <div className="d-flex gap-2">
            <button className="btn btn-primary btn-lg rounded-3 w-50" type="submit" onClick={editarElementos}>Editar</button>
            <button className="btn btn-secondary btn-lg rounded-3 w-50" type="submit" onClick={() => navegar(`/lista/libro/${idLibro}`)}>Cancelar</button>
            </div>
        </form>
       
    </>)
}

export default EditarLibro