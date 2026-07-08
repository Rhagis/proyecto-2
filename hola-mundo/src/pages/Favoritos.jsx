import { useState, useEffect, useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";


const Favoritos = () => {
    const { favoritos, eliminarDeFavoritos } = useContext(FavoritosContext)
    const [libroBuscado, setLibroBuscado] = useState("")

    const libroFiltrado = favoritos.filter((l)=>
        l.nombre.toLowerCase().includes(libroBuscado.toLowerCase())
    )
    
   
    return (
        <div>
            <h2>Favoritos</h2>
            <input 
            placeholder="Buscar Libro"
            value={libroBuscado}
            onChange={(e)=> setLibroBuscado(e.target.value)}></input>
            {libroFiltrado.length === 0 ? (
                <p>No tienes libros favoritos.</p>
            ) : (
                libroFiltrado.map((libro) => (
                    <ul>
                        <li key={libro.id}>{libro.nombre} <button onClick={() => eliminarDeFavoritos(libro)}>Eliminar</button></li>
                    </ul>
                ))
            )}
        </div>
    );
};

export default Favoritos;
