import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Logo from './components/Logo';
import Home from './components/Home';
import About from './components/About';
import Banner from './components/Banner';
import Products from './components/Products';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo/>
        <Navbar/>
        <Home/>
        <About/>
        <Banner/>
        <Products/>
      </div>
    );
  }
}

export default App;
