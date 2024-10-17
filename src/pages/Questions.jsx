import { useEffect, useState } from "react"
import PropTypes from 'prop-types'
import { buildUrl } from "../hooks/buildUrl"
import useAxios from "../hooks/useAxios"
import { useNavigate } from "react-router-dom"
import '../styles/pages/Questions.css'

export default function Questions ({category, difficulty, numQuestions, score, updateScore}) {

    // Function to get a random questio based on its index
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max))
    }

    // Navigate to other page
    const navigate = useNavigate()

    // Our API call
    const apiUrl = buildUrl({category, difficulty, numQuestions})
    const {data} = useAxios(apiUrl)

    // Managing quiz questions and answers options state
    const [questionIndex, setQuesionIndex] = useState(0)
    const [options, setOptions] = useState([])

    useEffect(() => {
        if (data?.length) {
            const question = data[questionIndex]
            let answers = [...question.incorrectAnswers]
            answers.splice(getRandomInt(question.incorrectAnswers.length), 0, question.correctAnswer)
            setOptions(answers)
        }
    }, [data, questionIndex])

    const handleClickAnswer = (e) => {
        const question = data[questionIndex]

        if (e.target.textContent === question.correctAnswer) {
            updateScore(score + 1)
        }

        if (questionIndex + 1 < data.length) {
            setQuesionIndex(questionIndex + 1)
        } else {
            navigate("/score")
        }
    }

    return (
        <div className="quiz-questions">
            <div className="quiz-heading">
                <h1>Question N°{questionIndex + 1}</h1>
                <p>{data && data[questionIndex].question.text}</p>
            </div>
            <div className="options">
                {options.map((option, id) => (
                    <div  key={id}>
                        <button onClick={handleClickAnswer}>
                            {option}
                        </button>
                    </div>
                ))}
            </div>
            <div className="quiz-score">
                Score : {score} / {data?.length}
            </div>
        </div>
    )
}

Questions.propTypes = {
    category: PropTypes.string ,
    difficulty: PropTypes.string,
    numQuestions: PropTypes.string,
    score: PropTypes.number,
    updateScore: PropTypes.func
}