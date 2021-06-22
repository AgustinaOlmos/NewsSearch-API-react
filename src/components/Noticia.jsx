import React from 'react'
import PropTypes from 'prop-types'
import notfound from '../assets/img/notfound.png'

const Noticia = ({ noticia }) => {
    // extraer los datos
    const { urlToImage, url, title, description, source } = noticia

    const image = (urlToImage) ?
        <div className="card-image">
            <img src={urlToImage} alt={title} />
            <span className="card-title">{source.name}</span>
        </div>
        : <div className="card-image">
            <img src={notfound} alt="not-found" />
            <span className="card-title">{source.name}</span>
        </div>

    return (
        <div className="col s12 m6 l4">
            <div className="card">
                {image}

                <div className="card-content">
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>

                <div className="card-action">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    >Ver Noticia Completa</a>
                </div>
            </div>
        </div>
    )
}


Noticia.propTypes = {
    noticia: PropTypes.object.isRequired
}
export default Noticia
