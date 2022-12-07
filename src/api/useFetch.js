import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = (url, category) => {
  const [states, setStates] = useState({
    payload: [],
    loading: false,
  })

  useEffect(() => {
    setStates({
      payload: [],
      loading: true,
    })

    axios.get(url).then((data) => {
      if (data.data && data.data.entries) {
        setStates({
          payload: data.data.entries
            .filter(
              ({ releaseYear, programType }) =>
                releaseYear >= 2010 && programType === category,
            )
            .slice(0, 21),
          loading: false,
        })
      }
    })
  }, [])

  return states
}

export default useFetch
