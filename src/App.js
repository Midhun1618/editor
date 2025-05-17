
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import GraphicDesign from './pages/GraphicDesign';
import VideoEditing from './pages/VideoEditing';
import PhotoEditing from './pages/PhotoEditing';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectDetails from './pages/ProjectDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/graphic-design" element={<GraphicDesign />} />
            <Route path="/video-editing" element={<VideoEditing />} />
            <Route path="/photo-editing" element={<PhotoEditing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/:projectId" element={<ProjectDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;