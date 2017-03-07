import React, { Component } from 'react';
import Home from '../pages/home.js';
import About from '../pages/about.js';
import Capability from '../pages/capability.js';
import Client from '../pages/client.js';
import Work from '../pages/work.js';
import End from '../pages/end.js';
import Data from '../data/work.js';

class Main extends Component {
    render() {
        return (
            <div id="fullpage">
                <Home />
                <About />
                <Capability />
                <Client />
                <Work data={Data.KOC}/>
                <Work data={Data.MARKAZ}/>
                <Work data={Data.BOE}/>
                <Work data={Data.CIRCUIT}/>
                <Work data={Data.IKEA}/>
                <Work data={Data.ALROUMI}/>
                <End />
            </div>
        );
    }
};

export default Main;
