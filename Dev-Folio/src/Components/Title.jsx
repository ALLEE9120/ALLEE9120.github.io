import PropTypes from 'prop-types'

export default function Title({classes}) {
  return (
    <div className={classes}>
      Hello World
    </div>
  )
}

Title.propTypes = {
  classes: PropTypes.string,
}
