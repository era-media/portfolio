import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div id="pagepiling">
            <div className="section">Section 1</div>
            <div className="section">Section 2</div>
            <div className="section">Section 3</div>
            <div className="section">Section 4</div>
        </div>
      </div>
    );
  }
}

export default App;
