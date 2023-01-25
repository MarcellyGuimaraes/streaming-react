import React from 'react'
import useFetch from '../../api/useFetch'
import Card from '../../components/Card'

const Series = () => {
  const { payload, loading } = useFetch('tv')

  return (
    <div className="container">
      {loading ? (
        <p>Loading</p>
      ) : (
        payload.map((serie) => (
          <Card
            key={serie.id}
            text={serie.name}
            src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
          />
        ))
      )}
    </div>
  )
}

export default Series
