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
            background: `url(https://firebasestorage.googleapis.com/v0/b/era-portfolio.appspot.com/o/era-artwork%2Fair_hockey_animation.gif?alt=media&token=e70bf189-d74b-402a-b2e2-8a48a8efb700) no-repeat center center`,
            backgroundSize: 'contain',
        };

        const row = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            margin: '10px',
        };

        const column = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        };

        const paragraph = {
            textAlign: 'left',
            fontStyle: 'italic',
            color: 'white',
            lineHeight: '1.1em',
        };

        const divider = {
            height: '40px',
        };

        return (
            <div className="section" style={section}>
                <div className="container-fluid">
                    <div className="container" style={container}>
                        <div className="row" style={row}>
                            <div className="col-xs-12 col-sm-10 col-md-8 col-lg-4 home_col" style={column} >
                                <h1 className="home_paragraph" style={paragraph}>" We are a data-driven creative agency with a strong emphasis on content creation."</h1>
                                <div className="row" style={divider} />
                                <h1 className="home_paragraph" style={paragraph}>" We bring brands up to speed with today's fast paced digital era through smart content creation, storytelling, and interactive experiences."</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Home;
