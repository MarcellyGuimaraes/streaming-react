import React from 'react'
import useFetch from '../../api/useFetch'
import Card from '../../components/Card'
import './index.css'

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
          <div key={serie.title}>
            <Card text={serie.title} src={serie.images['Poster Art'].url} />
          </div>
        ))
      )}
    </div>
  )
}

export default Series
