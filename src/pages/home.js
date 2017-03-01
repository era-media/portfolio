import React, { Component } from 'react';

class Home extends Component {
    render() {

        const container = {
            display: 'block',
            position: 'absolute',
            top: '150px',
            left: '130px',
        };

        const row = {
            display: 'flex',
            margin: '100px auto',
            padding: '20px 20px',
        };

        const paragraph = {
            textAlign: 'left',
            color: 'white',
            fontWeight: '900',
        };

        return (
            <div className="section">
                <div className="container" style={container}>
                    <div className="row" style={row}>
                        <div className="col-xs-11 col-sm-9 col-md-7">
                            <h1 style={paragraph}>" We are a data-driven creative agency with a strong emphasis on content creation."</h1>
                            <br />
                            <h1 style={paragraph}>" We bring brands up to speed with today's fast paced digital era through smart content creation, storytelling, and interactive experiences."</h1>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Home;
