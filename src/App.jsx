import './App.css'
import About from './components/About'
import Projects from './components/Projects';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from 'react';

function App() {
const [darkMode, setDarkMode] = useState(true);

    function changeMode() {
      console.log("clicked")
      console.log(darkMode)
      setDarkMode(!darkMode);
    }

  return (
    <Router>
      <Routes>
        <Route 
        path="/" 
        element=
        {<About 
            darkMode = {darkMode}
            handleClick = {changeMode}
        />}/>
        <Route 
        path="/projects" 
        element=
        {<Projects 
            darkMode = {darkMode}
            handleClick = {changeMode}
        />} />
        <Route path="/projects" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
