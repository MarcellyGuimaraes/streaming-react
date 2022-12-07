import React from 'react'
import useFetch from '../../api/useFetch'
import Card from '../../components/Card'

const baseUrl =
  'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'

const Filmes = () => {
  const { payload, loading } = useFetch(baseUrl, 'movie')

  return (
    <div className="container">
      {loading ? (
        <p>Loading</p>
      ) : (
        payload.map((filme) => (
          <div key={filme.title}>
            <Card text={filme.title} src={filme.images['Poster Art'].url} />
          </div>
        ))
      )}
    </div>
  )
}

export default Filmes
