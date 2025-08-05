import { Link } from 'react-router-dom';
import '../css/home_style.css';

export default function Home() {
  return (
    <div>
    <h1>Homepage</h1>
    <p>Welcome to the homepage of ConfetturaFatturer!</p>
    <p>This is a simple React application where nothing works and we don't know why!.</p>
    <p>Use the navigation links to explore the empty pages.</p>
    
    <div className='nav-buttons-div'>
        <Link to="/editor" className="nav-button">Editor</Link>
        <Link to="/about" className="nav-button">About</Link>
    </div>

  </div>
  );
}
