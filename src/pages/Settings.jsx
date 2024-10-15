import SelectField from "../components/SelectField"
import InputField from "../components/InputField"
import { categories, categoryMapping } from "../data/categories"
import { difficulties } from "../data/difficulties"
import '../styles/pages/Settings.css'
import { useState } from "react"
import { buildUrl } from "../hooks/buildUrl"
import axios from "axios"

export default function Settings () {
    const [category, setCategory] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [numQuestions, setNumQuestions] = useState(0)

    const handleCategoryChange = (event) => {
        setCategory(categoryMapping[event.target.value])
    }

    const handleDifficultyChange = (event) => {
        setDifficulty(event.target.value.toLowerCase())
    }

    const handleNumQuestionsChange = (event) => {
        setNumQuestions(event.target.value)
    }

    // Our core parameters
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleSubmit = async () => {
        const url = buildUrl({
            category, 
            difficulty, 
            numQuestions
        })

        //Fetch data
        setIsLoading(true)

        try {
            const response = await axios.get(url)
            setData(response.data)
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }

        // Conditional rendering based on state
        if (isLoading) {
            return <p>Loading...</p>;
        } else if (error) {
            return <p>Error: {error.message}</p>;
        }
    }

    return (
        <form className="quiz-form" onSubmit={handleSubmit}>
            <h2> Quiz App : Configuration</h2>
            <p>Let&apos;s make your experience unique</p>
            <div className="settings-fields">
                <SelectField 
                    id="category-select" 
                    name="categories" 
                    options={categories} 
                    label="Choose a category"
                    onChange={handleCategoryChange}
                />
                <SelectField 
                    id="difficulty-select" 
                    name="difficulties" 
                    options={difficulties} 
                    label="Choose difficulty level"
                    onChange={handleDifficultyChange}
                />
                <InputField 
                    minAmount={1}
                    maxAmount={50}
                    onChange={handleNumQuestionsChange}
                />
            </div>
            <button type="submit">
                Start Quiz
            </button>
            {(!isLoading && !error && data) && (
              <div>
                <h2>Fetched Data</h2>
                {/* Display the fetched data here (e.g., loop through an array or access specific properties) */}
                <pre>{JSON.stringify(data, null, 2)}</pre>  {/* Pretty-print the JSON data */}
              </div>
            )}
        </form>
    )
}