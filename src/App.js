import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import AllVideos from './Components/Vlogs/AllVideos'; // Import the new component
import AllPrograms from './Components/AllPrograms/AllPrograms';
import { Home } from './Components/Home/Home';
import {Navbar, NavbarHome} from './Components/Navbar/Navbar';
function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/allvideos" element={<AllVideos/>} />
          <Route path="/allprograms" element={<AllPrograms />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
