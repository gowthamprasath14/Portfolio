import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import PublicProfile from './components/PublicProfile/PublicProfile';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <Projects />
        <Certifications />
        <PublicProfile />
        <Contact />
      </main>
    </div>
  );
}

export default App;