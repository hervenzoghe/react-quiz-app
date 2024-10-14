import PropTypes from 'prop-types'
import '../styles/components/InputField.css'

export default function InputField ({minAmount, maxAmount}) {
    return (
        <div className="input-field">
            <label htmlFor="amount">Amount of Questions</label>
            <input type="number" min={minAmount} max={maxAmount} placeholder="23"/>
        </div>
    )
}

InputField.propTypes = {
    minAmount: PropTypes.number,
    maxAmount: PropTypes.number
}