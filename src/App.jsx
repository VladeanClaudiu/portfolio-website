import './App.css'
import About from './components/About'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />}/>
        <Route path="/projects" element={<About />} />
        <Route path="/projects" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
