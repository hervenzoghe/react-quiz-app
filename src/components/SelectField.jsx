import PropTypes from 'prop-types'
import '../styles/components/SelectField.css'

export default function SelectField ({id, name, options, label, value, onChange}) {
    return (
        <div className="select-field">
            {label && <label htmlFor={id}>{label}</label>}
            <select name={name} id={id} value={value} onChange={onChange}>
                <option value="">Choose an option</option>
                {options.map((item) => (
                    <option key={item.value} value={item.value}>{item.label}</option>
                ))}
            </select>
        </div>
    )
}

SelectField.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        })
    ).isRequired,
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}