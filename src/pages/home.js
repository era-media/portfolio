import React, { Component } from 'react';

class Home extends Component {
    render() {

        const section = {
            backgroundColor: 'RGBA(10, 32, 55, 1.00)',
        };

        const container = {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            width: '100%',
            height: '100%',
            background: `url(https://firebasestorage.googleapis.com/v0/b/era-portfolio.appspot.com/o/era-artwork%2Fair_hockey.gif?alt=media&token=e8c0ae52-fa68-4f0f-9684-7f09624e6629) no-repeat center center`,
            backgroundSize: 'cover',
        };

        const row = {
            display: 'flex',
        };

        const column = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            marginLeft: '90px',
            marginRight: '60px',
            marginBottom: '150px',
            marginTop: '150px',
        };

        const paragraph = {
            textAlign: 'left',
            fontStyle: 'italic',
            color: 'white',
            fontSize: '2.2em',
            lineHeight: '1.1em',
        };

        const divider = {
            height: '60px',
        };

        return (
            <div className="section" style={section}>
                <div className="container-fluid">
                    <div className="container" style={container}>
                        <div className="row" style={row}>
                            <div className="col-xs-12 col-sm-10 col-md-8 col-lg-4" style={column} >
                                <h1 style={paragraph}>" We are a data-driven creative agency with a strong emphasis on content creation."</h1>
                                <div className="row" style={divider} />
                                <h1 style={paragraph}>" We bring brands up to speed with today's fast paced digital era through smart content creation, storytelling, and interactive experiences."</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Home;
