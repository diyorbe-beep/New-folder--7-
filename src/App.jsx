import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import Contact from './pages/contact/contact';
import About from './pages/about/about';
import SignUP from './components/SignUpPage/SignUpPage'
import LogIn from './components/LoginPage/LoginPage'
import Card from './pages/ProductPage/ProductPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/SignUP" element={<SignUP />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Card" element={<Card />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;