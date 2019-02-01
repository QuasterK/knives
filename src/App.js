import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Logo from './components/Logo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo/>
        <Navbar/>
      </div>
    );
  }
}

export default App;
