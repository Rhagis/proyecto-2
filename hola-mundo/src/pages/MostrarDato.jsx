import { useState, useContext } from "react"
import { Link, Route, useParams } from "react-router-dom"
import ObtenerDatoPorId from "../components/ObtenerDatoEspecifico"
import { FavoritosContext, FavoritosProvider } from "../context/FavoritosContext"

function valorMostrable(valor) {
    if (valor === undefined || valor === null || valor === '') return 'Sin dato'
    return String(valor)
}



function IconoLibro() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
                d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path d="M8 7h8M8 11h5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
    )
}

function Meta({ etiqueta, valor }) {
    return (
        <div className="libro-tarjeta__meta">
            <dt className="libro-tarjeta__etiqueta">{etiqueta}</dt>
            <dd className="libro-tarjeta__valor">{valorMostrable(valor)}</dd>
        </div>
    )
}





function MostrarDato({ id, nombre, autor, tipo, editorial, tomos, estado, mostrarInfo }) {
    const [masDatos, setMasDatos] = useState(false)
    const [mostrar, setMostrar] = useState(mostrarInfo)
    const { agregarAFavoritos, eliminarDeFavoritos } = useContext(FavoritosContext)
    const [esFavorito, setEsFavorito] = useState(false)

    const onClick = () => {
        if (esFavorito) {
            eliminarDeFavoritos({ id, nombre, autor, tipo, editorial, tomos, estado })
        } else {
            agregarAFavoritos({ id, nombre, autor, tipo, editorial, tomos, estado })
        }
        setEsFavorito(!esFavorito)
    }

    return (
        <>
            <article className="libro-tarjeta card border-secondary h-100">
                <div className="libro-tarjeta__cabecera card-body d-flex gap-3 align-items-start">
                    <span className="lista-libros__icon flex-shrink-0" aria-hidden="true">
                        <IconoLibro />
                    </span>
                    <div className="min-w-0">
                        <p className="lista-libros__etiqueta mb-1">Libro</p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px'}}>
                        <h3 className="libro-tarjeta__titulo h5 mb-0 text-break">
                            {nombre ? String(nombre) : 'Sin título'}

                        </h3>
                        <button onClick={onClick}>
      {esFavorito ? "⭐" : "☆"}
    </button>
                        </div>

                    </div>
                </div>

                <dl className="libro-tarjeta__cuerpo card-body border-top border-secondary border-opacity-25 mb-0 pt-3" >


                    {mostrar && (<div className="libro-tarjeta__grid" >

                        <Meta etiqueta="Autor" valor={autor} />
                        <Meta etiqueta="Tipo" valor={tipo} />
                        <Meta etiqueta="Editorial" valor={editorial} />
                        <Meta etiqueta="Tomos" valor={tomos} />
                        <Meta etiqueta="Estado" valor={estado} />
                        
                    </div>)}
                </dl>
                {!mostrar && <button><Link to={`/lista/libro/${id}`} >Mas Datos</Link></button>}
            </article>

        </>
    )
}

export default MostrarDato
