import React, { Component } from 'react';
import Main from './main/main.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Main />
      </div>
    );
  }
}

export default App;
