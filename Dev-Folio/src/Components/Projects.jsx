/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types'
import { FaGithub, FaLink } from 'react-icons/fa'

export default function Projects({color}) {
  const toolDivStyle = {
    color: color,
  }

  const skillDivStyle = {
    display: 'flex',
  }

  const bodyStyle = {
    position: 'relative',
    top: '15vh',
    width: '80vw',
  }

  return (
    <div className="projects-div" style={toolDivStyle}>
      <div className="projects-body" style={bodyStyle}>
        <div className="projects-title top">
          <h1>&lt;div id='projects'&gt;</h1>
        </div>
          <div className="allinfo-div" style={skillDivStyle}>
            <div className="project">
              <div className="project-list">
                <h1 className="project-title">TripItEasy</h1>
                <p>Mobile travel web app that simplifies users experience to create trips and add activities to their trips.</p>
                <div className="project-stack">
                  <h2 className='gray'>// Tech Stack</h2>
                  <ul>
                    <li>Ruby on Rails</li>
                    <li>Javascript</li>
                    <li>BootStrap</li>
                    <li>SCSS</li>
                    <li>SQLite</li>
                    <li>Google Maps API</li>
                    <li>Heroku</li>
                  </ul>
                </div>
                <h2 className='gray'>// See it in action</h2>
                <div className="project-links">
                  <a className={'Demo'} href="https://tripiteasy.herokuapp.com/">Visit Site <FaLink style={{marginLeft: '20px'}}/></a>
                  <a className={'Code'} href="https://github.com/chiara-muller/TripItEasy">See the code<FaGithub style={{marginLeft: '20px'}}/></a>
                </div>
              </div>
          </div>
        </div>
        <div className="projects-title bottom">
          <h1>&lt;/div&gt;</h1>
        </div>
      </div>
    </div>
  )
}

Projects.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
}
