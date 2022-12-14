import React from 'react'
import useFetch from '../../api/useFetch'
import Card from '../../components/Card'

const baseUrl =
  'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'

const Series = () => {
  const { payload, loading } = useFetch(baseUrl, 'series')

  return (
    <div className="container">
      {loading ? (
        <p>Loading</p>
      ) : (
        payload.map((serie) => (
          <Card
            key={serie.title}
            text={serie.title}
            src={serie.images['Poster Art'].url}
          />
        ))
      )}
    </div>
  )
}

export default Series
