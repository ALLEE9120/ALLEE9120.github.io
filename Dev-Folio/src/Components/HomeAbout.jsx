import { BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';



export default function HomeAbout() {
  return (
    <div className='home-div'>
      <div className='home-about'>
          <h1>Front-End Developer</h1>
        <div className='home-text'>
          <h3>Hi, I’m Muhammad Ali. A passionate Front-end Developer</h3>
          <div className='home-icons'>
            <div className='white'></div>
            <div className='white circle'></div>
            <FaLinkedin size={30} color='#0A66C2' className='home-icon'/>
            <BsGithub size={32} color='#000' className='home-icon github'/>
          </div>
        </div>
      </div>
    </div>
  )
}
