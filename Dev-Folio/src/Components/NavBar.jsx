import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function NavBar({lightMode, onHandleChangeMode, color, bgColor}) {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [logoHover, setLogoHover] = useState(false);
  const [list] = useState(['.tools()', '.projects()', '.contact()']);
  const [windowPositionT, setWindowPositionT] = useState(0);
  const [lightModeHover, setLightModeHover] = useState(false);

  const handleHover = (index) => {
    setHoverIndex(index);
  };

  const handleOff = () => {
    setTimeout(() => {
      setHoverIndex(null);
    }, 1000);
  };

  const handleClickList = (index) => {
    window.scrollTo({
      top: (index + 1) *  window.innerHeight,
      behavior: 'smooth',
    });
  };

  const lightModeStyle = {
    backgroundColor: color,
    color: bgColor,
    border: `1px solid ${color}`,
    width: '141px'
  }

  const handleHoverLogo = () => {
    setLogoHover(true);
  }

  const handleLogoOff = () => {
    setLogoHover(false);
  }

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  const handleHoverLightMode = () => {
    setLightModeHover(true);
  }

  const handleLightModeOff = () => {
    setLightModeHover(false);
  }

  const handleScroll = () => {
    setWindowPositionT(window.scrollY);
  }

  const checkWindowPosition = (index) => {
    if (windowPositionT < (index + 2) *  window.innerHeight - 1 && windowPositionT > (index + 1)  *  window.innerHeight - 1) {
      return true;
    } else {
      return false;
    }

  }

  useEffect(() => {
    console.log(windowPositionT);

    window.addEventListener('scroll', handleScroll);
  }, [windowPositionT]);

  return (
    <div className='nav-conatiner'>
      <nav className='nav-bar' style={{color: color}}>
        <h1 className='nav-logo'
         style={{color: logoHover ? '#3182CE' : color}}
         onMouseOver={handleHoverLogo}
         onMouseOut={handleLogoOff}
         onClick={handleLogoClick}> muhammad.ali</h1>
        <ul className='nav-links'>
          {list.map((item, index) => (
            <li className='nav-link' key={index} style={{color: checkWindowPosition(index) && '#3182CE' }} onMouseOver={() => handleHover(index)} onMouseOut={handleOff} onClick={() => handleClickList(index)}>
              <p>{item}</p>
              <div className='border-bottom' style={{ width: checkWindowPosition(index) ? '100%' : (hoverIndex === index ? '100%' : '0'), backgroundColor: color}}></div>
            </li>
          ))}
          <button style={lightModeStyle} className='light-mode-btn' onClick={onHandleChangeMode} onMouseOver={handleHoverLightMode} onMouseOut={handleLightModeOff}>{lightMode? '.darkMode()': '.lightMode()'}</button>
        </ul>
      </nav>
    </div>
  );
}

NavBar.propTypes = {
  lightMode: PropTypes.bool,
  onHandleChangeMode: PropTypes.func,
  bgColor: PropTypes.string,
  color: PropTypes.string,
}
