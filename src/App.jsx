import './App.css'
import About from './components/About'
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(true);

  function changeMode() {
    console.log("clicked")
    console.log(darkMode)
    setDarkMode(!darkMode);
  }
  return (
    <section className={darkMode? "appSectionLight" : "app-section"}>
      <About
      darkMode = {darkMode}
      handleClick = {changeMode}/>
    </section>
  )
}

export default App
