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

        <form action="">
            
            <div className="mb-3">
                <label className="form-label text-secundary small" htmlFor="tomos"></label>
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
                <label className="form-check-label text-secundary small" htmlFor="estado"></label>
                <input
                    id="estado"
                    name="estado"
                    type="checkbox"
                    checked={estado === 'completada'}
                    className="form-check-input"
                    onChange={(e) => setEstado(e.target.checked ? 'completada' : 'publicandose')}

                    
                />
                
            </div>
            <button type="submit" onClick={editarElementos}>Editar</button>
        </form>
    </>)
}

export default EditarLibro