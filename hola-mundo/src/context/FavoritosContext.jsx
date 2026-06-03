import { createContext, useState } from "react";

export const FavoritosContext = createContext()

export const FavoritosProvider = ({ children }) => {
    const [favoritos, setFavoritos] = useState([])

    const agregarAFavoritos = (libro) => {
        setFavoritos([...favoritos, libro])
    }

    const eliminarDeFavoritos = (libro) => {
        setFavoritos(favoritos.filter((l) => l.id !== libro.id))
    }

    return (
        <FavoritosContext.Provider value={{ favoritos, agregarAFavoritos, eliminarDeFavoritos }}>
            {children}
        </FavoritosContext.Provider>
    )
}