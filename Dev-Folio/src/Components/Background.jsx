import { useState, useEffect } from 'react';

export default function Background() {
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
    <div className="background-container">
      <div className="bubbles">
        {array.map((item, index) => (
          <span key={index} style={{'--i': getRandomNumber(1, 30)}}></span>
        ))}
      </div>

    </div>
  )
}
