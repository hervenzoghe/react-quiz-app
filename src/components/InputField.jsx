import PropTypes from 'prop-types'
import '../styles/components/InputField.css'

export default function InputField ({minAmount, maxAmount}) {
    return (
        <div className="input-field">
            <input type="number" min={minAmount} max={maxAmount}/>
        </div>
    )
}

InputField.propTypes = {
    minAmount: PropTypes.number,
    maxAmount: PropTypes.number
}