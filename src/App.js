import React from 'react';
import Landing from './Landing/Landing.js';
import Skills from './Skills/Skills.js';
import Projects from './Projects/Projects.js';
import Footer from './Footer/Footer.js';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Landing/>
        <Skills/>
        <Projects/>
        <Footer/>
      </div>
    );
  }
}

export default App;
