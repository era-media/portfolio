import React, { Component } from 'react';
import Home from '../pages/home.js';
import About from '../pages/about.js';
import Capability from '../pages/capability.js';
import Client from '../pages/client.js';
import WorkLeft from '../pages/work-left.js';
import WorkRight from '../pages/work-right.js';

class Main extends Component {
    render() {
        return (
            <div id="pagepiling">
                <Home />
                <About />
                <Capability />
                <Client />
                <WorkRight />
                <WorkLeft />
            </div>
        );
    }
};

export default Main;
