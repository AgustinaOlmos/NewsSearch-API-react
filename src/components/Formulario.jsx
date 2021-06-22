import React from 'react'
import PropTypes from 'prop-types'
import styles from './Formulario.module.css'
import useSelect from '../hooks/useSelect'

const Formulario = ({ guardarCategoria }) => {

    const OPCIONES = [
        { value: 'general', label: 'General' },
        { value: 'business', label: 'Negocios' },
        { value: 'science', label: 'Ciencia' },
        { value: 'technology', label: 'Tecnologia' },
        { value: 'health', label: 'Salud' },
        { value: 'sport', label: 'Deportes' },
        { value: 'entertainment', label: 'Entretenimiento' }
    ]

    // utilizar custom hook
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES)

    // submit al form, pasar categoria a app.js
    const buscarNoticias = e => {
        e.preventDefault()

        guardarCategoria(categoria)
    }

    return (
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>

                    <SelectNoticias />

                    <div className="input-filed col s12">
                        <input
                            type="submit"
                            className={`${styles.btn_block} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}
export default Formulario