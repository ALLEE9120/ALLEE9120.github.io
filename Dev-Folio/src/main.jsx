import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './Components/NavBar.jsx'
import HomeAbout from './Components/HomeAbout.jsx'
import Background from './Components/Background.jsx'
import './app.scss'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Background />
    <NavBar />
    <HomeAbout />
  </React.StrictMode>,
)
