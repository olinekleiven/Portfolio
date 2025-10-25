import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme.jsx';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Jobs from './pages/Jobs';
import Hobbies from './pages/Hobbies';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/hobbies" element={<Hobbies />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;