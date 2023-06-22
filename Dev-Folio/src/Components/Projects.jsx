/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types'

export default function Projects({color}) {
  const toolDivStyle = {
    color: color,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  }

  const skillDivStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
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
        <div className="skills-div" style={skillDivStyle}>
          <div className="project">
            <h1 className="project-title">TripItEasy</h1>
            <div className="project-list">
              <img src="https://www.colesclassroom.com/wp-content/uploads/2020/03/white-and-red-cherry-blossom-flowers-3979186.jpg" alt="TripItEasy" />
              <p>Travel App that allows users to create trips and add activities to their trips. Users can also view other users trips and activities.</p>
              <a href="https://tripiteasy.herokuapp.com/">Demo</a>
              <a href="https://github.com/chiara-muller/TripItEasy">Github</a>
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
