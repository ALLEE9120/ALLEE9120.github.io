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
        link = {'https://tripiteasy.herokuapp.com/'}
        githubLink={"https://github.com/chiara-muller/TripItEasy"}
      />
      <ProjectComponent
        color={color}
        title={'This Portfolio'}
        description={'Not much to say here! This one just gave me a good excuse to spend a week practicing with React.'}
        bgColor={bgColor}
        techStack={[
        'React',
        'Javascript',
        'SCSS',
        'Vite',
        'Heroku'
        ]}
        githubLink={"https://github.com/ALLEE9120/Dev-Portfolio"}
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
