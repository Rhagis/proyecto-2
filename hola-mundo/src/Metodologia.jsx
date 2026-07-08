import { Link } from "react-router-dom"

const Metodologia = () => {
    return (
        <>
                    <nav className="nav flex-row justify-content-center gap-3 mb-4 border-bottom border-secondary pb-3 bg-dark shadow-lg">

                <Link to="/docs/metodologia">Metodología</Link>
                <Link to="/docs/requerimientos">Requerimientos</Link>
                <Link to="/docs/arquitectura">Arquitectura</Link>
            </nav>

        <p>El desarrollo de esta aplicación se ha realizado siguiendo una metodología ágil, enfocándose en la colaboración, la flexibilidad y la entrega continua de valor.</p>
        <p>Fue trabajada bajo un enfoque evolutivo donde a medida que pasaban los sprints se iban añadiendo nuevas funcionalidades que brindaban más valor a los usuarios.</p>
        <p>Al ser un sistema pequeño se opto por metodologias agiles ya que de usar otros enfoques como el cascada no seria muy rentable.</p>
        <p>Por ejemplo al principio solo se podia consultar por un libro en especifico o una lista, luego pudieron añadirse nuevos libros, editarlos o eliminarlos, hasta que se añadio una barra de favoritos y login de usuarios.</p>
        <p>En caso de querer expandir el sistema yo utilizaria la metodologia de Scrum implementando sprints cortos de 2 semanas con reuniones diarias con el equipo de desarrollo para ir añadiendo las nuevas funcionalidades solicitadas.</p>
        
        </>
    )
}

export default Metodologia