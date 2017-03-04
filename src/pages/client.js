import React, { Component } from 'react';

class Client extends Component {
    render() {

        const mainRow = {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            margin: '20px auto',
            width: '100%',
        };

        const leftColumn = {
            display: 'flex',
            flexGrow: '1',
            flexDirection: 'column',
            justifyContent: 'center',
        }

        const rightColumn = {
            display: 'flex',
            flexGrow: '1',
        }

        const whiteRow = {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            height: '100%',
        };

        const whiteColumn = {
            margin: '10px',
            display: 'flex',
        };

        const blueRow = {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            height: '100%',
        };

        const blueColumn = {
            backgroundColor: '#0A2037',
            margin: '10px',
            height: 'initial',
            display: 'flex',
            flexDirection: 'column-reverse',
        };

        const imageRow = {
            display: 'flex',
        }

        const imageColumn = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100%',
        }

        const headingRow = {
            display: 'flex',
        }

        const headingColumn = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            margin: '50px',
            width: '100%',
        }

        const heading = {
            textAlign: 'left',
            color: '#FFFFFF',
            fontSize: '4.0em',
            lineHeight: '1.0em',
            fontStyle: 'italic',
        };

        const divider = {
            marginBottom: '60px',
        };

        return (
            <div className="section">
                <div className="container main-container">
                    <div className="row" style={mainRow}>
                        <div className="col-md-6" style={leftColumn}>
                            <div className="row" style={blueRow}>
                                <div className="col" style={blueColumn}>
                                    <div className="row" style={headingRow}>
                                        <div className="col-xs-10 col-md-6 col-lg-6" style={headingColumn}>
                                            <h1 style={heading}>here are some of the people that trust us.</h1>
                                            <div className="row" style={divider} />
                                            <h1 style={heading}>you might know them...</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" style={rightColumn}>
                            <div className="row" style={whiteRow}>
                                <div className="col" style={whiteColumn}>
                                    <div className="row" style={imageRow}>
                                        <div className="col" style={imageColumn}>
                                            <img width="100%" height="auto" role="presentation" src="https://firebasestorage.googleapis.com/v0/b/era-portfolio.appspot.com/o/clients%2Fclients.png?alt=media&token=b29179a0-7835-4209-87e9-e2c1f0d94fa2"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Client;
