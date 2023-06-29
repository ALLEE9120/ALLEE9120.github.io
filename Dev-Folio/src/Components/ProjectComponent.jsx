/* eslint-disable react/jsx-no-comment-textnodes */
import { FaGithub, FaLink } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { useState } from 'react'

export default function ProjectComponent({color, title, description, techStack, bgColor}) {
  const [hover, setHover] = useState(null)

  const skillDivStyle = {
    display: 'flex',
    marginBottom: '80px'
  }

  const handleLinkHover = (e) => {
    setHover(e.target.className)
  }

  const handleLinkUnhover = () => {
    setHover(null)
  }





  return (
    <div className="allinfo-div" style={skillDivStyle}>
      <h1 className="project-title">{title}</h1>
      <p style={{color: color}}>{description}</p>
      <div className="project-stack">
        <h2 className='gray'>// Tech Stack</h2>
        <ul>
          {techStack.map((tech, index) => {
            return <li key={index} style={{color: bgColor, backgroundColor: color}}>{tech}</li>
          })}
        </ul>
      </div>
      <h2 className='gray'>// See it in action</h2>
       <div className="project-links">
        <a onMouseOver={handleLinkHover} onMouseOut={handleLinkUnhover} style={{color: hover === 'Demo' ? '#3182CE' : color}} className={'Demo'} href="https://tripiteasy.herokuapp.com/">Visit Site <FaLink style={{marginLeft: '20px'}}/></a>
        <a onMouseOver={handleLinkHover} onMouseOut={handleLinkUnhover} style={{color: hover === 'Code' ? '#3182CE' : color}} className={'Code'} href="https://github.com/chiara-muller/TripItEasy">See the code<FaGithub style={{marginLeft: '20px'}}/></a>
      </div>
    </div>
  )
}

ProjectComponent.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  techStack: PropTypes.array,
  bgColor: PropTypes.string,
}
