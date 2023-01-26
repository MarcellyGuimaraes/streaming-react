import React from 'react'
import './index.css'
import filmes from '../../assets/img/filmes.jpg'
import series from '../../assets/img/series.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[85vh]">
      <h2 className="text-xl font-bold">
        Veja aqui as séries e filmes mais populares de hoje!
      </h2>
      <div className="flex">
        <Link to="/series">
          <div className="m-4 pb-16 w-44 h-80">
            <img src={series} alt="series card" />
            <span className="m-4 text-center">Séries Populares</span>
          </div>
        </Link>

        <Link to="/filmes">
          <div className="m-4 pb-16 w-44 h-80">
            <img src={filmes} alt="filmes card" />
            <span className="m-4 text-center">Filmes Populares</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Home
