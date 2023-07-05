import { useState, useEffect } from 'react'
import Background from "../Components/Background"
import HomePage from "../Components/HomePage"
import NavBar from "../Components/NavBar"
import { lazy, Suspense } from 'react';

export default function Home() {
  let [lightMode, setLightMode] = useState(false);
  let [bgColor, setBgColor] = useState('#010710');
  let [color, setColor] = useState('#ffffff');

  const ToolsPage = lazy(() => import('../Components/ToolsPage'));
  const Projects = lazy(() => import('../Components/Projects'));
  const Contact = lazy(() => import('../Components/Contact'));

  function handleChangeMode() {
    setLightMode(!lightMode);
  }

  useEffect(() => {
    if (lightMode) {
      setBgColor('#ffffff');
      setColor('#010710');
    } else {
      setBgColor('#010710');
      setColor('#ffffff');
    }
  }, [lightMode]);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <NavBar lightMode={lightMode} onHandleChangeMode={handleChangeMode} bgColor={bgColor} color={color} />
        <Background bgColor={bgColor} color={color}/>
        <HomePage bgColor={bgColor} color={color}/>
        <ToolsPage bgColor={bgColor} color={color}/>
        <Projects bgColor={bgColor} color={color}/>
        <Contact bgColor={bgColor} color={color}/>
      </Suspense>
    </div>
  )
}
