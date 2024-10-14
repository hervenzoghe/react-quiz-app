import PropTypes from 'prop-types'
import '../styles/components/SelectField.css'

export default function SelectField ({id, name, items, label}) {
    return (
        <div className="select-field">
            {label && <label htmlFor={id}>{label}</label>}
            <select name={name} id={id}>
                <option value="">Choose an option</option>
                {items.map((item) => {
                    <option key={item.value} value={item.value}>{item.label}</option>
                })}
            </select>
        </div>
    )
}

SelectField.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        })
    ).isRequired,
    label: PropTypes.string
}