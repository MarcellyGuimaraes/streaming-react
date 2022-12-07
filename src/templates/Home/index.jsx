import React from 'react'
import './index.css'
import filmes from '../../assets/img/filmes.jpg'
import series from '../../assets/img/series.jpg'

const Home = () => {
  return (
    <div className="container">
      <a href="../Series">
        <div className="card">
          <img src={series} alt="series card" />
          <p>Séries Populares</p>
        </div>
      </a>

      <a href="../Filmes">
        <div className="card">
          <img src={filmes} alt="filmes card" />
          <p>Filmes Populares</p>
        </div>
      </a>
    </div>
  )
}

export default Home
