import React, { Component } from 'react';

class Capability extends Component {
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
        };

        const rightColumn = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            backgroundColor: '#0A2037',
            padding: '40px',
        };

        const whiteRow = {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            height: '100%',
        };

        const whiteColumn = {
            margin: '10px',
        };

        const contentRow = {
            display: 'flex',
        };

        const contentColumn = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            marginLeft: '60px',
            marginRight: '40px',
            marginBottom: '50px',
            marginTop: '100px',
            width: '100%',
        };

        const heading = {
            textAlign: 'left',
            color: '#FFFFFF',
            fontSize: '4.0em',
            lineHeight: '1.0em',
            fontStyle: 'italic',
            margin: '0',
            width: '300px',
        };

        const list = {
            fontFamily: 'TextaLight',
            color: '#0A2037',
            fontSize: '2.0em',
            lineHeight: '1.0em',
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
                                <div className="row" style={whiteRow}>
                                    <div className="col" style={whiteColumn}>
                                        <div className="row" style={contentRow}>
                                            <div className="col-xs-10 col-md-8 col-lg-8" style={contentColumn}>
                                                <div className="row" style={divider} />
                                                <ul className="list-unstyled" style={list}>
                                                    <li>RESEARCH & STRATEGY</li>
                                                    <div className="row" style={divider} />
                                                    <li>REACH</li>
                                                    <div className="row" style={divider} />
                                                    <li>CONTENT</li>
                                                    <div className="row" style={divider} />
                                                    <li>TECHNOLOGY</li>
                                                    <div className="row" style={divider} />
                                                    <li>CREATIVE</li>
                                                    <div className="row" style={divider} />
                                                    <li>DIGITAL & <br />SOCIAL</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6" style={rightColumn}>
                                <h1 style={heading}>here's a list of our main capabilities.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Capability;
