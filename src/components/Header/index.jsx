import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="title">DEMO Streaming</h1>
      </Link>
      <nav>
        <ul className="listNav">
          <li className="item">
            <Link className="title" to="/filmes">
              Filmes
            </Link>
          </li>
          <li className="item">
            <Link className="title" to="/series">
              Séries
            </Link>
          </li>
          <li className="item">
            <a
              target="_blank"
              className="title"
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
