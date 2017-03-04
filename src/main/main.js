import React, { Component } from 'react';
import Home from '../pages/home.js';
import About from '../pages/about.js';
import Capability from '../pages/capability.js';
import Client from '../pages/client.js';
import Work from '../pages/work.js';
import Data from '../data/work.js';

class Main extends Component {
    render() {
        return (
            <div id="pagepiling">
                <Home />
                <About />
                <Capability />
                <Client />
                <Work data={Data.MARKAZ}/>
                <Work data={Data.IKEA}/>
            </div>
        );
    }
};

export default Main;
