import { useState } from 'react'
import './App.css'
import ObtenerDato from './ObtenerDatos'
import ObtenerDatoPorId from './ObtenerDatoEspecifico'
import AñadirLibro from './cargarArchivo'

function App() {
  const [idLibro, setIdLibro] = useState(0)
  const [mostrarBuscador, setMostrarBuscador] = useState(false)

  const cambiarEstado = () => {
    if (!mostrarBuscador) {
      setMostrarBuscador(true)
    } else {
      setMostrarBuscador(false)
    }
  }

  return (
    <div className="container py-4 py-md-5">
      <h1 className="text-center h2 fw-semibold text-light mb-4">Biblioteca Personal</h1>

      <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-4">
        <span className="btn-spin-glow rounded-pill">
          <button type="button" className="btn btn-outline-primary btn-lg px-4 rounded-pill" onClick={cambiarEstado}>
            Buscar Libro
          </button>
        </span>
        <span className="btn-spin-glow rounded-pill">
          <button type="button" className="btn btn-outline-primary btn-lg px-4 rounded-pill" onClick={cambiarEstado}>
            Cargar Nuevo Libro
          </button>
        </span>
      </div>

      {mostrarBuscador && (
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 col-xl-7">
            <div className="card border-secondary bg-dark shadow-lg">
              <div className="card-body p-4">
                <h2 className="h4 card-title text-light mb-3 pb-2 border-bottom border-secondary">Libros</h2>
                <label htmlFor="inputLibro" className="form-label text-secondary small">
                  Buscar libro
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg mb-3"
                  placeholder="Buscar libro"
                  id="inputLibro"
                  onChange={(e) => setIdLibro(e.target.value)}
                />
                <div className="lista-libros lista-libros--tarjetas lista-libros--tarjetas-sola">
                  <ObtenerDatoPorId idLibro={idLibro} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!mostrarBuscador && (
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 col-xl-7">
            <AñadirLibro funcion={cambiarEstado} index={setIdLibro} />
          </div>
        </div>
      )}
      <div className="row justify-content-center mt-5">
        <div className="col-12 col-lg-10">
          <div className="card border-secondary bg-dark shadow-lg">
            <div className="card-body p-4">
              <h2 className="h4 card-title text-light mb-3 pb-2 border-bottom border-secondary d-flex align-items-center gap-2">
                <span className="lista-libros__titulo-badge" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                    />
                    <path
                      d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                Catálogo de libros
              </h2>
              <ObtenerDato />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
