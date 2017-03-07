import React, { Component } from 'react';

class Client extends Component {
    render() {

        const section = {
            backgroundColor: 'white',
        };

        const container = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
            flexDirection: 'row',
            width: '100%',
            height: '100%',
        };

        const mainRow = {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            margin: '20px auto',
            width: '100%',
        };

        const leftColumn = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            backgroundColor: '#0A2037',
            padding: '40px',
            background: `url(https://firebasestorage.googleapis.com/v0/b/era-portfolio.appspot.com/o/era-artwork%2Fgallery.jpg?alt=media&token=3a8a99f8-94ab-40c3-986c-6069bd121bb5) no-repeat center center`,
            backgroundSize: 'cover',
            color: 'white',
        };

        const rightColumn = {
            display: 'flex',
            background: `url(https://firebasestorage.googleapis.com/v0/b/era-portfolio.appspot.com/o/clients%2Fclients.png?alt=media&token=b29179a0-7835-4209-87e9-e2c1f0d94fa2) no-repeat center center`,
            backgroundSize: 'contain',
        };

        const heading = {
            textAlign: 'left',
            fontSize: '2.6em',
            lineHeight: '1.1em',
            fontStyle: 'italic',
            marginBottom: '5px',
        };

        const headingRow = {
            padding: '35px',
            margin: '45px',
            backgroundColor: 'RGBA(10, 32, 55, 0.90)',
            width: '455px',
        };


        return (
            <div className="section" style={section}>
                <div className="container-fluid">
                    <div className="container" style={container}>
                        <div className="row" style={mainRow}>
                            <div className="col-md-6" style={leftColumn}>
                                <div className="row" style={headingRow} >
                                    <h1 style={heading}>here are some of the people that trust us.</h1>
                                </div>
                            </div>
                            <div className="col-md-6" style={rightColumn}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Client;
