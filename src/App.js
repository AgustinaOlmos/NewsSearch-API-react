import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  // definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('')
  const [noticias, guardarNoticias] = useState([])

  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=7c37b551f31d43638d4fc4e638d5479d`
      const noticias = await axios.get(url)

      guardarNoticias(noticias.data.articles)
    }
    consultarApi()
  }, [categoria])


  return (
    <Fragment>
      <Header
        titulo="Buscador de Noticias"
      />

      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />

        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
