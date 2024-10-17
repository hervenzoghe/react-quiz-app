import PropTypes from 'prop-types'
import '../styles/components/InputField.css'

export default function InputField ({minAmount, maxAmount, value, onChange}) {
    return (
        <div className="input-field">
            <label htmlFor="amount">Amount of Questions</label>
            <input type="number" value={value} min={minAmount} max={maxAmount} onChange={onChange} placeholder="23"/>
        </div>
    )
}

InputField.propTypes = {
    minAmount: PropTypes.number,
    maxAmount: PropTypes.number,
    value: PropTypes.number,
    onChange: PropTypes.func
}