import { Link } from "react-router-dom"

const Metodologia = () => {
    return (
        <main className="container py-4">
            <nav className="nav flex-row justify-content-center gap-3 mb-4 border-bottom border-secondary pb-3 bg-dark shadow-lg px-3 rounded">
                <Link className="nav-link text-light" to="/docs/metodologia">Metodología</Link>
                <Link className="nav-link text-light" to="/docs/requerimientos">Requerimientos</Link>
                <Link className="nav-link text-light" to="/docs/arquitectura">Arquitectura</Link>
            </nav>

            <header className="mb-4">
                <h1 className="display-6 text-light">Metodología</h1>
                <p className="lead text-secondary">Resumen del enfoque de desarrollo utilizado en el proyecto.</p>
            </header>

            <section className="card bg-dark border-secondary p-3 mb-3">
                <p className="text-secondary mb-2">El desarrollo de esta aplicación se ha realizado siguiendo una metodología ágil, enfocándose en la colaboración, la flexibilidad y la entrega continua de valor.</p>
                <p className="text-secondary mb-2">Se trabajó con un enfoque evolutivo: a medida que avanzaban los sprints se añadieron nuevas funcionalidades que aportaron valor a los usuarios.</p>
                <p className="text-secondary mb-2">Para este proyecto pequeño se optó por metodologías ágiles; para equipos y proyectos mayores, se recomienda Scrum con sprints de dos semanas.</p>
                <p className="text-secondary mb-0">La práctica recomendada es mantener reuniones cortas diarias y revisiones periódicas para adaptar el backlog según prioridades.</p>
            </section>
        </main>
    )
}

export default Metodologia
