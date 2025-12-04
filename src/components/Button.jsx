import PropTypes from 'prop-types';

function Button({label="Schedule Now", fullWidth=false, inverted=false, link=""}) {
  return (
        <a href={link} target='_blank'>
    <button className={`${inverted ? 'inverted' : ''} ${fullWidth ? 'full-width' : ''} cta-button`}>
          <p>{label}</p>
        </button>
        </a>
  )
}
Button.propTypes = {
    label:PropTypes.string,
    fullWidth: PropTypes.bool,
    inverted: PropTypes.bool,
    link: PropTypes.string
}
export default Button