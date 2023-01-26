import React from 'react'
import useFetch from '../../api/useFetch'
import Card from '../../components/Card'

const Filmes = () => {
  const { payload, loading } = useFetch('movie')

  return (
    <div className="flex flex-col items-center md:grid md:grid-cols-4 lg:grid-cols-7">
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
