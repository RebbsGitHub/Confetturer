import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Editor from './pages/editor/Editor';
import './App.css';

export default function App() {
  return (
    <Router>
      {/* <div style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/editor">Editor</Link>
      </div> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/editor" element={<Editor />} />
      </Routes> 
    </Router>
  );
}
