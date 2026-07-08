import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import { FavoritosProvider } from './context/FavoritosContext'
import { AuthProvider } from './context/AuthContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <FavoritosProvider>
      <AuthProvider>
      <App />
</AuthProvider>
      </FavoritosProvider>
    </BrowserRouter>
  </StrictMode>,
)
