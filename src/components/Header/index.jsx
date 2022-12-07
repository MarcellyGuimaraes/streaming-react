import React from 'react'
import './index.css'

const Header = () => {
  return (
    <header className="header">
      <h1>Filmes e Séries</h1>

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
