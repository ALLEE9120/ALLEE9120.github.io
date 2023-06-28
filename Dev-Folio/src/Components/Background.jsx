import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Background({color, bgColor}) {
  const [bubbleSize, setBubbleSize] = useState(screenToBubble());

  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  function screenToBubble() {
    const width = window.innerWidth;
    if (width < 501) {
      return 11;
    } else if (width < 800) {
      return 18;
    } else if (width < 1000) {
      return 25;
    } else if (width < 1200) {
      return 33;
    } else {
      return 45;
    }
  }

  function handleResize() {
    const newBubbleSize = screenToBubble();
    setBubbleSize(newBubbleSize);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },);

  const array = Array.from({ length: bubbleSize }, (_, index) => index + 1);

  return (
    <div className="background-container" style={{color: color, backgroundColor: bgColor, transition: 'all 0.5s ease-in-out',}}>
      <div className="bubbles">
        {array.map((item, index) => (
          <span key={index} style={{
            '--i': getRandomNumber(1, 30),
            backgroundColor: color === '#010710' && (index % 2 === 0 ?  '#4fc3dc' : '#dc4f79' ) ,
            boxShadow: color === '#010710' && (index % 2 === 0 ?  '0 0 0 10px #bcf3ff, 0 0 50px #4fc3dc, 0 0 100px #4fc3dc' : '0 0 0 10px #ffc3d5, 0 0 50px #dc4f79, 0 0 100px #dc4f79' ),
            transition: 'all 0.5s ease-in-out', }}></span>
        ))}
      </div>

    </div>
  )
}

Background.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
}
