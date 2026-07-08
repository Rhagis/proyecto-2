
import React, { useState } from 'react';

const ValidadorDeFormulario = () => {
    const [nombre, setNombre] = useState('');
    const [autor, setAutor] = useState('');
    const [tipo, setTipo] = useState('');
    const [editorial, setEditorial] = useState('');
    const [tomos, setTomos] = useState('');
    const [paginas_por_libro, setPaginasPorLibro] = useState('');
    const [estado, setEstado] = useState('');
    const [error, setError] = useState('');

    const validarFormulario = (e) => {
        e.preventDefault();
        if (nombre === '' || autor === '' || tipo === '' || editorial === '' || tomos === '' || paginas_por_libro === '' || estado === '') {
            setError('Todos los campos son obligatorios');
        } else {
            setError('');
            setNombre('');
            setAutor('');
            setTipo('');
            setEditorial('');
            setTomos('');
            setPaginasPorLibro('');
            setEstado('');
            setError('Formulario enviado correctamente');
        }
    };

    return (
        <form onSubmit={validarFormulario}>
            <div>
                <label htmlFor="nombre">Nombre:</label>
                <input
                    type="text"
                    id="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="autor">Autor:</label>
                <input
                    type="text"
                    id="autor"
                    value={autor}
                    onChange={(e) => setAutor(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="tipo">Tipo:</label>
                <input
                    type="text"
                    id="tipo"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="editorial">Editorial:</label>
                <input
                    type="text"
                    id="editorial"
                    value={editorial}
                    onChange={(e) => setEditorial(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="tomos">Tomos:</label>
                <input
                    type="number"
                    id="tomos"
                    value={tomos}
                    onChange={(e) => setTomos(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="paginas_por_libro">Páginas por libro:</label>
                <input
                    type="number"
                    id="paginas_por_libro"
                    value={paginas_por_libro}
                    onChange={(e) => setPaginasPorLibro(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="estado">Estado:</label>
                <input
                    type="text"
                    id="estado"
                    value={estado}
                    onChange={(e) => setEstado(e.target.value)}
                />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Enviar</button>
        </form>
    );
}

export default ValidadorDeFormulario;
