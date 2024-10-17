import PropTypes from 'prop-types'
import { useNavigate } from "react-router-dom"
import '../styles/pages/Score.css'

export default function Score ({score, numQuestions}) {
    // Navigate to other page
    const navigate = useNavigate()

    const handleBackToSettings = () => {
        navigate("/")
    }

    return (
        <div className='score'>
            <h3>Final Score : {score}/{numQuestions} </h3>
            <button onClick={handleBackToSettings}>Play Again !</button>
        </div>
    )
}

Score.propTypes = {
    score: PropTypes.number,
    numQuestions: PropTypes.string
}