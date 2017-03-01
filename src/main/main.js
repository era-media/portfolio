import React, { Component } from 'react';
import Home from '../pages/home.js';
import About from '../pages/about.js';
import Capability from '../pages/capability.js';

class Main extends Component {
    render() {
        return (
            <div id="pagepiling">
                <Home />
                <About />
                <Capability />
                <div className="section"></div>
            </div>
        );
    }
};

export default Main;
