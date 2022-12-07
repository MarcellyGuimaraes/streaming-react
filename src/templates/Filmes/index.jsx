import React from 'react'
import useFetch from '../../api/useFetch'

const baseUrl =
  'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'

const Filmes = () => {
  const { payload, loading } = useFetch(baseUrl, 'movie')

  return (
    <div>
      {loading ? (
        <p>Loading</p>
      ) : (
        payload.map((filme) => <div>{filme.title}</div>)
      )}
    </div>
  )
}

export default Filmes
