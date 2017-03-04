import React, { Component } from 'react';

class Client extends Component {
    render() {

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
        };

        const rightColumn = {
            display: 'flex',
            background: `url(https://firebasestorage.googleapis.com/v0/b/era-portfolio.appspot.com/o/clients%2Fclients.png?alt=media&token=b29179a0-7835-4209-87e9-e2c1f0d94fa2) no-repeat center center`,
            backgroundSize: 'contain',
        };

        const heading = {
            textAlign: 'left',
            color: '#FFFFFF',
            fontSize: '4.0em',
            lineHeight: '1.0em',
            fontStyle: 'italic',
            margin: '0',
            width: '70%',
        };

        const divider = {
            marginBottom: '60px',
        };

        return (
            <div className="section">
                <div className="container-fluid">
                    <div className="container" style={container}>
                        <div className="row" style={mainRow}>
                            <div className="col-md-6" style={leftColumn}>
                                <h1 style={heading}>here are some of the people that trust us.</h1>
                                <div className="row" style={divider} />
                                <h1 style={heading}>you might know them...</h1>
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
