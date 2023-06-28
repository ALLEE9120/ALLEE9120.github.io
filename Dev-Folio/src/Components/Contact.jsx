/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact({color}) {
  const divStyle = {
    color: color,
  }

  const formStyle = {
    color: color,
    border: `2px solid ${color}`,
  }

  const inputStyle = {
    border: `1px solid ${color}`,
    backgroundColor: 'transparent',
    zIndex: '10',
    width: '100%',
  }

  const spanStyle = {
    color: color,
    marginLeft: '12px',
    fontSize: '1.2rem',
    fontWeight: '500',
    letterSpacing: '1px',
    position: 'absolute',
    top: '8px',
    zIndex: '0',
    transition: 'all 0.1s ease-in-out',
  }

  const divStyle2 = {
    position: 'relative',
    width: '100%',
  }

  const handleSpanRemoval = (e) => {
    const span = e.target.previousSibling
    if (e.target.value !== '') {
      span.style.opacity = '0'
    } else {
      span.style.opacity = '1'
    }
  }

  const handleSpanCLick = (e) => {
    const span = e.target
    const input = span.nextSibling
    input.focus()
  }

  const submitStyle = {
    border: `1px solid ${color}`,
    backgroundColor: 'transparent',
    zIndex: '10',
    width: '100%',
    marginTop: '20px',
    padding: '10px',
    cursor: 'pointer',
    transition: 'all 0.1s ease-in-out',
  }

  const array = ['Name', 'Email']



  return (
    <div className="contact-div" style={divStyle}>
      <div className="contact-body">
        <div className="contact-title top">
          <h1>&lt;div id='contact'&gt;</h1>
        </div>
        <div className="contact-container">
          <div className='contact-left'>
            <h1>Get in touch</h1>
            <p>Feel free to reach out to me for any questions or just to say hi!</p>
            <div className="socials">
              <h2 className='gray'>// socials</h2>
              <a href="" className="social-link"><FaGithub style={{marginRight: '20px', fontSize: '30px', color: color}}  /></a>
              <a href="" className="social-link"><FaLinkedin style={{marginRight: '20px', fontSize: '30px', color: color}} /></a>
            </div>
          </div>
          <form className='contact-form' style={formStyle}>
            {array.map((item, index) => {
              return (
                <div style={divStyle2} key={index}>
                  <span style={spanStyle} onClick={handleSpanCLick}>{item}</span>
                  <input type="text" id={item} name={item} style={inputStyle} onChange={handleSpanRemoval}></input>
                </div>
              )
            })}
            <div style={divStyle2}>
              <span style={spanStyle} onClick={handleSpanCLick}>Message</span>
              <textarea type="text" id='message' name='message' style={inputStyle} onChange={handleSpanRemoval}></textarea>
              </div>
            <div style={divStyle2}>
              <input type="submit" value="Submit" style={submitStyle}></input>
            </div>
          </form>
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
