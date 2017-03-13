import React, { Component } from 'react';

class Capability extends Component {
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
            padding: '0px 3px',
        };

        const mainRow = {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            width: '100%',
        };

        const leftColumn = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            border: '5px white solid',
            backgroundColor: '#0A2037',
        };

        const rightColumn = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
            background: `url(https://firebasestorage.googleapis.com/v0/b/era-portfolio.appspot.com/o/era-artwork%2Fsea_side.jpg?alt=media&token=c4898e6a-f362-4c4b-ace1-80a99c8bbe8d) no-repeat center center`,
            backgroundSize: 'cover',
            backgroundColor: '#0A2037',
            color: 'white',
            minHeight: '500px',
            padding: '0px',
            border: '5px white solid',
        };

        const heading = {
            textAlign: 'left',
            lineHeight: '1.1em',
            fontStyle: 'italic',
            marginBottom: '5px',
            padding: '20px',
            backgroundColor: 'RGBA(10, 32, 55, 0.90)',
        };

        const list = {
            fontFamily: 'TextaLight',
            color: '#FFFFFF',
            fontSize: '2.0em',
            lineHeight: '1.0em',
            padding: '40px',
            margin: '35px',
        };

        const divider = {
            marginBottom: '40px',
        };

        const headingRow = {
            display: 'flex',
            justifyContent: 'flex-end',
            width: '380px',
        };

        const headingCol = {
            width: '100%',
            padding: '0px',
        }

        return (
            <div className="section" style={section} >
                <div className="container-fluid">
                    <div className="container" style={container}>
                        <div className="row main-row" style={mainRow}>
                            <div className="col-xs-12 col-sm-12 col-md-6" style={leftColumn}>
                                <div className="row" style={divider} />
                                <ul className="list-unstyled" style={list}>
                                    <li>RESEARCH &<br /> STRATEGY</li>
                                    <div className="row" style={divider} />
                                    <li>REACH</li>
                                    <div className="row" style={divider} />
                                    <li>CONTENT</li>
                                    <div className="row" style={divider} />
                                    <li>TECHNOLOGY</li>
                                    <div className="row" style={divider} />
                                    <li>CREATIVE</li>
                                    <div className="row" style={divider} />
                                    <li>DIGITAL &<br />SOCIAL</li>
                                </ul>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 artwork_col" style={rightColumn}>
                                <div className="row capability_heading_row" style={headingRow} >
                                    <div className="col" style={headingCol}>
                                        <h1 className="capability_heading" style={heading}>here's a list of our main capabilities.</h1>
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

export default Capability;
