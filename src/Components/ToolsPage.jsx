/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types'

export default function ToolsPage({color}) {
  const toolDivStyle = {
    color: color,
    display: 'flex',
    flexDirection: 'column',
  }

  const bodyStyle = {
    position: 'relative',
  }

  const colorChange = {
    color: color,
  }

  return (
    <div className="tools-div" style={toolDivStyle}>
      <div className="tools-body" style={bodyStyle}>
        <div className="tools-title top">
          <h1>&lt;div id='tools'&gt;</h1>
        </div>
        <div className="skills-div">
          <div className="card frontend">
            <h1 className="frontend-title">Front-End Technology</h1>
            <div className="frontend-list">
              <ul>
                <li  style={colorChange}>ReactJS</li>
                <li  style={colorChange}>JavaScript</li>
                <li  style={colorChange}>SCSS/SASS</li>
                <li  style={colorChange}>HTML</li>
                <li  style={colorChange}>CSS</li>
                <li  style={colorChange}>Styled Components</li>
              </ul>
            </div>
          </div>
            <div className="card backend">
              <h1 className="backend-title">Back-End Technology</h1>
              <div className="backend-list">
                <ul>
                  <li  style={colorChange}>Ruby on Rails</li>
                  <li  style={colorChange}>NodeJS</li>
                  <li  style={colorChange}>MySQL</li>
                </ul>
              </div>
            </div>
            <div className="card other">
              <h1 className="other-title">Other Technologies</h1>
              <div className="other-list">
                <ul>
                  <li  style={colorChange}>Git</li>
                  <li  style={colorChange}>GitHub</li>
                  <li  style={colorChange}>Heroku</li>
                  <li  style={colorChange}>Vite</li>
                  <li  style={colorChange}>VS Code</li>
                  <li  style={colorChange}>SQLite</li>
                </ul>
            </div>
          </div>
        </div>
        <div className="tools-title bottom">
          <h1>&lt;/div&gt;</h1>
        </div>
      </div>
    </div>
  )
}

ToolsPage.propTypes = {
  color: PropTypes.string,
}
