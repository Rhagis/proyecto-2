import { useState } from 'react'
import './App.css'
import ObtenerDato from './ObtenerDatos'
import ObtenerDatoPorId from './ObtenerDatoEspecifico'
import AñadirLibro from './cargarArchivo'
import EditarLibro from './EditarLibro'
import { Routes, Route, Link, BrowserRouter, useParams } from 'react-router-dom'

function App() {

  const [mostrarBuscador, setMostrarBuscador] = useState(false)


  return (
    <>
      <nav className="nav flex-row justify-content-center mb-4 border-bottom border-secondary pb-3 bg-dark shadow-lg">
        <Link className="nav-link text-light" to="/lista">Lista de libros</Link>
        <br />
        <Link className="nav-link text-light" to='/libro/añadir'>Añadir Libro</Link>
      </nav>
      <Routes>
        <Route path='/'></Route>
        <Route path='/lista' element={<ObtenerDato></ObtenerDato>}></Route>
        <Route path='/lista/libro/:idLibro' element={<ObtenerDatoPorId ></ObtenerDatoPorId>}></Route>
        <Route path='/libro/añadir' element={<AñadirLibro></AñadirLibro>}></Route>
        <Route path='/lista/libro/editar/:idLibro' element={<EditarLibro></EditarLibro>}></Route>
      </Routes>
      

    </>
  )
}

export default App
