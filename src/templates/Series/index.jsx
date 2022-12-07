import React from 'react'
import useFetch from '../../api/useFetch'

const baseUrl =
  'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json'

const Series = () => {
  const { payload, loading } = useFetch(baseUrl, 'series')

  return (
    <div>
      {loading ? (
        <p>Loading</p>
      ) : (
        payload.map((serie) => <div>{serie.title}</div>)
      )}
    </div>
  )
}

export default Series
