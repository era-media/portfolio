import React, { Component } from 'react';

class Capability extends Component {
    render() {

        const container = {
            display: 'flex',
            alignItems: 'stretch',
            height: '100%',
            width: '90%',
        };

        const row = {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            padding: '60px 0',
            margin: '20px auto',
        };

        const leftColumn = {
            flexBasis: '50%',
            backgroundColor: 'white',
            padding: '0 15px',
            display: 'flex',
        }

        const subLeftRow = {
            alignItems: 'center',
        };

        const subRightRow = {
            alignItems: 'flex-end',
        };

        const subLeftColumn = {
            padding: '50px',
        }

        const rightColumn = {
            flexBasis: '50%',
            backgroundColor: '#0A2037',
            padding: '0 15px',
            display: 'flex',
        }

        const subRightColumn = {
            padding: '50px',
        }

        const heading = {
            textAlign: 'left',
            color: 'white',
            paddingLeft: '40px',
            fontSize: '4.0em',
            lineHeight: '1.0em',
        };

        const paragraph = {
            textAlign: 'left',
            color: '#0A2037',
            paddingLeft: '40px',
            fontSize: '2.0em',
            lineHeight: '1.0em',
        };

        const list = {
            fontFamily: 'TextaLight',
            color: '#0A2037',
            fontSize: '2.0em',
            lineHeight: '1.0em',
        }

        return (
            <div className="section">
                <div className="container" style={container}>
                    <div className="row" style={row}>
                        <div className="col-md-6" style={leftColumn}>
                            <div className="row" style={subLeftRow}>
                                <div className="col-md-10" style={subLeftColumn}>
                                    <ul className="list-unstyled" style={list}>
                                        <li>RESEARCH & STRATEGY</li>
                                        <br />
                                        <li>REACH</li>
                                        <br />
                                        <li>CONTENT</li>
                                        <br />
                                        <li>TECHNOLOGY</li>
                                        <br />
                                        <li>CREATIVE</li>
                                        <br />
                                        <li>DIGITAL & <br />SOCIAL</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6" style={rightColumn}>
                            <div className="row" style={subRightRow}>
                                <div className="col-md-7" style={subLeftColumn}>
                                    <h1 style={heading}>here's a list of our main capabilities.</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Capability;
