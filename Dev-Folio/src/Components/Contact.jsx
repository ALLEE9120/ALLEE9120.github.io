/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types'

export default function Contact({color}) {
  const divStyle = {
    color: color,
  }
  return (
    <div className="contact-div" style={divStyle}>
      <div className="contact-body">
        <div className="contact-title top">
          <h1>&lt;div id='contact'&gt;</h1>
        </div>

        <div className="contact-title bottom">
          <h1>&lt;/div&gt;</h1>
        </div>
      </div>
    </div>
  )
}

Contact.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
}
