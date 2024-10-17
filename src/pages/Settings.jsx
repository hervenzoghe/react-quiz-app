
import PropTypes from 'prop-types'
import '../styles/pages/Settings.css'
import SelectField from "../components/SelectField"
import InputField from "../components/InputField"
import { categories } from "../data/categories"
import { difficulties } from "../data/difficulties"
import { useNavigate } from "react-router-dom"

export default function Settings ({category, difficulty, numQuestions, onCategoryChange, onDifficultyChange, onNumQuestionsChange}) {
    // Navigate to other page
    const navigate = useNavigate()

    // Function for handling form submission
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/questions")
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
                    value={category}
                    onChange={onCategoryChange}
                />
                <SelectField 
                    id="difficulty-select" 
                    name="difficulties" 
                    options={difficulties} 
                    label="Choose difficulty level"
                    value={difficulty}
                    onChange={onDifficultyChange}
                />
                <InputField 
                    minAmount={1}
                    maxAmount={50}
                    value={numQuestions}
                    onChange={onNumQuestionsChange}
                />
            </div>
            <button type="submit">
                Start Quiz
            </button>
        </form>
    )
}

Settings.propTypes = {
    category: PropTypes.string ,
    difficulty: PropTypes.string,
    numQuestions: PropTypes.number,
    onDifficultyChange: PropTypes.func,
    onCategoryChange: PropTypes.func,
    onNumQuestionsChange: PropTypes.func
}