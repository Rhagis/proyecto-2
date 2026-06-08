import { useState, useEffect, useContext } from "react";
import { FavoritosContext } from "./context/FavoritosContext";


const Favoritos = () => {
    const { favoritos, eliminarDeFavoritos } = useContext(FavoritosContext)
    console.log(favoritos)
    return (
        <div>
            <h2>Favoritos</h2>
            {favoritos.length === 0 ? (
                <p>No tienes libros favoritos.</p>
            ) : (
                favoritos.map((libro) => (
                    <ul>
                        <li key={libro.id}>{libro.nombre} <button onClick={() => eliminarDeFavoritos(libro)}>Eliminar</button></li>
                    </ul>
                ))
            )}
        </div>
    );
};

export default Favoritos;
