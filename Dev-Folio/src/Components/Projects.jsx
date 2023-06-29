/* eslint-disable react/no-unescaped-entities */
import PropTypes from 'prop-types'
import ProjectComponent from './ProjectComponent'

export default function Projects({color, bgColor}) {
  return (
    <div className="projects-div">
      <div className="projects-title top">
        <h1>&lt;div id='projects'&gt;</h1>
      </div>
      <ProjectComponent
        color={color}
        title={'TripItEasy'}
        description={'Mobile travel web app that simplifies users experience to create trips and add activities to their trips.'}
        bgColor={bgColor}
        techStack={[
        'Ruby on Rails',
        'Javascript',
        'BootStrap',
        'SCSS',
        'SQLite',
        'Google Maps API',
        'Heroku'
        ]}
      />
      <ProjectComponent
        color={color}
        title={'TripItEasy'}
        description={'Mobile travel web app that simplifies users experience to create trips and add activities to their trips.'}
        bgColor={bgColor}
        techStack={[
        'Ruby on Rails',
        'Javascript',
        'BootStrap',
        'SCSS',
        'SQLite',
        'Google Maps API',
        'Heroku'
        ]}
      />
      <div className="projects-title bottom">
        <h1>&lt;/div&gt;</h1>
      </div>
    </div>
  )
}

Projects.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
}
