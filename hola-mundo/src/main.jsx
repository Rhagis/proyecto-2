import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import { FavoritosProvider } from './context/FavoritosContext'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <FavoritosProvider>
      <App />
      </FavoritosProvider>
    </BrowserRouter>
  </StrictMode>,
)
