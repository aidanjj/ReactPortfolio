import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import TitleBar from './Components/TitleBar/TitleBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { render } from '@testing-library/react';
import ParticleAnimation from 'react-particle-animation';

function App() {
  return (
    <>
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
        </Routes>
      </Router>
      </div>
    </>
  ); 
}

export default App;
