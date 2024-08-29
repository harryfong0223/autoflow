import PropTypes from 'prop-types'

export const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black text-white p-2 rounded-lg text-sm">
        <p className="label">{`${label} : ${payload[0].value}`}</p>
      </div>
    )
  }
  return null
}

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired,
    })
  ),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
