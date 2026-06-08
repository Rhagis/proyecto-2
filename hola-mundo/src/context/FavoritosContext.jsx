import { createContext, useState } from "react";

export const FavoritosContext = createContext()

export const FavoritosProvider = ({ children }) => {
    const [favoritos, setFavoritos] = useState([])
    console.log(favoritos)

    const agregarAFavoritos = (libro) => {
        const existe = favoritos.some((l) => l.id === libro.id)
        if (existe) {
            alert("El libro ya está en favoritos")
            return
        }
        setFavoritos([...favoritos, libro])
        console.log(favoritos)
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