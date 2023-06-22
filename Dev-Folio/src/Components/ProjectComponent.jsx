/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import { FaGithub, FaLink } from 'react-icons/fa'
import PropTypes from 'prop-types'

export default function ProjectComponent({color, title, description, techStack, bgColor}) {
  const skillDivStyle = {
    display: 'flex',
  }

  return (
    <div>
      <div className="allinfo-div" style={skillDivStyle}>
        <div className="project">
          <div className="project-list">
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
              <a style={{color: color}} className={'Demo'} href="https://tripiteasy.herokuapp.com/">Visit Site <FaLink style={{marginLeft: '20px'}}/></a>
              <a style={{color: color}} className={'Code'} href="https://github.com/chiara-muller/TripItEasy">See the code<FaGithub style={{marginLeft: '20px'}}/></a>
            </div>
          </div>
        </div>
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
