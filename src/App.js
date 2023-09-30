import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import TitleBar from './Components/TitleBar/TitleBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <TitleBar/>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
        </Routes>
      </Router>
    </>
  ); 
}

export default App;
