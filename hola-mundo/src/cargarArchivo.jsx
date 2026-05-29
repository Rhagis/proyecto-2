import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const libroVacio = {
    nombre: '',
    autor: '',
    tipo: '',
    editorial: '',
    genero: '',
    tomos: '',
    paginas_por_libro: '',
    estado: '',
}

const AñadirLibro = () => {
    const navegar = useNavigate()
    const [nuevoLibro, setNuevoLibro] = useState(libroVacio)
    const [enviando, setEnviando] = useState(false)
    const [mensaje, setMensaje] = useState(null)

    const actualizarCampo = (campo, valor) => {
        setNuevoLibro((prev) => ({ ...prev, [campo]: valor }))
    }

    const enviarNuevoLibro = (e) => {
        e.preventDefault()
        setMensaje(null)
        const payload = {
            nombre: nuevoLibro.nombre,
            autor: nuevoLibro.autor,
            tipo: nuevoLibro.tipo,
            editorial: nuevoLibro.editorial,
            genero: nuevoLibro.genero,
            tomos: Number(nuevoLibro.tomos),
            paginas_por_libro: Number(nuevoLibro.paginas_por_libro),
            estado: nuevoLibro.estado,
        }

        setEnviando(true)
        axios
            .post('http://localhost:3000/libros/libro/add', payload)
            .then(() => {
                const respuesta = axios.get('http://localhost:3000/libros/libro', {
                    params: {
                        nombre: nuevoLibro.nombre,
                    }
                }).

                    setNuevoLibro(libroVacio)
                setMensaje({ tipo: 'ok', texto: 'Libro guardado correctamente.' })


            })
            .catch((error) => {
                console.error(error)
                setMensaje({
                    tipo: 'error',
                    texto: error.response?.data?.message ?? 'No se pudo guardar el libro.',
                })
            })
            .finally(() => setEnviando(false))
        navegar('/lista')
    }

    return (
        <form
            className="card border-secondary bg-dark shadow-lg"
            onSubmit={enviarNuevoLibro}
        >
            <div className="card-body p-4">
                <h2 className="h4 card-title text-light mb-3 pb-2 border-bottom border-secondary">
                    Cargar nuevo libro
                </h2>

                {mensaje && (
                    <div
                        role="alert"
                        className={`alert ${mensaje.tipo === 'error' ? 'alert-danger' : 'alert-success'} py-2 mb-3`}
                    >
                        {mensaje.texto}
                    </div>
                )}

                <div className="mb-3">
                    <label className="form-label text-secondary small" htmlFor="nombre">
                        Nombre
                    </label>
                    <input
                        id="nombre"
                        name="nombre"
                        type="text"
                        className="form-control"
                        value={nuevoLibro.nombre}
                        onChange={(e) => actualizarCampo('nombre', e.target.value)}
                        placeholder="Nombre del libro"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label text-secondary small" htmlFor="autor">
                        Autor
                    </label>
                    <input
                        id="autor"
                        name="autor"
                        type="text"
                        className="form-control"
                        value={nuevoLibro.autor}
                        onChange={(e) => actualizarCampo('autor', e.target.value)}
                        placeholder="Autor del libro"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label text-secondary small" htmlFor="tipo">
                        Tipo
                    </label>
                    <input
                        id="tipo"
                        name="tipo"
                        type="text"
                        className="form-control"
                        value={nuevoLibro.tipo}
                        onChange={(e) => actualizarCampo('tipo', e.target.value)}
                        placeholder="Tipo del libro"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label text-secondary small" htmlFor="editorial">
                        Editorial
                    </label>
                    <input
                        id="editorial"
                        name="editorial"
                        type="text"
                        className="form-control"
                        value={nuevoLibro.editorial}
                        onChange={(e) => actualizarCampo('editorial', e.target.value)}
                        placeholder="Editorial del libro"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label text-secondary small" htmlFor="genero">
                        Género
                    </label>
                    <input
                        id="genero"
                        name="genero"
                        type="text"
                        className="form-control"
                        value={nuevoLibro.genero}
                        onChange={(e) => actualizarCampo('genero', e.target.value)}
                        placeholder="Genero del libro"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label text-secondary small" htmlFor="tomos">
                        Tomos
                    </label>
                    <input
                        id="tomos"
                        name="tomos"
                        type="number"
                        min={0}
                        className="form-control"
                        value={nuevoLibro.tomos}
                        onChange={(e) => actualizarCampo('tomos', e.target.value)}
                        placeholder="Cantidad de tomos"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label text-secondary small" htmlFor="paginas_por_libro">
                        Páginas por libro
                    </label>
                    <input
                        id="paginas_por_libro"
                        name="paginas_por_libro"
                        type="number"
                        min={0}
                        className="form-control"
                        value={nuevoLibro.paginas_por_libro}
                        onChange={(e) => actualizarCampo('paginas_por_libro', e.target.value)}
                        placeholder="Paginas por libro"
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label text-secondary small" htmlFor="estado">
                        Estado
                    </label>
                    <input
                        id="estado"
                        name="estado"
                        type="checkbox"
                        className="form-check-input"
                        checked={nuevoLibro.estado === 'completada'}
                        onChange={(e) => actualizarCampo('estado', e.target.checked ? 'completada' : 'publicandose')}
                        placeholder="Estado del libro"
                        required
                    />
                </div>

                <span className="btn-spin-glow btn-spin-glow--block rounded-3 mt-2">
                    <button
                        type="submit"
                        className="btn btn-primary btn-lg w-100 rounded-3"
                        disabled={enviando}
                    >
                        {enviando ? 'Guardando…' : 'Guardar libro'}
                    </button>
                </span>
            </div>
        </form>
    )
}

export default AñadirLibro
