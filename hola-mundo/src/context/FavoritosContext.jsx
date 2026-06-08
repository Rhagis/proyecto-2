import { createContext, useState } from "react";

export const FavoritosContext = createContext()

export const FavoritosProvider = ({ children }) => {
    
      const [favoritos, setFavoritos] = useState(() => {
        const favoritosGuardados = localStorage.getItem("favoritos")
        return favoritosGuardados ? JSON.parse(favoritosGuardados) : []
    })

    

    const agregarAFavoritos = (libro) => {
        const existe = favoritos.some((l) => l.id === libro.id)
        if (existe) {
            alert("El libro ya está en favoritos")
            return
        }
        const nuevosFavoritos =[...favoritos, libro]
        setFavoritos(nuevosFavoritos)
        localStorage.setItem("favoritos",JSON.stringify(nuevosFavoritos))
    }

    const eliminarDeFavoritos = (libro) => {
        const nuevosFavoritos = favoritos.filter((l) => l.id !== libro.id)
        setFavoritos(nuevosFavoritos)
        localStorage.setItem("favoritos",JSON.stringify(nuevosFavoritos))
    }

    return (
        <FavoritosContext.Provider value={{ favoritos, agregarAFavoritos, eliminarDeFavoritos }}>
            {children}
        </FavoritosContext.Provider>
    )
}