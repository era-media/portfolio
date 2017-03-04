import React, { Component } from 'react';

class Home extends Component {
    render() {

        const section = {
            background: `url(https://firebasestorage.googleapis.com/v0/b/era-portfolio.appspot.com/o/era-artwork%2Fair_hockey.gif?alt=media&token=76122ca3-747e-481e-b4eb-80f1b2ff9c88) no-repeat center center`,
            backgroundSize: 'cover',
        };

        const container = {
            flexDirection: 'row',
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
                <div className="container main-container" style={container}>
                    <div className="row" style={row}>
                        <div className="col-xs-12 col-sm-10 col-md-6 col-lg-4" style={column} >
                            <h1 style={paragraph}>" We are a data-driven creative agency with a strong emphasis on content creation."</h1>
                            <div className="row" style={divider} />
                            <h1 style={paragraph}>" We bring brands up to speed with today's fast paced digital era through smart content creation, storytelling, and interactive experiences."</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Home;
