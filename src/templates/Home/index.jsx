import React from 'react'
import './index.css'
import filmes from '../../assets/img/filmes.jpg'
import series from '../../assets/img/series.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container">
      <Link to="/series">
        <div className="card">
          <img src={series} alt="series card" />
          <p>Séries Populares</p>
        </div>
      </Link>

      <Link to="/filmes">
        <div className="card">
          <img src={filmes} alt="filmes card" />
          <p>Filmes Populares</p>
        </div>
      </Link>
    </div>
  )
}

export default Home
