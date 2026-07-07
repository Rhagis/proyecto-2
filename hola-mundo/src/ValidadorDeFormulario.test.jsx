import { render, fireEvent } from '@testing-library/react'
import ValidadorTest from './ValidadorDeFormulario'
import vitest from 'vitest'
import {vi,test,expect, describe} from 'vitest'


describe('ValidadorDeFormulario', () => {
  test('ValidadorDeFormulario muestra mensaje de error cuando los campos están vacíos', () => {
    const { getByText, getByLabelText } = render(<ValidadorTest />)
    fireEvent.click(getByText('Enviar'))
    expect(getByText('Todos los campos son obligatorios')).toBeInTheDocument()
  })


    test('ValidadorDeFormulario muestra mensaje de éxito cuando los campos están completos', () => {
    const { getByText, getByLabelText } = render(<ValidadorTest />)
    fireEvent.change(getByLabelText('Nombre:'), { target: { value: 'Libro de prueba' } })
    fireEvent.change(getByLabelText('Autor:'), { target: { value: 'Autor de prueba' } })
    fireEvent.change(getByLabelText('Tipo:'), { target: { value: 'Tipo de prueba' } })
    fireEvent.change(getByLabelText('Editorial:'), { target: { value: 'Editorial de prueba' } })
    fireEvent.change(getByLabelText('Tomos:'), { target: { value: '1' } })
    fireEvent.change(getByLabelText('Páginas por libro:'), { target: { value: '100' } })
    fireEvent.change(getByLabelText('Estado:'), { target: { value: 'Nuevo' } })
    fireEvent.click(getByText('Enviar'))
    expect(getByText('Formulario enviado correctamente')).toBeInTheDocument()
  })

  test('ValidadorDeFormulario limpia los campos después de enviar el formulario', () => {
    const { getByText, getByLabelText } = render(<ValidadorTest />)
    fireEvent.change(getByLabelText('Nombre:'), { target: { value: 'Libro de prueba' } })
    fireEvent.change(getByLabelText('Autor:'), { target: { value: 'Autor de prueba' } })
    fireEvent.change(getByLabelText('Tipo:'), { target: { value: 'Tipo de prueba' } })
    fireEvent.change(getByLabelText('Editorial:'), { target: { value: 'Editorial de prueba' } })
    fireEvent.change(getByLabelText('Tomos:'), { target: { value: '1' } })
    fireEvent.change(getByLabelText('Páginas por libro:'), { target: { value: '100' } })
    fireEvent.change(getByLabelText('Estado:'), { target: { value: 'Nuevo' } })
    fireEvent.click(getByText('Enviar'))
    expect(getByLabelText('Nombre:').value).toBe('')
    expect(getByLabelText('Autor:').value).toBe('')
    expect(getByLabelText('Tipo:').value).toBe('')
    expect(getByLabelText('Editorial:').value).toBe('')
    expect(getByLabelText('Tomos:').value).toBe('')
    expect(getByLabelText('Páginas por libro:').value).toBe('')
    expect(getByLabelText('Estado:').value).toBe('')
    })

    test('ValidadorDeFormulario muestra mensaje de error cuando se envía el formulario con campos vacíos', () => {
    const { getByText, getByLabelText } = render(<ValidadorTest />)
    fireEvent.change(getByLabelText('Nombre:'), { target: { value: '' } })
    fireEvent.change(getByLabelText('Autor:'), { target: { value: '' } })
    fireEvent.change(getByLabelText('Tipo:'), { target: { value: '' } })
    fireEvent.change(getByLabelText('Editorial:'), { target: { value: '' } })
    fireEvent.change(getByLabelText('Tomos:'), { target: { value: '' } })
    fireEvent.change(getByLabelText('Páginas por libro:'), { target: { value: '' } })
    fireEvent.change(getByLabelText('Estado:'), { target: { value: '' } })
    fireEvent.click(getByText('Enviar'))
    expect(getByText('Todos los campos son obligatorios')).toBeInTheDocument()
    })
})




