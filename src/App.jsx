import { useState } from "react"
import Settings from "./pages/settings"
import Questions from './pages/Questions'
import Score from "./pages/Score"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  const [category, setCategory] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [numQuestions, setNumQuestions] = useState("5")
  
  // Managing score state
  let [score, setScore] = useState(0)

  const categoryMapping = {
    "Music": "music",
    "Sport and Leisure": "sport_and_leisure",
    "Film and TV": "film_and_tv",
    "Arts and Literature": "arts_and_literature",
    "History": "history",
    "Society and Culture": "society_and_culture",
    "Sciences": "sciences",
    "Geography": "geography",
    "Food and Drink": "food_and_drink",
    "General Knowledge": "genral_knowledge"
  }

  const handleCategoryChange = (newCategory) => {
    setCategory(categoryMapping[newCategory])
  }

  const handleDifficultyChange = (newDifficulty) => {
    setDifficulty(newDifficulty.toLowerCase)
  }

  const handleNumQuestionsChange = (event) => {
    setNumQuestions(event.target.value)
  }

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <Settings 
              category={category}
              difficulty={difficulty}
              numQuestions={numQuestions}
              onCategoryChange={handleCategoryChange}
              onDifficultyChange={handleDifficultyChange}
              onNumQuestionsChange={handleNumQuestionsChange}
            />} 
        />
        <Route 
          path="/questions"
          element={
            <Questions 
              category={category}
              difficulty={difficulty}
              numQuestions={numQuestions}
              score={score}
              updateScore={setScore}
            />
          }
        />
        <Route 
          path="/score"
          element={
            <Score score={score} />
          }
        />
      </Routes>
    </Router>
  )
}

export default App