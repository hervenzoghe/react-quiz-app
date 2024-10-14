import SelectField from "../components/SelectField"
import InputField from "../components/InputField"
import { categories, categoryMapping } from "../data/categories"
import { difficulties } from "../data/difficulties"
import '../styles/pages/Settings.css'
import { useState } from "react"
import useFetchQuizData from "../hooks/useAxios"

export default function Settings () {
    const [category, setCategory] = useState('')
    const [difficulty, setDifficulty] = useState('')
    const [numQuestions, setNumQuestions] = useState(0)

    // Call the hool to fetch data
    const { data, isLoading, error } = useFetchQuizData(transformedCategory, difficulty, numQuestions)

    // Our API call URL
    const API_URL = "https://the-trivia-api.com/v2/questions"

    // Mapping user-friendly category with API required format
    const transformedCategory = categoryMapping[category]

    const handleSubmit = async () => {
        // Construct the API URL based on user selections
        let url = `${API_URL}?`
        if (category) {
            url += `categories=${transformedCategory}`
        }
        if (difficulty) {
            url += `&difficulty=${difficulty}`
        }
        if (numQuestions) {
            url += `&limit=${numQuestions}` // Assuming API uses 'limit' for questions
        }

        // Encode special characters in the URL (optional)
        const encodedUrl = encodeURI(url); // Handles special characters like spaces in categories
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
    }

    const handleDifficultyChange = (event) => {
        setDifficulty(event.target.value.toLowerCase())
    }

    const handleNumQuestionsChange = (event) => {
        setNumQuestions(event.target.value)
    }

    return (
        <form className="quiz-form">
            <h2> Quiz App : Configuration</h2>
            <p>Let&apos;s make your experience unique</p>
            <div className="settings-fields">
                <SelectField 
                    id="category-select" 
                    name="category" 
                    items={categories} 
                    label="Choose a category"
                    onChange={handleCategoryChange}
                />
                <SelectField 
                    id="difficulty-select" 
                    name="difficulty" 
                    items={difficulties} 
                    label="Choose difficulty level"
                    onChange={handleDifficultyChange}
                />
                <InputField 
                    minAmount={1}
                    maxAmount={50}
                    onChange={handleNumQuestionsChange}
                />
            </div>
            <button type="submit" onClick={(e) => {
                e.preventDefault()
            }}>
                Start Quiz
            </button>
        </form>
    )
}