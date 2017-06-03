import React from 'react';
import Landing from './Landing/Landing.js';
import Skills from './Skills/Skills.js';
import Projects from './Projects/Projects.js';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Landing/>
        <Skills/>
        <Projects/>
      </div>
    );
  }
}

export default App;
