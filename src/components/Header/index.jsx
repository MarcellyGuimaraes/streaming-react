import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="title">Filmes e Séries</h1>
      </Link>
      <nav>
        <ul className="listNav">
          <li className="item">Filmes</li>
          <li className="item">Séries</li>
          <li className="item">Contato</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
