import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <header className="flex flex-col items-center justify-between bg-slate-900 px-12 py-5 md:flex-row">
      <Link to="/">
        <h1 className="text-xl font-bold text-white">DEMO Streaming</h1>
      </Link>
      <nav>
        <ul className="flex list-none items-center justify-between">
          <li className="px-1">
            <Link className="text-white font-light" to="/filmes">
              Filmes
            </Link>
          </li>
          <li className="px-1">
            <Link className="text-white font-light" to="/series">
              Séries
            </Link>
          </li>
          <li className="px-1">
            <a
              target="_blank"
              className="text-white font-light"
              href="https://www.linkedin.com/in/marcelly-souza-guimar%C3%A3es-728948246/"
              rel="noreferrer"
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
