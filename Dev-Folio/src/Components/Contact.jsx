/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useRef } from 'react'
import emailjs from 'emailjs-com';

export default function Contact({color, bgColor}) {
  const array = ['Name', 'Email']

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

  const divStyle2 = {
    position: 'relative',
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
    transition: 'all 0.5s ease-in-out',
  }

  const submitStyle = {
    border: `1px solid ${color}`,
    zIndex: '10',
    width: '100%',
    padding: '10px',
    cursor: 'pointer',
    transition: 'all 0.5s ease-in-out',
    color: color,
    backgroundColor: bgColor,
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

  const handleHover = (e) => {
    e.target.style.backgroundColor = color
    e.target.style.color = bgColor
  }

  const handleHoverOut = (e) => {
    e.target.style.backgroundColor = bgColor
    e.target.style.color = color
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    emailjs.sendForm('service_wn0moae', 'template_qoabhmp', form, 'N2SIozkNfMSTZXMWo')
      .then((result) => {
          console.log(result.text);
          alert('Message Sent, I will get back to you shortly', result.text);
      }, (error) => {
          console.log(error.text);
          alert('An error occurred, Please try again', error.text);
      });

      const inputs = form.querySelectorAll('input');
      const textarea = form.querySelector('textarea');
      inputs.forEach((input) => {
        if (input.type !== 'submit') {
          input.value = '';
          input.previousSibling.style.opacity = '1';
          textarea.value = '';
          textarea.previousSibling.style.opacity = '1';
        }
      });


  };


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const name = e.target.children[0].children[1].value;
  //   const email = e.target.children[1].children[1].value;
  //   const message = e.target.children[2].children[1].value;

    // try {
    //   const response = await fetch('https://api.elasticemail.com/v2/email/send/apikey=407FF155B752D81908B8B08C64FB34AC12C4109910C2FE1404BE347B5D9B8F317B8317E590510BDFFBFBFB2079C54635', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       msgfrom: 'ma.dev.folio@gmail.com',
    //       msgfromName: 'Your Name',
    //       msgto: '791600ali@gmail.com',
    //       subject: 'Contact Form Submission',
    //       bodyText: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    //     }),
    //   });

    //   const data = await response.json();
    //   console.log('Email sent successfully!', data);
    //   // Additional logic after successful email submission
    // } catch (error) {
    //   console.error('Error sending email:', error);
    //   // Error handling logic
    // }


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
          <form className='contact-form' style={formStyle}  onSubmit={handleSubmit}>
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
              <input type="submit" value="Submit" style={submitStyle} onMouseOver={handleHover} onMouseOut={handleHoverOut}></input>
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
