import { useState, useEffect } from 'react'
import axios from 'axios'
const API_URL = "https://the-trivia-api.com/v2/questions"

// A customized hook to fetch quiz data
const useFetchQuizData = () => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await axios.get(API_URL)
                setData(response.data)
            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }
  
        fetchData()
    }, [])
  
    return { data, isLoading, error }
}
  
export default useFetchQuizData;