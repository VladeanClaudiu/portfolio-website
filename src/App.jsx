import './App.css'
import About from './components/About'
import Projects from './components/Projects';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import Contact from './components/Contact';

function App() {
  let localDMvalue = localStorage.getItem("darkMode");
  if(localDMvalue === null){
    localStorage.setItem("darkMode", true)
  }
  console.log(localDMvalue)
  const [darkMode, setDarkMode] = useState( JSON.parse(localDMvalue) === true);

  useEffect(()=> {
    localStorage.setItem("darkMode", darkMode)
  },[darkMode])
  
  

    function changeMode() {
      console.log("clicked")
      console.log(darkMode)
      setDarkMode(!darkMode);
    }

  return (
    <Router>
      <Routes>
        <Route path="/" element= {<About 
                                        darkMode = {darkMode}
                                        handleClick = {changeMode}
                                  />}/>
        <Route path="/projects" element= {<Projects 
                                        darkMode = {darkMode}
                                        handleClick = {changeMode}
                                    />} />
        <Route path="/contact" element={<Contact 
                                        darkMode = {darkMode}
                                        handleClick = {changeMode}
                                    />} />

      </Routes>
    </Router>
  )
}

export default App
