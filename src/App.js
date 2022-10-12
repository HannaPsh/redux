import './App.css';
import Projects from './Components/Projects';
import Navbar from './Components/navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {' '}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/login" element={<Login />} />
        </Routes>{' '}
      </Router>
    </div>
  );
}

export default App;
