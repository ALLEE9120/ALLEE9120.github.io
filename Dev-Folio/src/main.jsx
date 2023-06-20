import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './Components/NavBar.jsx'
import Tools from './parts/Tools.jsx'
import Home from './parts/Home.jsx'
import './app.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Home />
    <Tools />
  </React.StrictMode>,
)
