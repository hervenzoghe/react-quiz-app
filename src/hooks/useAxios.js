import { useState, useEffect } from 'react'
import axios from 'axios'

//axios.defaults.baseURL = "https://the-trivia-api.com/v2/questions"

// A customized hook to fetch quiz data
const useAxios = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

  
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await axios.get(url)
                setData(response.data)
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [url])
  
    return { data, isLoading, error }
}
  
export default useAxios