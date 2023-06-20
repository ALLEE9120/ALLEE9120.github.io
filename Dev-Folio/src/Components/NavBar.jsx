import { useState } from 'react';

export default function NavBar() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [list] = useState(['.tools()', '.projects()', '.contact()']);

  const handleHover = (index) => {
    setHoverIndex(index);
  };

  const handleOff = () => {
    setHoverIndex(null);
  };

  return (
    <div className='nav-conatiner'>
    <nav className='nav-bar'>
      <h1 className='nav-logo'>muhammad.ali</h1>
      <ul className='nav-links'>
        {list.map((item, index) => (
          <li className='nav-link' key={index} onMouseOver={() => handleHover(index)} onMouseOut={handleOff}>
            <p>{item}</p>
            <div className='border-bottom' style={{ width: hoverIndex === index ? '100%' : '0' }}></div>
          </li>
        ))}
        <button className='light-mode-btn'>.lightMode()</button>
      </ul>
    </nav>
    </div>
  );
}
