import React from 'react'
import './index.css'
import filmes from '../../assets/img/filmes.jpg'
import series from '../../assets/img/series.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex">
      <h2>Veja aqui as séries e filmes mais populares de hoje!</h2>
      <div className="flex">
        <Link to="/series">
          <div className="m-1">
            <img src={series} alt="series card" />
            <span>Séries Populares</span>
          </div>
        </Link>

        <Link to="/filmes">
          <div className="m-1">
            <img src={filmes} alt="filmes card" />
            <span>Filmes Populares</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home
