import useFetchQuizData from "../hooks/useFecthQuizData"
import '../styles/components/SelectCategory.css'

export default function SelectCategory () {
    const data = (useFetchQuizData()).data
    const categories = data ? [...new Set(data.map(question => question.category))] : []

    return (
        <div className="categories-container">
            <h2>Choix de préférences</h2>
            <p>Sélectionnez une catégorie pour commencer :</p>
            <div className="categories">
                {categories.map((category) => <button key={category}>{category.toUpperCase()}</button>
                )}
            </div>
        </div>
    )
}