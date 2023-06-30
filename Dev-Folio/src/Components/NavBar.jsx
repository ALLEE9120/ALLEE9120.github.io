import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function NavBar({lightMode, onHandleChangeMode, color, bgColor}) {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [logoHover, setLogoHover] = useState(false);
  const [list] = useState(['.tools()', '.projects()', '.contact()']);
  const [windowPositionT, setWindowPositionT] = useState(0);
  const [lightModeHover, setLightModeHover] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showMenu, setShowMenu] = useState(false);

  const handleHover = (index) => {
    setHoverIndex(index);
  };

  const handleOff = () => {
      setHoverIndex(null);
  };

  const handleClickList = (index) => {
    window.scrollTo({
      top: (index + 1) *  window.innerHeight,
      behavior: 'smooth',
    });
  };

  const lightModeStyle = {
    backgroundColor: lightModeHover ? bgColor : color,
    color: lightModeHover ? color : bgColor,
    border: `1px solid ${color}`,
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

  const handleMenu = () => {
    setShowMenu(true);
  }

  const handleHide = () => {
    setShowMenu(false);
  }

  const navConatinerStyle = {
    backgroundColor: 'transparent',
    transition: 'all 0.5s ease-in-out',
  }

  useEffect(() => {
    console.log(windowPositionT);
    console.log(windowWidth);


    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
  }, [windowPositionT, windowWidth]);

  return (
    <div className='nav-conatiner' style={navConatinerStyle}>
      <find className='nav-bar' style={{color: color}}>
        <h1 className='nav-logo'
         style={{color: logoHover ? '#3182CE' : color}}
         onMouseOver={handleHoverLogo}
         onMouseOut={handleLogoOff}
         onClick={handleLogoClick}> muhammad.ali</h1>
         { windowWidth < 993 ?
         <button className='nav-find'
         onClick={handleMenu}
         >.find()</button> :
        <ul className='nav-links'>
          {list.map((item, index) => (
            <li
              className='nav-link'
              key={index}
              style={{
                color: checkWindowPosition(index) && '#3182CE'
              }}
              onMouseOver={() => handleHover(index)}
              onMouseOut={handleOff} onClick={() => handleClickList(index)}
            >
              <p>{item}</p>
              <div className='border-bottom' style={{ width: checkWindowPosition(index) ? '100%' : (hoverIndex === index ? '100%' : '0'), backgroundColor: color}}></div>
            </li>
          ))}
          <button style={lightModeStyle} className='light-mode-btn' onClick={onHandleChangeMode} onMouseOver={handleHoverLightMode} onMouseOut={handleLightModeOff}>{lightMode? '.darkMode()': '.lightMode()'}</button>
        </ul>
        }
        { showMenu &&
        <div className='find-div'>
          <div>
            <p onClick={handleHide}>.close()</p>
          </div>
          <ul className='find-links'>
            {list.map((item, index) => (
              <li
                className='find-link'
                key={index}
                style={{
                  color: checkWindowPosition(index) && '#3182CE'
                }}
                onMouseOver={() => handleHover(index)}
                onMouseOut={handleOff} onClick={() => handleClickList(index)}
              >
                <p>{item}</p>
                <div className='border-bottom' style={{ width: checkWindowPosition(index) ? '100%' : (hoverIndex === index ? '100%' : '0'), backgroundColor: color}}></div>
              </li>
            ))}
            <button style={lightModeStyle} onClick={onHandleChangeMode} onMouseOver={handleHoverLightMode} onMouseOut={handleLightModeOff}>{lightMode? '.darkMode()': '.lightMode()'}</button>
          </ul>
        </div>
        }
      </find>
    </div>
  );
}

NavBar.propTypes = {
  lightMode: PropTypes.bool,
  onHandleChangeMode: PropTypes.func,
  bgColor: PropTypes.string,
  color: PropTypes.string,
}
