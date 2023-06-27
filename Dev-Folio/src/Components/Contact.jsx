/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Contact({color, bgColor}) {
  const divStyle = {
    color: color,
  }

  const formStyle = {
    color: color,
    border: `2px solid ${color}`,
  }

  const inputStyle = {
    border: `1px solid ${color}`,
    backgroundColor: bgColor,
  }


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
            <input type="text" id="name" name="name" placeholder='Name' style={inputStyle}></input>
            <input type="text" id="email" name="email" placeholder='Email' style={inputStyle}></input>
            <textarea type="text" id="message" name="message" placeholder='Message' style={inputStyle}></textarea>
            <input type="submit" className='submit' value="Send"></input>
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
