import React from 'react'
import useFetch from '../../api/useFetch'
import Card from '../../components/Card'

const Filmes = () => {
  const { payload, loading } = useFetch('movie')

  return (
    <div className="container">
      {loading ? (
        <p>Loading</p>
      ) : (
        payload.map((filme) => (
          <Card
            key={filme.id}
            text={filme.title}
            src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
          />
        ))
      )}
    </div>
  )
}

export default Filmes
