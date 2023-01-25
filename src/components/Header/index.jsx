import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <header className="flex md:flex-grow flex-col bg-pink-500 items-center justify-between px-2 py-3">
      <Link to="/">
        <h1 className="text-white font-bold">DEMO Streaming</h1>
      </Link>
      <nav>
        <ul className="flex list-none items-center justify-between">
          <li className="px-1">
            <Link className="text-white font-bold" to="/filmes">
              Filmes
            </Link>
          </li>
          <li className="px-1">
            <Link className="text-white font-bold" to="/series">
              Séries
            </Link>
          </li>
          <li className="px-1">
            <a
              target="_blank"
              className="text-white font-bold"
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
