import axios from 'axios'
import { useEffect, useState } from 'react'

const baseUrl = 'https://api.themoviedb.org/3/trending/'

const useFetch = (category) => {
  const [states, setStates] = useState({
    payload: [],
    loading: false,
  })

  useEffect(() => {
    setStates({
      payload: [],
      loading: true,
    })

    axios
      .get(
        `${baseUrl}/${category}/day?api_key=25a54fb078f05780554c0c17f94855eb&language=pt-BR`,
      )
      .then((data) => {
        setStates({ payload: data.data.results, loading: false })
      })
  }, [category])

  return states
}

export default useFetch
