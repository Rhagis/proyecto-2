import { useState, useContext } from 'react'
import './App.css'
import ObtenerDato from './components/ObtenerDatos'
import ObtenerDatoPorId from './components/ObtenerDatoEspecifico'
import AñadirLibro from './components/cargarArchivo'
import EditarLibro from './components/EditarLibro'
import { Routes, Route, Link, BrowserRouter, useParams } from 'react-router-dom'
import { FavoritosProvider, FavoritosContext } from './context/FavoritosContext'
import RutaPrivada from './components/RutaPrivada'
import  Login  from './components/login'
import  {AuthProvider, AuthContext } from './context/AuthContext'
import { useNavigate } from 'react-router-dom'
import validarFormulario from './components/ValidadorDeFormulario'
import Documentacion from './pages//Documentacion'
import Metodologia from './pages/Metodologia'
import Requerimientos from './pages/Requerimientos'
import Arquitectura from './pages/Arquitectura'
import Favoritos from './pages/Favoritos'


function App() {

  const [mostrarBuscador, setMostrarBuscador] = useState(false)
  const { favoritos } = useContext(FavoritosContext)
  const { logout } = useContext(AuthContext)


  return (
    
      <>
      
        <nav className="nav flex-row justify-content-center gap-3 mb-4 border-bottom border-secondary pb-3 bg-dark shadow-lg">
          
          <Link className="nav-link text-light" to='/'>Añadir Libro</Link>
          <Link className="nav-link text-light" to="/lista">Lista de libros</Link>
          <Link className="nav-link text-light" to='/favoritos'>Favoritos</Link>
          <Link className='nav-link text-light' to='/docs'>Documentacion</Link>
          <span className="badge bg-secondary">{favoritos.length}</span>
          <button onClick={logout}>Cerrar Sesion</button>
          
          
      </nav>
      
      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route element={<RutaPrivada></RutaPrivada>}>
        <Route path='/' element={<AñadirLibro></AñadirLibro>}></Route>
        <Route path='/lista' element={<ObtenerDato></ObtenerDato>}></Route>
        <Route path='/lista/libro/:idLibro' element={<ObtenerDatoPorId ></ObtenerDatoPorId>}></Route>
        <Route path='/lista/libro/editar/:idLibro' element={<EditarLibro></EditarLibro>}></Route>
        <Route path='/favoritos' element={<Favoritos></Favoritos>}></Route>
        <Route path='/docs' element={<Documentacion></Documentacion>}></Route>
        <Route path="/docs/metodologia" element={<Metodologia></Metodologia>}></Route>
        <Route path="/docs/requerimientos" element={<Requerimientos></Requerimientos>}></Route>
        <Route path="/docs/arquitectura" element={<Arquitectura></Arquitectura>}></Route>
        </Route>
      </Routes>

      
      
      
      
    </>
    
  )
}

export default App
