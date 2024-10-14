import SelectField from "../components/SelectField"
import InputField from "../components/InputField"
import { categories } from "../data/categories"
import { difficulties } from "../data/difficulties"
import '../styles/pages/Settings.css'

export default function Settings () {
    /*const [category, setCategory] = useState('any')
    const [difficulty, setDifficulty] = useState('any')
    const [numQuestions, setNumQuestions] = useState(10)*/

    return (
        <form className="quiz-form">
            <div className="settings-fields">
                <SelectField id="category-select" name="category" items={categories} label="Choose a category" />
                <SelectField id="difficulty-select" name="difficulty" items={difficulties} label="Choose difficulty level" />
                <InputField minAmount={5} maxAmount={50} />
            </div>
            <button type="submit">Start Quiz</button>
        </form>
    )
}