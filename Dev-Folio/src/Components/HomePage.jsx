/* eslint-disable react/no-unescaped-entities */
export default function HomePage() {
  const divStyle ={
    position: 'absolute',
    top: '30%',
    left: '20%',
    transform: 'translateX(-20%)'
  }

  const h1Style = {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  }

  const pStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
  }

  return (
    <div style={divStyle} className="home-div">
      <h1 style={h1Style}>Hello, I'm Muhammad 👋</h1>
      <p style={pStyle}>I'm a Front-End Web Developer,...</p>
    </div>
  )
}
